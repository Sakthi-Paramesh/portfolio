import { useEffect, useRef, useState } from 'react';

// ===== Cursor hook =====
export function useCustomCursor() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(pointer: coarse)').matches;

    if (isTouchDevice) return;

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let isClicking = false;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      inner.style.left = e.clientX + 'px';
      inner.style.top = e.clientY + 'px';
    };

    const onMouseDown = () => {
      isClicking = true;
      outer.classList.add('clicking');
      inner.style.transform = 'translate(-50%, -50%) scale(0.7)';
    };

    const onMouseUp = () => {
      isClicking = false;
      outer.classList.remove('clicking');
      inner.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    const onMouseEnterInteractive = () => {
      outer.classList.add('hovered');
      inner.classList.add('hovered');
    };

    const onMouseLeaveInteractive = () => {
      outer.classList.remove('hovered');
      inner.classList.remove('hovered');
    };

    // Smooth follower loop
    const lerp = (a, b, t) => a + (b - a) * t;
    const loop = () => {
      outerPos.current.x = lerp(outerPos.current.x, mousePos.current.x, 0.12);
      outerPos.current.y = lerp(outerPos.current.y, mousePos.current.y, 0.12);
      outer.style.left = outerPos.current.x + 'px';
      outer.style.top = outerPos.current.y + 'px';
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    // Magnetic hover on interactive elements
    const interactives = document.querySelectorAll('a, button, [data-cursor="hover"]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafRef.current);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  return { outerRef, innerRef };
}

// ===== Scroll direction hook =====
export function useScrollDirection() {
  const [direction, setDirection] = useState('up');
  const [scrolled, setScrolled] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 60);
      if (current < lastScroll.current) {
        setDirection('up');
      } else if (current > 60) {
        setDirection('down');
      }
      lastScroll.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { direction, scrolled };
}

// ===== Active section hook =====
export function useActiveSection(sections) {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observers = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return active;
}

// ===== Count-up hook =====
export function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

// ===== In-view hook =====
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.once !== false) obs.disconnect();
        }
      },
      { threshold: options.threshold || 0.2, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}
