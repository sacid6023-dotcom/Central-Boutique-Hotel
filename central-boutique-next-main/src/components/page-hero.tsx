import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Ornament } from "./ornament";

export function PageHero({
  eyebrow,
  title,
  image,
  crumb,
}: {
  eyebrow: string;
  title: string;
  image: string | StaticImageData;
  crumb?: string;
}) {
  return (
    <section className="relative h-[52vh] min-h-[380px] max-h-[560px] w-full overflow-hidden">
      <Image
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        priority
        fill
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wine-deep/70 via-wine-deep/50 to-charcoal/80" />
      <div className="absolute inset-0 flex items-end pb-16">
        <div className="mx-auto max-w-7xl px-6 w-full text-ivory z-10">
          <p className="eyebrow !text-gold-soft mb-5">{eyebrow}</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02]">{title}</h1>
          <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-ivory/70">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span className="h-px w-6 bg-gold/60" />
            <span className="text-gold">{crumb ?? title}</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <Ornament className="pb-4 opacity-90" />
      </div>
    </section>
  );
}
