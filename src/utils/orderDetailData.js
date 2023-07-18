// for (let i = 0; i < data.length; i++) {
//   if (i > 2) return;
//   const id = data[i].querySelectorAll("td")[0].textContent;
//   const image = data[i].querySelector("img").src;
//   const name = data[i].querySelector("strong").textContent;
//   const description = data[i]
//     .querySelectorAll("td")[2]
//     .textContent.replace(name, "");
//   const price = data[i].querySelectorAll("td")[3].textContent;
//   const quantity = data[i].querySelectorAll("td")[4].textContent;
//   const subTotal = data[i].querySelectorAll("td")[5].textContent;

//   items.push({
//     id,
//     image,
//     name,
//     description,
//     price,
//     quantity,
//     subTotal,
//   });
// }

export const theadOrderDetailData = [
  {
    name: "#",
    width: "w-[5%]",
  },
  {
    name: "IMAGE",
    width: "w-[10%]",
  },
  {
    name: "PRODUCT",
    width: "w-[40%]",
  },
  {
    name: "QUANTITY",
    width: "w-[15%]",
  },
  {
    name: "PRICE/UNIT",
    width: "w-[15%]",
  },
  {
    name: "SUBTOTAL",
    width: "w-[15%]",
  },
];

export const tbodyOrderDetailRowData = [
  {
    id: "1",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p1.jpg",
    name: "Baby Pink Shoes",
    description: "a very smooth and comfort shoes ever for baby.",
    quantity: "15",
    price: "$75",
    subTotal: "$1,125.00",
  },
  {
    id: "2",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p2.jpg",
    name: "Tee-Shirt For Men",
    description: "Classie and full slive tee-shirt for boy or man.",
    quantity: "15",
    price: "$75",
    subTotal: "$1,125.00",
  },
  {
    id: "3",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p4.jpg",
    name: "Round Cap",
    description: "Comfertable round cut cap for both.",
    quantity: "2",
    price: "$75",
    subTotal: "$150.00",
  },
];
