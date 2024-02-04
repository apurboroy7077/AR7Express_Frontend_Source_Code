let productsData = [
  {
    name: "Acer Monitor",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 74.95,
    discountPercentage: 49,
    imageSrc: "/images/products/asus_monitor.jpg",
    theId: "todomodoid1",
    category: "computer",
  },
  {
    name: "Office Chair",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 321.95,
    discountPercentage: 49,
    imageSrc: "/images/products/office_furniture.jpg",
    theId: "todomodoid2",
    category: "furniture",
  },
  {
    name: "Dining Table",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 742.95,
    discountPercentage: 49,
    imageSrc: "/images/products/dining.jpg",
    theId: "todomodoid3",
    category: "furniture",
  },
  {
    name: "Shirt Pant",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 122.95,
    discountPercentage: 49,
    imageSrc: "/images/products/red_shirt.jpg",
    theId: "todomodoid4",
    category: "clothing",
  },
  {
    name: "Teddy Bear",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 122.33,
    discountPercentage: 49,
    imageSrc: "/images/products/teddy_bear.jpg",
    theId: "todomodoid5",
    category: "toys",
  },
  {
    name: "Shoe for Women",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 994.3,
    discountPercentage: 49,
    imageSrc: "/images/products/women_shoe.jpg",
    theId: "todomodoid6",
    category: "footwear",
  },
  {
    name: "Cloth",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 9.67,
    discountPercentage: 49,
    imageSrc: "/images/products/cloth.jpg",
    theId: "todomodoid7",
    category: "furniture",
  },
  {
    name: "Office Chair",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 98.5,
    discountPercentage: 49,
    imageSrc: "/images/products/office_furniture.jpg",
    theId: "todomodoid8",
    category: "furniture",
  },
  {
    name: "Liz Cheney: Oath and Honor",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 25.5,
    discountPercentage: 27,
    imageSrc: "/images/products/book_3.jpg",
    theId: "todomodoid9",
    category: "book",
  },
  {
    name: "Remarkably Bright Creatures",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 29.7,
    discountPercentage: 27,
    imageSrc: "/images/products/book_1.jpg",
    theId: "todomodoid10",
    category: "book",
  },
  {
    name: "Iron of Flame",
    description:
      "Et dolores ea tempor invidunt nonumy gubergren sanctus, dolor no sadipscing invidunt dolor dolore, amet sed sit takimata justo ut, lorem dolor sea consetetur ipsum, rebum takimata vero kasd stet est rebum diam, elitr sit tempor sit diam ipsum vero consetetur, ipsum tempor eirmod ipsum justo dolores dolore no. Tempor.",
    price: 35.7,
    discountPercentage: 39,
    imageSrc: "/images/products/book_2.jpg",
    theId: "todomodoid11",
    category: "book",
  },
];

type singleProductDataType = {
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  imageSrc: string;
  theId: string;
  category: string;
};
type productsDataType = singleProductDataType[];
export { productsData };
export type { productsDataType, singleProductDataType };
