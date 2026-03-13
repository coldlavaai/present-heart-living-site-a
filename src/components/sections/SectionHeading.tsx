interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-8 lg:mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="mb-4">{title}</h2>
      {subtitle && (
        <p className="text-peat/80 max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}">{subtitle}</p>
      )}
    </div>
  );
}
