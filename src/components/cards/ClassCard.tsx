import Link from "next/link";

interface ClassCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ClassCard({ title, description, href, imageSrc, imageAlt }: ClassCardProps) {
  return (
    <Link href={href} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow no-underline">
      <div
        className="aspect-[3/2] bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
        role="img"
        aria-label={imageAlt}
      />
      <div className="p-6">
        <h3 className="text-forest group-hover:text-sage transition-colors mb-2">{title}</h3>
        <p className="text-peat/70 text-sm leading-relaxed">{description}</p>
        <span className="inline-block mt-4 text-sage text-sm font-semibold group-hover:underline">
          Learn More →
        </span>
      </div>
    </Link>
  );
}
