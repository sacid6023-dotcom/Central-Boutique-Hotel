import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GalleryView } from "@/components/gallery-view";

export const metadata: Metadata = {
  title: "Gallery — Central Boutique Hotel",
  description: "A visual walkthrough of Central Boutique Hotel — rooms, lobby, dining and exterior.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <SiteHeader />
      <main>
        <GalleryView />
      </main>
      <SiteFooter />
    </div>
  );
}
