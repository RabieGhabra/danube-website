import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  productSpacing?: boolean;
}

export default function Container({
  children,
  className = "",
  productSpacing = false,
}: ContainerProps) {
  const spacing = productSpacing
    ? "pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-2 sm:pb-4 md:pb-6 lg:pb-10"
    : "";

  return (
    <section
      className={`
        mx-auto
        max-w-[1600px]
        px-4
        lg:px-8
        ${spacing}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
