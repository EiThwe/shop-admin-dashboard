import React from "react";

const AddNewVendor = () => {
  return (
    <div className="fixed w-screen h-screen bg-opacity-50 bg-black top-0 left-0 z-[100] flex justify-center items-center">
      <div className="w-[400px] h-[450px] bg-white rounded-3xl">
        <div className="w-full p-3 border-b flex items-center">
          <input
            type="text"
            className="w-full h-11 rounded-2xl text-gray-200 border p-5 text-sm "
            placeholder="Search..."
          />
        </div>
        <div className="w-full h-[300px] overflow-y-scroll customScrollbar">
          <div className="w-full h-[700px] bg-yellow-300">
            <div className="w-full bg-white flex justify-between items-center p-3">
              <div className="flex gap-3">
                <div className="w-[40px] h-[40px] rounded-xl overflow-hidden">
                  <img
                    src="https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u1.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-start gap-3">
                  <h1 className="font-bold text-sm">Aeron</h1>
                  <div className="truncate text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia assumenda quod sed rem! Laborum dicta impedit unde
                    fugit voluptates, natus facilis magnam molestias iusto,
                    molestiae dolor incidunt modi exercitationem vero.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewVendor;
