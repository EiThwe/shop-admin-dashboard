import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import uploadPreview from "../assets/upload-preview.jpg";
import { MdOutlineModeEditOutline } from "react-icons/md";
import {
  useCreateProductsMutation,
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../feature/api/productApi";
import Swal from "sweetalert2";
import InputImageCard from "../components/InputImageCard";
import InputImageUrl from "../components/InputImageUrl";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const textInput = useRef(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [updateProduct] = useUpdateProductMutation();

  const [imageUrlOne, setImageUrlOne] = useState("");
  const [imageUrlTwo, setImageUrlTwo] = useState("");
  const [imageUrlThree, setImageUrlThree] = useState("");
  const [imageUrlFour, setImageUrlFour] = useState("");
  const [activeInputImage, setActiveInputImage] = useState("One");

  const { data, isLoading } = useGetProductByIdQuery(id);
 

  useEffect(() => {
    if (data) {
      initializeData(data?.data[0]);
    }
  }, [data]);

  const initializeData = (data) => {
    setTitle(data.title);
    setDescription(data.description);
    setPrice(data.price);

    const setValues = [
      setImageUrlOne,
      setImageUrlTwo,
      setImageUrlThree,
      setImageUrlFour,
    ];
    for (let i = 0; i < data.images.length; i++) {
      if (data.images[i]) {
        setValues[i](data.images[i]);
      }
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const item = {id, title, price, images: [imageUrlOne,imageUrlTwo,imageUrlThree,imageUrlFour], description };
    console.log(item);

    const {data} = await updateProduct(item);
    console.log(data);
    
    
    if (data) {
      Swal.fire({
        title: "Success!",
        text: "Do you want to view all products?",
        icon: "success",
        confirmButtonText: "View All",
        confirmButtonColor: "rgb(59 130 246)",
      }).then((result) => {
        if (result.isConfirmed) navigate("/grid-product");
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
          setImageUrlOne("");
          setPrice("");
        }
      });
    }
    setLoading(false);
  };

  return (
    <Layout>
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <>
          <div className="w-full p-8 bg-gray-100 min-h-full">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2 ">
                <h1 className="text-2xl font-bold">Edit Product</h1>
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
                <Link to={"/grid-product"}>
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
                <div className="flex flex-col gap-5 w-[30%] h-auto sticky top-[30px]">
                  <div
                    className="w-full min-h-[320px] py-[20px] flex justify-center items-center rounded-2xl border
               border-gray-200  overflow-hidden"
                  >
                    <img
                      src={imageUrlOne ? imageUrlOne : uploadPreview}
                      alt="Image"
                      className="w-[275px] rounded-2xl object-cover  "
                    />
                    <button
                      onClick={() => {
                        textInput.current.focus();
                        setActiveInputImage("One");
                      }}
                      className="absolute top-[30px] right-[30px] bg-white shadow-xl text-2xl rounded-xl w-[40px] h-[40px] flex justify-center items-center"
                    >
                      <MdOutlineModeEditOutline color="gray" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 h-[100px] ">
                    <InputImageCard
                      imageUrl={imageUrlTwo}
                      setActiveInputImage={setActiveInputImage}
                      id="Two"
                    />
                    <InputImageCard
                      imageUrl={imageUrlThree}
                      setActiveInputImage={setActiveInputImage}
                      id="Three"
                    />
                    <InputImageCard
                      imageUrl={imageUrlFour}
                      setActiveInputImage={setActiveInputImage}
                      id="Four"
                    />
                  </div>
                </div>

                <div className="w-[70%] flex flex-col gap-5">
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
                      <label
                        htmlFor="price"
                        className="font-bold text-gray-400"
                      >
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

                  <>
                    {activeInputImage === "One" && (
                      <InputImageUrl
                        value={imageUrlOne}
                        setValue={setImageUrlOne}
                        id={"One"}
                        textInput={textInput}
                      />
                    )}

                    {activeInputImage === "Two" && (
                      <InputImageUrl
                        value={imageUrlTwo}
                        setValue={setImageUrlTwo}
                        id={"Two"}
                        textInput={textInput}
                      />
                    )}

                    {activeInputImage === "Three" && (
                      <InputImageUrl
                        value={imageUrlThree}
                        setValue={setImageUrlThree}
                        id={"Three"}
                        textInput={textInput}
                      />
                    )}

                    {activeInputImage === "Four" && (
                      <InputImageUrl
                        value={imageUrlFour}
                        setValue={setImageUrlFour}
                        id={"Four"}
                        textInput={textInput}
                      />
                    )}
                  </>

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
                      loading
                        ? "bg-blue-200 flex justify-center items-center gap-2 w-[100px]"
                        : "bg-blue-500"
                    }`}
                  >
                    submit
                    {loading && (
                      <AiOutlineLoading3Quarters className=" animate-spin text-xs" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </Layout>
  );
};

export default EditProduct;
