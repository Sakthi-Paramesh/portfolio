import { useEffect } from 'react';
import { useCustomCursor } from '../../hooks/usePortfolio';

export default function Cursor() {
  const { outerRef, innerRef } = useCustomCursor();

  // Re-bind on any DOM changes
  useEffect(() => {
    const rebind = () => {
      const interactives = document.querySelectorAll(
        'a, button, [data-cursor="hover"], input, textarea, select'
      );
      const onEnter = () => {
        outerRef.current?.classList.add('hovered');
        innerRef.current?.classList.add('hovered');
      };
      const onLeave = () => {
        outerRef.current?.classList.remove('hovered');
        innerRef.current?.classList.remove('hovered');
      };
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    const observer = new MutationObserver(rebind);
    observer.observe(document.body, { childList: true, subtree: true });
    rebind();
    return () => observer.disconnect();
  }, [outerRef, innerRef]);

  return (
    <>
      <div ref={outerRef} className="cursor-outer" />
      <div ref={innerRef} className="cursor-inner" />
    </>
  );
}
