import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { colorScale, countries } from "../utils/countries";
import "../WorldMap.css";

const WorldMap = () => {
  const tipShowHandler = (event, label, code) => (
    <>
      {countries[code]
        ? label.html(`
        <div class=" bg-white border-none outline-none border-white outline-white px-2 py-[2px] m-0">
          <p style="color: black !important;" class=" font-bold">
            ${label.html()}
          </p>
          <p class="-mt-[2px]" style="color: black !important;">
            Purchased: <span class=" font-bold">${countries[code]}</span>
          </p>
        </div>
        `)
        : label.html("<span></span>")}
    </>
  );

  return (
    <div className=" w-full h-[350px]">
      <VectorMap
        map={worldMill}
        backgroundColor="#fff"
        regionStyle={{
          initial: {
            fill: "#DDDDDD",
            stroke: "blue",
            fillOpacity: 1,
            strokeOpacity: 1,
          },
        }}
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max: 1000,
            },
          ],
        }}
        onRegionTipShow={tipShowHandler}
        
      />
    </div>
  );
};

export default WorldMap;
