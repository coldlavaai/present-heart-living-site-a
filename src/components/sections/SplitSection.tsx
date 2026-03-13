interface SplitSectionProps {
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  bgColor?: string;
}

export default function SplitSection({
  title,
  children,
  imageSrc,
  imageAlt,
  reverse = false,
  bgColor = "",
}: SplitSectionProps) {
  return (
    <section className={`py-16 lg:py-24 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reverse ? "lg:direction-rtl" : ""}`}>
          <div className={`${reverse ? "lg:order-2" : ""}`}>
            <div
              className="aspect-[4/3] rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${imageSrc})` }}
              role="img"
              aria-label={imageAlt}
            />
          </div>
          <div className={`${reverse ? "lg:order-1" : ""}`}>
            <h2 className="mb-6">{title}</h2>
            <div className="prose text-peat/80 leading-relaxed space-y-4">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
