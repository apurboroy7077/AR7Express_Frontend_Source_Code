let productsData = [
  {
    name: "Acer Monitor",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/asus_monitor.jpg",
    theId: "todomodoid1",
  },
  {
    name: "Office Chair",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 321.95,
    discountPercentage: 49,
    imageSrc: "/images/products/office_furniture.jpg",
    theId: "todomodoid2",
  },
  {
    name: "Dining Table",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 742.95,
    discountPercentage: 49,
    imageSrc: "/images/products/dining.jpg",
    theId: "todomodoid3",
  },
  {
    name: "Shirt Pant",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 122.95,
    discountPercentage: 49,
    imageSrc: "/images/products/red_shirt.jpg",
    theId: "todomodoid4",
  },
  {
    name: "Teddy Bear",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 122.33,
    discountPercentage: 49,
    imageSrc: "/images/products/teddy_bear.jpg",
    theId: "todomodoid5",
  },
  {
    name: "Shoe for Women",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 994.3,
    discountPercentage: 49,
    imageSrc: "/images/products/women_shoe.jpg",
    theId: "todomodoid6",
  },
  {
    name: "Cloth",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 9.67,
    discountPercentage: 49,
    imageSrc: "/images/products/cloth.jpg",
    theId: "todomodoid7",
  },
  {
    name: "Furniture",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 98.5,
    discountPercentage: 49,
    imageSrc: "/images/products/office_furniture.jpg",
    theId: "todomodoid8",
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
