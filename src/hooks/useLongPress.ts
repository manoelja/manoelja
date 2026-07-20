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
  const firedRef = useRef(false);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      // Only handle primary button / first touch
      if (e.pointerId !== undefined) {
        (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);
      }

      isLongPress.current = false;
      firedRef.current = false;

      clearTimer();

      timerRef.current = setTimeout(() => {
        isLongPress.current = true;
        const el = (e.target as HTMLElement)?.closest('.project-card, .skill-badge');
        if (el) {
          el.classList.add('selectable');
        }
        onLongPress?.();
      }, delay);
    },
    [onLongPress, delay, clearTimer]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      clearTimer();

      const el = (e.target as HTMLElement)?.closest('.project-card, .skill-badge');
      el?.classList.remove('selectable');

      if (!isLongPress.current && !firedRef.current) {
        firedRef.current = true;
        onClick?.();
      }

      isLongPress.current = false;
    },
    [onClick, clearTimer]
  );

  const handlePointerCancel = useCallback(() => {
    clearTimer();
    isLongPress.current = false;
    firedRef.current = false;
  }, [clearTimer]);

  return {
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerUp,
    onPointerCancel: handlePointerCancel
  };
}
