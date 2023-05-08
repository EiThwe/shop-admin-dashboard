import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { IoIosArrowForward } from "react-icons/io";
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import uploadPreview from "../assets/upload-preview.jpg";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useCreateProductsMutation } from "../feature/api/productApi";
import Swal from "sweetalert2";

const AddProduct = () => {
  const textInput = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [createProducts] = useCreateProductsMutation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   getMeta("https://i.postimg.cc/kGGtSHb7/kindpng-43694.png").then((img) => {
  //     console.dir(img.naturalHeight + " " + img.naturalWidth);
  //   });
  // }, []);

  // const getMeta = async (url) => {
  //   const img = new Image();
  //   img.src = url;
  //   await img.decode();
  //   return img;
  // };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const item = { title, price, images: [imageUrl], description };
    console.log(item);
    const { data, error } = await createProducts(item);
    console.log(data);
    console.log(error);
    if (data) {
      Swal.fire({
        title: "Success!",
        text: "Do you want to view all products?",
        icon: "success",
        confirmButtonText: "View All",
        confirmButtonColor: "rgb(59 130 246)",
      }).then((result) => {
        if (result.isConfirmed) navigate("/products");
      });
    } else {
      Swal.fire({
        title: "Fail!",
        text: "Do you want to try again?",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "rgb(59 130 246)",
      }).then((result) => {
        if (result.isConfirmed) {
          setTitle("");
          setDescription("");
          setImageUrl("");
          setPrice("");
        }
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      <Layout>
        <div className="w-full p-8 bg-gray-100 min-h-full">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-2xl font-bold">Add Product</h1>
              <div className="flex justify-center items-center gap-2 mb-[20px] font-bold">
                <a href="#" className="text-blue-500">
                  Home
                </a>
                <IoIosArrowForward className="text-[12px]" />
                <a href="#" className="text-gray-400">
                  Product
                </a>
              </div>
            </div>
            <div>
              <Link to={"/products"}>
                <button className="px-5 py-3 bg-blue-500 rounded-2xl text-white font-bold text-sm">
                  View All
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full p-5 rounded-t-2xl shadow-xl bg-white border-b-[1px] border-gray-200">
            <h1 className="font-bold">Add Product</h1>
          </div>
          <div className="w-full p-5 rounded-b-2xl shadow-xl bg-white">
            <div className="flex gap-5 justify-center items-start">
              <div
                className="min-w-[320px] min-h-[320px] py-[20px] flex justify-center items-center rounded-2xl border
             border-gray-200 sticky top-[30px] overflow-hidden"
              >
                <img
                  src={imageUrl ? imageUrl : uploadPreview}
                  alt="Image"
                  className="w-[275px] rounded-2xl object-cover  "
                />
                <button
                  onClick={() => textInput.current.focus()}
                  className="absolute top-[30px] right-[30px] bg-white shadow-xl text-2xl rounded-xl w-[40px] h-[40px] flex justify-center items-center"
                >
                  <MdOutlineModeEditOutline color="gray" />
                </button>
              </div>

              <div className="w-full flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="product-title"
                      className="font-bold text-gray-400"
                    >
                      Product Title
                    </label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      className="w-full h-[50px] rounded-xl border border-gray-200 px-3"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="price" className="font-bold text-gray-400">
                      Price
                    </label>
                    <input
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type="text"
                      className="w-full h-[50px] rounded-xl border border-gray-200 px-3"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="image" className="font-bold text-gray-400">
                    Image Url
                  </label>
                  <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    type="text"
                    className="w-full h-[50px] rounded-xl border border-gray-200 px-3"
                    ref={textInput}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="description"
                    className="font-bold text-gray-400"
                  >
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    className="w-full rounded-xl border border-gray-200 p-3"
                    rows={14}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onClick={onSubmitHandler}
                  className={`text-sm w-[70px] px-3 py-3 rounded-xl text-white ${
                    isLoading ? "bg-blue-200 flex justify-center items-center gap-2 w-[100px]" : "bg-blue-500"
                  }`}
                >
                  submit 
                  {isLoading && <AiOutlineLoading3Quarters className=" animate-spin text-xs"/> }
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AddProduct;
