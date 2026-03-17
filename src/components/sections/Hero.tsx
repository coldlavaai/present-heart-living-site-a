import Button from "@/components/ui/Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: "full" | "narrow";
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  primaryCTA,
  secondaryCTA,
  variant = "full",
}: HeroProps) {
  const heightClass = variant === "full" ? "min-h-[70vh] lg:min-h-screen" : "min-h-[40vh] lg:min-h-[50vh]";

  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
        role="img"
        aria-label={imageAlt}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-heading font-normal mb-4 leading-tight" style={{ color: '#FFFFFF' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/90 text-lg md:text-xl font-body max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
            {subtitle}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Button href={primaryCTA.href} variant="primary">
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <Button href={secondaryCTA.href} variant="outline-light">
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
