import { useRef, useCallback } from 'react';

interface UseLongPressOptions {
  onLongPress?: () => void;
  onClick?: () => void;
  delay?: number;
}

export function useLongPress({
  onLongPress,
  onClick,
  delay = 500
}: UseLongPressOptions = {}) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isLongPress = useRef(false);
  const targetRef = useRef<EventTarget | null>(null);

  const start = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      isLongPress.current = false;
      targetRef.current = e.target;

      timerRef.current = setTimeout(() => {
        isLongPress.current = true;
        const el = targetRef.current as HTMLElement;
        if (el) {
          el.closest('.project-card, .skill-badge')?.classList.add('selectable');
        }
        onLongPress?.();
      }, delay);
    },
    [onLongPress, delay]
  );

  const stop = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      const el = (e.target as HTMLElement)?.closest('.project-card, .skill-badge');
      el?.classList.remove('selectable');

      if (!isLongPress.current) {
        onClick?.();
      }

      isLongPress.current = false;
    },
    [onClick]
  );

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop
  };
}
