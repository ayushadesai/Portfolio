import { useEffect, useRef } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove('page-enter');
    void el.offsetWidth; // reflow
    el.classList.add('page-enter');
  }, []);

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  );
}
