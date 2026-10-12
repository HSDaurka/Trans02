import { mark } from '@/lib/brand'

/* The attached Trans02 Logistics logo is the mark — never redrawn, traced or
   simplified, and never set beside the name, because the lockup already spells
   it. `plate` is for the dark ground: the file is a dark mark on white, so on
   asphalt it sits on a white plate rather than being recoloured. */
export function Brand({
  className = 'h-8 w-auto',
  plate = false,
}: {
  className?: string
  plate?: boolean
}) {
  const image = (
    <img
      src={mark.src}
      alt={mark.alt}
      width={mark.width}
      height={mark.height}
      className={plate ? `relative ${className}` : className}
      decoding="async"
    />
  )

  if (!plate) return image

  return (
    <span className="inline-flex items-center rounded-md bg-background px-2 py-1.5">
      {image}
    </span>
  )
}
