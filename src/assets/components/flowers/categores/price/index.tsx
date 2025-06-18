import { Slider } from "antd";
import { useState } from "react";
import { useSearchParamsHandler } from "../../../../../hooks/usesearchparams";

const Price = () => {
  const { getParam, setParam } = useSearchParamsHandler();

  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const [price, setPrice] = useState<[number, number]>([
    Number(range_min),
    Number(range_max),
  ]);

  const setPriceFilter = () => {
    setParam({
      range_min: price[0],
      range_max: price[1],
    });
  };

  return (
    <div className="mt-5">
      <Slider
        onChange={(e) => setPrice(e as [number, number])}
        range
        step={1}
        max={1000}
        min={0}
        defaultValue={price}
      />
      <h2>
        Price: 
        <span className="text-[#46A358] text-[17px] font-bold ml-[5px]">
          {price[0]}$ - {price[1]}$
        </span>
      </h2>
      <button onClick={setPriceFilter} className="btn my-5 w-[80px] h-[30px] bg-[green] rounded-md text-[white]">
        Filter
      </button>
    </div>
  );
};
export default Price;
