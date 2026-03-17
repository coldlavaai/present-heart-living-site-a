import Button from "@/components/ui/Button";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function CTABanner({ title, subtitle, primaryCTA, secondaryCTA }: CTABannerProps) {
  return (
    <section className="bg-forest py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white mb-4" style={{ color: '#FFFFFF' }}>{title}</h2>
        {subtitle && (
          <p className="text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>{subtitle}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={primaryCTA.href} variant="primary">
            {primaryCTA.label}
          </Button>
          {secondaryCTA && (
            <Button href={secondaryCTA.href} variant="outline-light">
              {secondaryCTA.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
