import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";
import ClassCard from "@/components/cards/ClassCard";

interface ClassDetailLayoutProps {
  title: string;
  heroImage: string;
  heroAlt: string;
  children: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  relatedClasses?: Array<{
    title: string;
    description: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
  }>;
}

export default function ClassDetailLayout({
  title,
  heroImage,
  heroAlt,
  children,
  ctaLabel = "Book a Class",
  ctaHref = "/contact",
  relatedClasses,
}: ClassDetailLayoutProps) {
  return (
    <>
      <Hero title={title} imageSrc={heroImage} imageAlt={heroAlt} variant="narrow" />

      <section className="py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose text-peat/80 leading-relaxed space-y-6">{children}</div>
        </div>
      </section>

      <CTABanner title="Ready to Try This Practice?" primaryCTA={{ label: ctaLabel, href: ctaHref }} />

      {relatedClasses && relatedClasses.length > 0 && (
        <section className="py-16 lg:py-24 bg-mist/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center mb-10">Explore Other Classes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedClasses.map((cls) => (
                <ClassCard key={cls.title} {...cls} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
