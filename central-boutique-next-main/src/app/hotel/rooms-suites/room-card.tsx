"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Eyebrow } from "@/components/eyebrow";
import { Hairline } from "@/components/ornament";
import { hotelInfo } from "@/lib/site-data";

interface RoomCardProps {
  room: {
    image: string;
    images?: string[];
    name: string;
    count: string;
    subtitle: string;
    body: string;
    amenities: string[];
  };
  index: number;
}

export function RoomCard({ room, index }: RoomCardProps) {
  const roomImages = room.images && room.images.length > 0 ? room.images : [room.image];
  const [selectedImage, setSelectedImage] = useState(roomImages[0]);
  const isOdd = index % 2 === 1;

  return (
    <div className={`grid md:grid-cols-2 gap-14 items-start ${isOdd ? "md:[&>*:first-child]:order-2" : ""}`}>
      {/* Image Gallery Column */}
      <div className="space-y-4">
        <div className="relative overflow-hidden aspect-[4/3] border border-gold/25 group">
          <Image
            src={selectedImage}
            alt={room.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-4 right-4 bg-gold/90 text-charcoal text-[0.65rem] uppercase tracking-[0.2em] font-medium px-3 py-1 z-10">
            {room.count}
          </div>
          <div className={`absolute -inset-4 border border-gold/30 -z-10 ${isOdd ? "-translate-x-6" : "translate-x-6"} translate-y-6`} />
        </div>

        {/* Thumbnails */}
        {roomImages.length > 1 && (
          <div className="flex items-center gap-3 pt-2 overflow-x-auto pb-2">
            {roomImages.map((img, idx) => (
              <button
                key={img}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 aspect-[4/3] rounded-sm overflow-hidden border transition-all ${
                  selectedImage === img
                    ? "border-gold ring-2 ring-gold/40 scale-105"
                    : "border-gold/30 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${room.name} ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Details Column */}
      <div>
        <Eyebrow>Category {String(index + 1).padStart(2, "0")}</Eyebrow>
        <h2 className="font-serif text-4xl md:text-5xl mt-4 text-wine leading-[1.05]">{room.name}</h2>
        <p className="mt-3 italic text-foreground/60 font-serif text-lg">{room.subtitle}</p>
        <Hairline className="mt-6 max-w-[80px]" />
        <p className="mt-6 text-foreground/75 leading-relaxed">{room.body}</p>
        
        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
          {room.amenities.map((a) => (
            <li key={a} className="flex items-center gap-3 text-sm text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
              {a}
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${hotelInfo.email}?subject=Enquiry: ${room.name}`}
          className="mt-10 inline-flex items-center gap-3 btn-wine-fill px-7 py-3.5 uppercase text-xs tracking-[0.24em]"
        >
          <Mail className="h-3.5 w-3.5" />
          Enquire
        </a>
      </div>
    </div>
  );
}
