import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, variant = "primary", children, className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline";
  const variants = {
    primary: "bg-sage text-white hover:bg-forest",
    secondary: "bg-forest text-white hover:bg-peat",
    outline: "border-2 border-sage text-sage hover:bg-sage hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
