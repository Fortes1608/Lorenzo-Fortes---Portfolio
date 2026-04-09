import { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
};

export function SectionContainer({
  children,
  className = "",
  innerClassName = "",
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`px-4 sm:px-6 lg:px-10 ${className}`.trim()}
    >
      <div
        className={`mx-auto max-w-[1680px] ${innerClassName}`.trim()}
      >
        {children}
      </div>
    </section>
  );
}
