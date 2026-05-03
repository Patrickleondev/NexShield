import { ShieldCheck } from 'lucide-react'

interface BrandLogoProps {
  compact?: boolean
}

export default function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className="brand-logo" aria-label="NexShield">
      <div className="brand-logo__mark" aria-hidden="true">
        <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
      </div>
      {!compact && (
        <div className="brand-logo__text">
          <span className="brand-logo__name">NexShield</span>
          <span className="brand-logo__status">Building secure systems</span>
        </div>
      )}
    </div>
  )
}