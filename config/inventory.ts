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
      "https://img01.ztat.net/article/spp-media-p1/82ee01c208fc4494b1fdfff4f4588867/76832eb22c3f4ec0a16e790294421795.jpg?imwidth=1800&filter=packshot",
    images: [
      "https://img01.ztat.net/article/spp-media-p1/180b07b4528b4beca325ac814ec9eb66/369abee17a38432d8e4132768e33938d.jpg?imwidth=1800",
      "https://img01.ztat.net/article/spp-media-p1/2a5f44f8025540bbb025b51180ecd6ab/6dc5f773cb9c493cbdbcc68f6756c092.jpg?imwidth=1800",
     // "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
    ],
    sizes: ["one-size"],
    categories: ["bags"],
    colors: ["brown"],
    currency: "USD",
  },
  {
    id: "8d1a33a5-5650-4bd7-bb70-ba4670090700",
    sku: "WOMEN'S MONACO SMALL CHAIN BAG METALLIZED IN GOLD",
    name: "WOMEN'S MONACO SMALL CHAIN BAG METALLIZED IN GOLD",
    description: `Meet your new favorite carry-on. Our supersized tote is crafted in durable waxed cotton canvas that's rugged and durable, ideal for hauling all of your stuff. This size takes you to and from the farmer's market, the gym or a weekend getaway.`,
    price: 1950,
    image:
      "https://balenciaga.dam.kering.com/m/2b5d4d500f173926/Large-7659662AAYY8018_F.jpg?v=2",
    images: [

      "https://balenciaga.dam.kering.com/m/37280ebcfd1d91f8/Large-7659662AAYY8018_J.jpg?v=2",
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
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
    images: [
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",

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
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
    images: [
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["belts"],
    colors: ["black"],
    currency: "USD",
  },
  {
    // id: "b5980fb9-142b-4e0b-9683-daac07827e0a",
    // sku: "wool_scarf_1",
    // name: "Wool Scarf",
    // description: `Crafted in the finest English wool from the Abraham Moon mill (established in 1837), this scarf is an elegant and cozy addition to your winter wardrobe.`,
    // price: 6199,
    // image:
    //   "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSh4wlz-PBmavlWyirlU_W7w_MGk3qV7XbtRIAwoPFA_NFh6S3aX08rqETLckeC8fzxdfbeGjfx6yeZOSL5xj6vkcYLp8QM-QlgEKs9A92hoBEDQlMObflX&usqp=CAE",
    // images: [

    //   "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0aDAbMITyyLfvwPn4d90rlpBGQ0cBU8aaiUxV8cbcJBgv_rUAJBaafmIt3GAeluYZHxFrTmUHfpNqBZPOJbx4gMYC7ioa&usqp=CAE",
    // ],
    // sizes: ["one-size"],
    // categories: ["scarves"],
    // colors: ["green"],
    // currency: "USD",
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "leather_gloves_1",
    name: "Leather Gloves",
    description: `The smartest winter accessory. . . These 100 percent cashmere-lined gloves feature tech-friendly fingertips, so you can use your smartphone without getting frostbite.`,
    price: 9800,
    image:
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
    images: [
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["gloves"],
    colors: ["brown"],
    currency: "USD",
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "leather_gloves_1",
    name: "Leather Gloves",
    description: `The smartest winter accessory. . . These 100 percent cashmere-lined gloves feature tech-friendly fingertips, so you can use your smartphone without getting frostbite.`,
    price: 9800,
    image:
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
    images: [
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
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
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
    images: [
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
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
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
    images: [
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
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
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
    images: [
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["black"],
    currency: "USD",
  },
]
