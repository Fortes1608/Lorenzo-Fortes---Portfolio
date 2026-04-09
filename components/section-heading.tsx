type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={className}>
      <p className={`section-eyebrow ${alignment}`.trim()}>{eyebrow}</p>
      <h2 className={`section-title mt-4 ${alignment}`.trim()}>{title}</h2>
      <p className={`section-copy mt-6 ${alignment}`.trim()}>{description}</p>
    </div>
  );
}
