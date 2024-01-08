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
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
    images: [
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_E_1_8bfd9758-502c-413e-ae04-823019fe8634_935x1056_crop_center.jpg?v=1689587318",
      "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_D_1_a3b72a92-3747-437c-bdc2-6426022687bf_935x1056_crop_center.jpg?v=1689587318",
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
"https://balenciaga.dam.kering.com/m/2b5d4d500f173926/Large-7659662AAYY8018_F.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/37280ebcfd1d91f8/Large-7659662AAYY8018_J.jpg?v=2",
      "https://balenciaga.dam.kering.com/m/188929c2381be1f/Large-7659662AAYY8018_I.jpg?v=1",
      "https://balenciaga.dam.kering.com/m/2387a3cd183c57f9/Large-7659662AAYY8018_D.jpg?v=2"
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
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSIqemdc0JEeUqFMVBxuCNE0DKbq3et2gsy0LgU8kD4roZ69DsPrFcPl1s1K6IQHclyDADWC9Vf30fXuqXXrBxIJeJWu1SFgWCH6AREICw7K1sX0f8iV0r4vg",
    images: [
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSIqemdc0JEeUqFMVBxuCNE0DKbq3et2gsy0LgU8kD4roZ69DsPrFcPl1s1K6IQHclyDADWC9Vf30fXuqXXrBxIJeJWu1SFgWCH6AREICw7K1sX0f8iV0r4vg",
      "https://i.etsystatic.com/13821260/r/il/e93bd2/2040102657/il_1588xN.2040102657_c72d.jpg",

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
      "https://silverpear.co.uk/wp-content/uploads/images/25140-1.jpg",
    images: [
      "https://silverpear.co.uk/wp-content/uploads/images/25141-1.jpg",
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
    name: "Gucci Leather GG Marmont Gloves - Black",
    description: `The smartest winter accessory. . . These 100 percent cashmere-lined gloves feature tech-friendly fingertips, so you can use your smartphone without getting frostbite.`,
    price: 9800,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSq4oeAdfUJxMaLdkGtFJuo52ZrZWNjGwDF83Fn1MdOcaDw6R-xM_9SYIkmp10siIC2OF_EjmCXcTEO89UyDIyN-AkZ83EQd2lFsaDZ6zRQSg8BGP5e3vAwjg",
    images: [
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNDAFRNoBAivh0I6LvpfF2kuPZQVUmeu_awBU9YqWi9j2INwZjqVJXz3T1xZr_T_Yp1S_TdOgC_LHwBSvIVhbJ8ZWBjFgRWL5KOAzd1WboR2n7rqZgQloB",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["gloves"],
    colors: ["brown"],
    currency: "USD",
  },
  {
    id: "743b3855-6487-4d52-80fc-bcb8ca4fa74b",
    sku: "leather_gloves_1",
    name: "Natural Leather Gloves",
    description: `The smartest winter accessory. . . These 100 percent cashmere-lined gloves feature tech-friendly fingertips, so you can use your smartphone without getting frostbite.`,
    price: 9800,
    image:
      "https://cdna.lystit.com/520/650/n/photos/cettire/1ad5d440/fear-of-god-Beige-Stitch-Detailed-Gloves.jpeg",
    images: [
      "https://cdna.lystit.com/520/650/n/photos/cettire/8cd2ebba/fear-of-god-Beige-Stitch-Detailed-Gloves.jpeg",
    ],
    sizes: ["s", "m", "l", "xl"],
    categories: ["gloves"],
    colors: ["brown"],
    currency: "USD",
  },
  // {
  //   id: "83ea928a-d834-4c6d-a588-4c93ec2de3c0",
  //   sku: "down_mittens_1",
  //   name: "Down Mittens",
  //   description: `Founded in Japan and now based in the U.S., Snow Peak has been making premium outdoor gear inspired by the mountainous region of Niigata, Japan, since 1958. Crafted in durable materials, these mittens are insulated with duckdown to keep your hands warm no matter through which polar vortex your day takes you.`,
  //   price: 13999,
  //   image:
  //     "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
  //   images: [
  //     "https://www.abbottlyon.com/cdn/shop/products/CanvasToteBag_BlackStraps_AA_2_503e9eae-012d-4d51-8978-9236dc4fd30e_935x1056_crop_center.jpg?v=1688719507",
  //   ],
  //   sizes: ["s", "m", "l", "xl"],
  //   categories: ["gloves"],
  //   colors: ["black"],
  //   currency: "USD",
  // },
  {
    id: "c5ef468d-d49e-4aa5-be5b-41f34af40b19",
    sku: "brooks_sunglasses_1",
    name: "Brooks Sunglasses",
    description: `These are timeless sunglasses that are designed in California and handmade in Japan by master craftsmen. The Brooks frames are made with a keyhole bridge, one of the many details the brand includes in their construction.`,
    price: 42000,
    image:
      "https://cdn-images.farfetch-contents.com/12/09/86/04/12098604_9897563_1000.jpg",
    images: [
      "https://cdn-images.farfetch-contents.com/12/09/86/04/12098604_9897564_1000.jpg",
      "https://cdn-images.farfetch-contents.com/12/09/86/04/12098604_9897565_1000.jpg",
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
      "https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c85262s.jpg?im=Resize,width=364",
    images: [
      "https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c85262s.jpg?im=Resize,width=364",
      "https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/c85262s2.jpg?im=Resize,width=364",
    ],
    sizes: ["one-size"],
    categories: ["sunglasses"],
    colors: ["black"],
    currency: "USD",
  },
]
