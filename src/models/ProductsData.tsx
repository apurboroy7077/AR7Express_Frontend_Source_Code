import ar7id from "ar7id";

let productsData = [
  {
    name: "Acer Monitor",
    description: "Acer 21.5 inch Full HD (1920*1080)l...",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/led_tv.jpg",
    theId: ar7id(),
  },
  {
    name: "Office Chair",
    description: "Upgrade your workspace with the Comfort Plus Ergonomic",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/digital_watch.jpg",
    theId: ar7id(),
  },
  {
    name: "Office Chair",
    description: "Upgrade your workspace with the Comfort Plus Ergonomic",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/dining.jpg",
    theId: ar7id(),
  },
  {
    name: "Shirt Pant",
    description: "Upgrade your workspace with the Comfort Plus Ergonomic",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/red_shirt.jpg",
    theId: ar7id(),
  },
  {
    name: "Office Chair",
    description: "Upgrade your workspace with the Comfort Plus Ergonomic",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/teddy_bear.jpg",
    theId: ar7id(),
  },
  {
    name: "Office Chair",
    description: "Upgrade your workspace with the Comfort Plus Ergonomic",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/women_shoe.jpg",
    theId: ar7id(),
  },
  {
    name: "Office Chair",
    description: "Upgrade your workspace with the Comfort Plus Ergonomic",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/cloth.jpg",
    theId: ar7id(),
  },
  {
    name: "Office Chair",
    description: "Upgrade your workspace with the Comfort Plus Ergonomic",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/office_furniture.jpg",
    theId: ar7id(),
  },
];
type productsDataType = {
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  imageSrc: string;
  theId: string;
}[];
export { productsData };
export type { productsDataType };
