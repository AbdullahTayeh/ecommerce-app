import { Image } from "sanity"

interface InventoryProduct {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}

export const inventory: InventoryProduct[] = [
  {
    id: "64da6006-a4bb-4555-af78-3467853eb75e",
    sku: "canvas_tote_bag_1",
    name: "Canvas Tote Bag",
    description: `Meet your new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
    price: 16800, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_D_1_a3b72a92-3747-437c-bdc2-6426022687bf_935x1056_crop_center.jpg?v=1689587318",
    images: [
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_D_1_a3b72a92-3747-437c-bdc2-6426022687bf_935x1056_crop_center.jpg?v=1689587318",
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_D_1_a3b72a92-3747-437c-bdc2-6426022687bf_935x1056_crop_center.jpg?v=1689587318",
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_D_1_a3b72a92-3747-437c-bdc2-6426022687bf_935x1056_crop_center.jpg?v=1689587318",
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["brown"],
    currency: "USD",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "khaki_tote_bag_1",
    name: "Khaki Tote Bag",
    description: `Meet your new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
    price: 14500,
    image:
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_850x960_crop_center.jpg?v=1688719507",
    images: [
      "https://www.abbottlyon.com/cdn/shop/products/SAFFRON_RESORT_202_-06_ce2efe8a-02b5-4814-bdfc-43e985c7f18c_935x1056_crop_center.jpg?v=1688719505",
      "https://www.abbottlyon.com/cdn/shop/files/Canvastote1_935x1056_crop_center.jpg?v=1689587318",
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_D_1_a3b72a92-3747-437c-bdc2-6426022687bf_935x1056_crop_center.jpg?v=1689587318",
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["blue"],
    currency: "USD",
  },
  {
    id: "e882fe48-253c-40fb-8155-51b47b063c1a",
    sku: "braided_leather_belt_1",
    name: "Braided Leather Belt",
    description: `These handsome leather belts are guaranteed to pull together any outfit. They're made of vegetable-tanned Italian leather, which means they have natural highs and lows of color and will look even better over time.`,
    price: 4999,
    image:
      "https://casupo.co/cdn/shop/products/FIX_classic-belt-twisted-honey_1000x1000.jpg?v=1618443075",
    images: [
      "https://casupo.co/cdn/shop/products/FIX_classic-belt-honey_1000x1000.jpg?v=1689957945",
      "https://casupo.co/cdn/shop/products/Smith1.5_honey_him_787x787.jpg?v=1689957787",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["belts"],
    colors: ["brown"],
    currency: "USD",
  },
  {
    id: "6853a582-fc95-44af-9dac-dffbc694b47d",
    sku: "woolblend_suit_belt_1",
    name: "Wool-Blend Suit Belt",
    description: `This handsome belt will pull together any outfit. The strong materials will take on your wear patterns and look even better over time.`,
    price: 5599,
    image:
      "data:image/jpeg;base64,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",
    images: [
      "data:image/jpeg;base64,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",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["belts"],
    colors: ["black"],
    currency: "USD",
  },
  {
    id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    sku: "wool_scarf_1",
    name: "Wool Scarf",
    description: `Crafted in the finest English wool from the Abraham Moon mill (established in 1837), this scarf is an elegant and cozy addition to your winter wardrobe.`,
    price: 6199,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/wool-scarf-2.jpg",
    ],
    sizes: ["one-size"],
    categories: ["scarves"],
    colors: ["green"],
    currency: "USD",
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "leather_gloves_1",
    name: "Leather Gloves",
    description: `The smartest winter accessory. . . These 100 percent cashmere-lined gloves feature tech-friendly fingertips, so you can use your smartphone without getting frostbite.`,
    price: 9800,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/leather-gloves-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/leather-gloves-1.jpg",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["gloves"],
    colors: ["brown"],
    currency: "USD",
  },
  {
    id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
    sku: "down_mittens_1",
    name: "Down Mittens",
    description: `Founded in Japan and now based in the U.S., Snow Peak has been making premium outdoor gear inspired by the mountainous region of Niigata, Japan, since 1958. Crafted in durable materials, these mittens are insulated with duckdown to keep your hands warm no matter through which polar vortex your day takes you.`,
    price: 13999,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/down-mittens-1.jpg",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["gloves"],
    colors: ["black"],
    currency: "USD",
  },
  {
    id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    sku: "brooks_sunglasses_1",
    name: "Brooks Sunglasses",
    description: `These are timeless sunglasses that are designed in California and handmade in Japan by master craftsmen. The Brooks frames are made with a keyhole bridge, one of the many details the brand includes in their construction.`,
    price: 42000,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-1.jpg",
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/brooks-sunglasses-2.jpg",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["yellow"],
    currency: "USD",
  },
  {
    id: "dd27c79d-97c3-47bb-9172-4ea74b096f6f",
    sku: "dock_sunglasses_1",
    name: "Dock Sunglasses",
    description: `Our latest collection of handcrafted sunglasses features details like UV-protective lenses in shades specifically chosen to complement each frame, and all at a price that won't break the bank. We made these sunglasses with vintage-inspired acetate frames and a keyhole bridge.`,
    price: 5599,
    image:
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg",
    images: [
      "https://fullstackdotso.nyc3.cdn.digitaloceanspaces.com/dock-sunglasses-1.jpg",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["black"],
    currency: "USD",
  },
]
