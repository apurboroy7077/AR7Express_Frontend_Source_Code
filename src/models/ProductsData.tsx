import ar7id from "ar7id";

let productsData = [
  {
    name: "Acer Monitor",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/asus_monitor.jpg",
    theId: ar7id(),
  },
  {
    name: "Office Chair",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/digital_watch.jpg",
    theId: ar7id(),
  },
  {
    name: "Dining Table",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/dining.jpg",
    theId: ar7id(),
  },
  {
    name: "Shirt Pant",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/red_shirt.jpg",
    theId: ar7id(),
  },
  {
    name: "Teddy Bear",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/teddy_bear.jpg",
    theId: ar7id(),
  },
  {
    name: "Shoe for Women",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/women_shoe.jpg",
    theId: ar7id(),
  },
  {
    name: "Cloth",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/cloth.jpg",
    theId: ar7id(),
  },
  {
    name: "Furniture",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/office_furniture.jpg",
    theId: ar7id(),
  },
];

type singleProductDataType = {
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  imageSrc: string;
  theId: string;
};
type productsDataType = singleProductDataType[];
export { productsData };
export type { productsDataType, singleProductDataType };
