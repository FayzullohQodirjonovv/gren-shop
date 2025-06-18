import type { Datatype, DiscountFlowerType } from "../../../../../@types";
import { useQueryHandler } from "../../../../../hooks/usequery";

const Discount = () => {
  const { data }: Datatype<DiscountFlowerType> = useQueryHandler({
    pathname: "discount-flower",
    url: "features/discount",
  });

  return (
    <div className="w-full bg-[#eef7f1] text-center px-[10px] py-[20px] mb-[50px]">
      <h2 className="text-[#46A358] text-[30px] font-normal leading-[40px]">
        {data?.title}
      </h2>
      <h3 className="text-[#3D3D3D] font-bold text-[20px] pt-[17px]">
        UP TO {data?.discoount_up_to}% OFF
      </h3>

      <img src={data?.poster_image_url} alt={data?.title} className="w-full" />
    </div>
  );
};

export default Discount;