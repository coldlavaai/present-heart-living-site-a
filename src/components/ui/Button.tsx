import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "outline-light";
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, variant = "primary", children, className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors no-underline";
  const variants: Record<string, string> = {
    primary: "bg-sage hover:bg-forest",
    secondary: "bg-forest hover:bg-peat",
    outline: "border-2 border-sage hover:bg-sage",
    "outline-light": "border-2 border-white/70 hover:bg-white/10",
  };

  // Use inline style for reliable colour on links (avoids CSS specificity issues with global a styles)
  const colorStyles: Record<string, React.CSSProperties> = {
    primary: { color: '#FFFFFF' },
    secondary: { color: '#FFFFFF' },
    outline: { color: '#7A8B6F' },
    "outline-light": { color: '#FFFFFF' },
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} style={colorStyles[variant]}>
      {children}
    </Link>
  );
}
