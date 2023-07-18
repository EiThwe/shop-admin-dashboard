// for (let i = 0; i < data.length; i++) {
//   const id = data[i].querySelectorAll("td")[0].textContent;
//   const image = data[i].querySelectorAll("td")[1].querySelector("img").src;
//   const productName = data[i].querySelectorAll("td")[2].textContent;
//   const name = data[i].querySelector("strong").textContent;
//   const email = data[i]
//     .querySelectorAll("td")[3]
//     .textContent.trim()
//     .split("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")[1];
//   const product = data[i].querySelectorAll("td")[4].textContent;
//   const price = data[i].querySelectorAll("td")[5].textContent;
//   const payment = data[i].querySelectorAll("td")[7].textContent;
//   const status = data[i].querySelector(".badge").textContent.toUpperCase();
//   const date = data[i].querySelectorAll("td")[8].textContent;

//   items.push({
//     id,
//     image,
//     productName,
//     name,
//     email,
//     product,
//     price,
//     payment,
//     status,
//     date,
//   });
// }

export const theadNewOrderData = [
  { name: "ID", width: "w-[5%]" },
  { name: "Item", width: "w-[7%]" },
  { name: "Name", width: "w-[12%]" },
  { name: "Customer", width: "w-[18%]" },
  { name: "Items", width: "w-[7%]" },
  { name: "Price", width: "w-[7%]" },
  { name: "Payment", width: "w-[10%]" },
  { name: "Status", width: "w-[12%]" },
  { name: "Date", width: "w-[12%]" },
  { name: "Action", width: "w-[10%]" },
];

export const tbodyNewOrderRowdata = [
  {
    id: "354",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p8.jpg",
    productName: "Smart Watch",
    name: "Tokyo Naikra",
    email: "naikra@example.com",
    product: "10",
    price: "$280",
    payment: "COD",
    status: "REDY TO SHIP",
    date: "2021-10-30",
  },
  {
    id: "654",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p9.jpg",
    productName: "Tee-Shirt For Men",
    name: "Hardik Patel",
    email: "patel000777@example.com",
    product: "2",
    price: "$50",
    payment: "PAID",
    status: "ON THE WAY",
    date: "2021-10-30",
  },
  {
    id: "785",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p10.jpg",
    productName: "Men casual shoes",
    name: "Pintos Martino",
    email: "martino0777@example.com",
    product: "10",
    price: "$280",
    payment: "COD",
    status: "DELIVERED",
    date: "2021-10-30",
  },
  {
    id: "1045",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p6.jpg",
    productName: "Baby toy doctor kit",
    name: "Merry Donesk",
    email: "Merry07@example.com",
    product: "10",
    price: "$280",
    payment: "COD",
    status: "REDY TO SHIP",
    date: "2021-10-30",
  },
  {
    id: "1046",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p5.jpg",
    productName: "Womens Purse",
    name: "Morgus Markue",
    email: "morgus@example.com",
    product: "3",
    price: "$80",
    payment: "PAID",
    status: "PENDING",
    date: "2021-10-30",
  },
  {
    id: "1047",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p4.jpg",
    productName: "Cowboy Hat",
    name: "Bhavesh Markue",
    email: "Bhavesh@example.com",
    product: "8",
    price: "$140",
    payment: "PAID",
    status: "DELIVERED",
    date: "2021-10-30",
  },
  {
    id: "1048",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p3.jpg",
    productName: "Tee-Shirt For Girl",
    name: "Mehul Markue",
    email: "mehul@example.com",
    product: "5",
    price: "$100",
    payment: "COD",
    status: "ON THE WAY",
    date: "2021-10-30",
  },
  {
    id: "1049",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p2.jpg",
    productName: "Tee-Shirt For Men",
    name: "Kethan Komary",
    email: "ktn@example.com",
    product: "10",
    price: "$280",
    payment: "COD",
    status: "REDY TO SHIP",
    date: "2021-10-30",
  },
  {
    id: "1050",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p1.jpg",
    productName: "Baby Pink Shoes",
    name: "John Deo",
    email: "johny@example.com",
    product: "3",
    price: "$80",
    payment: "PAID",
    status: "PENDING",
    date: "2021-10-30",
  },
  {
    id: "1095",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p7.jpg",
    productName: "Mens Shirt",
    name: "Sin Cinaty",
    email: "cinaty@example.com",
    product: "10",
    price: "$280",
    payment: "COD",
    status: "REDY TO SHIP",
    date: "2021-10-30",
  },
];
export const newOrderDropdown=[
  {action:"Detail"},
  {action:"Track"},
  {action:"Cancel"}
]
