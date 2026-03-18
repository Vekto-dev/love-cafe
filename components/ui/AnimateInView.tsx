"use client";

import { useInView } from "@/lib/hooks/useInView";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms, applied via style
}

export function AnimateInView({ children, className = "", delay = 0 }: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
