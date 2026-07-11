import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  asLink?: boolean
  variant?: "default" | "light"
}

export function Logo({ asLink = true, variant = "default" }: LogoProps) {
  const logoContent = (
    <span
      className={`flex items-center ${variant === "light" ? "rounded-md bg-white/95 px-2 py-1" : ""}`}
    >
      <Image
        src="/images/nexxus-logo.png"
        alt="Nexxus Engenharia"
        width={150}
        height={140}
        priority
        className="h-11 w-auto object-contain"
      />
    </span>
  )

  if (asLink) {
    return (
      <Link href="/" className="flex items-center" aria-label="Nexxus Engenharia - Página inicial">
        {logoContent}
      </Link>
    )
  }

  return <div className="flex items-center">{logoContent}</div>
}
