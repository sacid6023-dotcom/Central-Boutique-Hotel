import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomPremium from "@/assets/room-premium.jpg";
import promoBreakfast from "@/assets/promo-breakfast.jpg";
import promoKey from "@/assets/promo-key.jpg";
import promoBusiness from "@/assets/promo-business.jpg";
import storyCorridor from "@/assets/story-corridor.jpg";

export const heroSlides = [
  {
    src: "/heroImages/390485.webp",
    eyebrow: "Moradabad · Civil Lines",
    title: "Central Boutique Hotel",
    subtitle: "The city's first boutique hotel — fourteen rooms of quiet, considered luxury.",
  },
  {
    src: "/heroImages/390569.webp",
    eyebrow: "An intimate stay",
    title: "Where scale gives way to character",
    subtitle: "Warm interiors, personal service, and a heady, enveloping ambience.",
  },
  {
    src: "/heroImages/390571.webp",
    eyebrow: "Ultra-Modern Chic",
    title: "Quiet, considered luxury in every room",
    subtitle: "Plush velvets, marble-and-glass baths, and an unhurried welcome.",
  },
];

export const promotions = [
  {
    image: promoKey,
    title: "Best Available Flexible Rates",
    tag: "Exclusive Offer",
    body: "Enjoy exclusive benefits such as free room upgrade and complimentary high-speed internet when you book directly with us.",
    link: "/rooms",
  },
  {
    image: promoBreakfast,
    title: "Book Early",
    tag: "Advance Purchase",
    body: "Plan ahead and avail a special discount on our rack rates! The earlier you commit, the more considered the welcome.",
    link: "/hotel/offers",
  },
  {
    image: promoBusiness,
    title: "Business Essentials",
    tag: "Corporate",
    body: "Free high-speed internet, complimentary breakfast, and laundry services — keeping the small necessities quietly sorted.",
    link: "/services",
  },
];

export const rooms = [
  {
    image: "/central/Delux/390601.webp",
    images: [
      "/central/Delux/390601.webp",
      "/central/Delux/390602.webp",
      "/central/Delux/390604.webp",
      "/central/Delux/390605.webp",
      "/central/Delux/390642.webp"
    ],
    name: "Deluxe Room",
    count: "4 Rooms Available",
    subtitle: "Generous spacing & contemporary design",
    body: "Tucked away from the crowded streets of Moradabad, the Deluxe Room (ranging from 27 to 35 sqm) is at the forefront of contemporary design with warm touches, such as high-quality bed linens, plush furnishings, and modern amenities. Gracious service and a host of modern features ensure your vacation or business trip is memorable. Available in King-sized bed category.",
    amenities: ["4 Rooms", "King bed", "27 - 35 sqm", "32\" LCD TV", "Office Desk & Chair", "Wireless High-Speed Internet", "In-room Safe", "Complimentary Breakfast"],
  },
  {
    image: "/central/superior Room/390632.webp",
    images: [
      "/central/superior Room/390632.webp",
      "/central/superior Room/390634.webp"
    ],
    name: "Superior Room",
    count: "8 Rooms Available",
    subtitle: "Soothing setting & neutral elegance",
    body: "A soothing setting for respite and relaxation, the 23 to 35 sqm Superior Room is elegantly appointed in neutral undertones and provides a warm and welcoming residence. Plush furnishings and modern amenities make it feel like home. Superior rooms feature a bathroom with a glass screen to ensure the stunning view can be captured at every moment.",
    amenities: ["8 Rooms", "King bed", "23 - 35 sqm", "Glass Screen Bathroom", "32\" LCD TV", "Wireless High-Speed Internet", "In-room Safe", "Complimentary Breakfast"],
  },
  {
    image: "/central/superior twin/superior-twin.webp",
    images: [
      "/central/superior twin/superior-twin.webp",
      "/central/superior twin/suprior-twin.webp"
    ],
    name: "Superior Twin",
    count: "2 Rooms Available",
    subtitle: "Twin-bed configuration & modern luxury",
    body: "Ideal for traveling companions or colleagues, the Superior Twin Room features two plush single beds with neutral undertones, glass screen marble bathrooms, and ultra-modern amenities for a serene, comfortable stay.",
    amenities: ["2 Rooms", "Twin beds", "23 - 35 sqm", "Glass Screen Bathroom", "32\" LCD TV", "Wireless High-Speed Internet", "In-room Safe", "Complimentary Breakfast"],
  }
];

export interface GalleryItem {
  src: string;
  category: "Rooms" | "Lobby" | "Dining" | "Exterior";
  alt: string;
}

export const galleryImages: GalleryItem[] = [
  { src: "/central/390505.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390505)" },
  { src: "/central/390507.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390507)" },
  { src: "/central/390508.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390508)" },
  { src: "/central/390515.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390515)" },
  { src: "/central/390520.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390520)" },
  { src: "/central/390521.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390521)" },
  { src: "/central/390522.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390522)" },
  { src: "/central/390530.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390530)" },
  { src: "/central/390534.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390534)" },
  { src: "/central/390535.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390535)" },
  { src: "/central/390538.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390538)" },
  { src: "/central/390543.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390543)" },
  { src: "/central/390544.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390544)" },
  { src: "/central/390572.jpg-1.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390572.jpg-1)" },
  { src: "/central/parking.webp", category: "Exterior", alt: "Central Boutique Hotel - Exterior View (parking)" },
  { src: "/central/Delux/390601.webp", category: "Rooms", alt: "Central Boutique Hotel - Rooms View (390601)" },
  { src: "/central/Delux/390602.webp", category: "Rooms", alt: "Central Boutique Hotel - Rooms View (390602)" },
  { src: "/central/Delux/390604.webp", category: "Rooms", alt: "Central Boutique Hotel - Rooms View (390604)" },
  { src: "/central/Delux/390605.webp", category: "Rooms", alt: "Central Boutique Hotel - Rooms View (390605)" },
  { src: "/central/Delux/390642.webp", category: "Rooms", alt: "Central Boutique Hotel - Rooms View (390642)" },
  { src: "/central/superior Room/390632.webp", category: "Rooms", alt: "Central Boutique Hotel - Rooms View (390632)" },
  { src: "/central/superior Room/390634.webp", category: "Rooms", alt: "Central Boutique Hotel - Rooms View (390634)" },
  { src: "/central/Party Hall  Or Gulmohar Hotel/390518.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390518)" },
  { src: "/central/Party Hall  Or Gulmohar Hotel/390519.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390519)" },
  { src: "/central/Party Hall  Or Gulmohar Hotel/390533.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390533)" },
  { src: "/central/Party Hall  Or Gulmohar Hotel/390546.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390546)" },
  { src: "/central/Party Hall  Or Gulmohar Hotel/390551.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390551)" },
  { src: "/central/Party Hall  Or Gulmohar Hotel/390556.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390556)" },
  { src: "/central/Other/390587.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390587)" },
  { src: "/central/Other/390588.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390588)" },
  { src: "/central/Other/390589.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390589)" },
  { src: "/central/Other/390590.webp", category: "Lobby", alt: "Central Boutique Hotel - Lobby View (390590)" },
  { src: "/central/Party & Meating/390520.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390520)" },
  { src: "/central/Party & Meating/390521.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390521)" },
  { src: "/central/Party & Meating/390522.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390522)" },
  { src: "/central/Party & Meating/390530.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390530)" },
  { src: "/central/Party & Meating/390534.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390534)" },
  { src: "/central/Party & Meating/390535.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390535)" },
  { src: "/central/Party & Meating/390538.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390538)" },
  { src: "/central/Party & Meating/390543.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390543)" },
  { src: "/central/Party & Meating/390544.webp", category: "Dining", alt: "Central Boutique Hotel - Dining View (390544)" },
  { src: "/central/superior twin/superior-twin.webp", category: "Rooms", alt: "Central Boutique Hotel - Rooms View (superior-twin)" },
  { src: "/central/superior twin/suprior-twin.webp", category: "Rooms", alt: "Central Boutique Hotel - Rooms View (suprior-twin)" },
  { src: "/central/exterior/390479.webp", category: "Exterior", alt: "Central Boutique Hotel - Exterior View (390479)" },
  { src: "/central/exterior/390480.webp", category: "Exterior", alt: "Central Boutique Hotel - Exterior View (390480)" },
  { src: "/central/exterior/390483.webp", category: "Exterior", alt: "Central Boutique Hotel - Exterior View (390483)" },
  { src: "/central/exterior/390484.webp", category: "Exterior", alt: "Central Boutique Hotel - Exterior View (390484)" },
  { src: "/central/exterior/390485.webp", category: "Exterior", alt: "Central Boutique Hotel - Exterior View (390485)" },
];

export const testimonials = [
  {
    name: "Priyansh singh",
    origin: "Verified Guest",
    quote: "My first preference for the stays goes to The Central Boutique Hotel, Moradabad. It is undeniably the beautiful stay each time at Moradabad.",
  },
  {
    name: "Dilshad Ahmed",
    origin: "Verified Guest",
    quote: "A great hotel to stay in. Could not find any fault with this hotel, staff very helpful and attentive. Hotel is very clean and great facilities.",
  },
  {
    name: "Nisha Patel",
    origin: "Verified Guest",
    quote: "Excellent location. Staff were helpful and couldn't do enough for you. Great hotel would definitely recommend and stay again.",
  },
];

export const hotelInfo = {
  name: "Central Boutique Hotel",
  address: "Level 2, Cross Road Mall, Civil Lines, Moradabad - 244001 (U.P.) India",
  landline: "0591 231 3333, 6666",
  phone: "+91 9971097110, +91 7895591010",
  mobileNumbers: ["+919971097110", "+917895591010"],
  email: "reservations@hotelcentral.co.in",
  whatsapp: "+917895591010",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  tripadvisor: "https://tripadvisor.com",
  booking: "https://booking.com",
  yatra: "https://www.yatra.com",
  cleartrip: "https://www.cleartrip.com",
  goibibo: "https://www.goibibo.com",
  agoda: "https://www.agoda.com",
  makemytrip: "https://www.makemytrip.com",
};
