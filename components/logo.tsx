import Link from "next/link"
import { Building2 } from "lucide-react"

interface LogoProps {
  asLink?: boolean
  variant?: "default" | "light"
}

export function Logo({ asLink = true, variant = "default" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-secondary"

  const logoContent = (
    <>
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
        <Building2 className="h-5 w-5 text-primary-foreground" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-base font-bold tracking-tight ${textColor}`}>Carvalho</span>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Engenharia</span>
      </div>
    </>
  )

  if (asLink) {
    return (
      <Link href="/" className="flex items-center gap-2.5">
        {logoContent}
      </Link>
    )
  }

  return <div className="flex items-center gap-2.5">{logoContent}</div>
}
