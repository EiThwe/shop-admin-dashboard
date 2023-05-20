import React from "react";
import { TbEditCircle } from "react-icons/tb";
import { GrView } from "react-icons/gr";
import { RxTrash, RxEyeOpen } from "react-icons/rx";
import Swal from "sweetalert2";
import { useDeleteProductMutation } from "../feature/api/productApi";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { id, title, price, images } = item;

  const [deleteProduct] = useDeleteProductMutation();
  const deleteHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await deleteProduct(item.id);
        console.log(data);
        if (data.message) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        }
      }
    });
  };
  return (
    <div className="rounded-md p-3 border-[1px] border-gray-200 hover:shadow-xl group transition-all duration-300 ease-in-out">
      <div className="w-full h-[280px] bg-[#F7F7F7] overflow-hidden relative rounded-md flex justify-center items-center">
        <img
          src={images[0]}
          className="w-full  object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
          alt=""
        />
        <div className="absolute top-3 right-3 w-[35px] h-[105px] bg-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <Link to={`/edit-product/${id}`}>
            <button className="w-full hover:text-blue-500 h-[35px] flex justify-center items-center text-lg border-b-[1px] text-gray-400">
              <TbEditCircle />
            </button>
          </Link>
          <Link to={`/product-detail/${id}`}>
            <button className="w-full hover:text-blue-500 text-gray-400 h-[35px] flex justify-center items-center  border-b-[1px]">
              <RxEyeOpen />
            </button>
          </Link>
          <button
            onClick={deleteHandler}
            className="w-full hover:text-blue-500 text-gray-400 h-[35px] flex justify-center items-center text-lg"
          >
            <RxTrash />
          </button>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-gray-400 font-semibold text-sm">{title}</p>
        <p className="text-gray-600 font-bold text-base">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
