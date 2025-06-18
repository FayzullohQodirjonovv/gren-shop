import type { CategoryType, Datatype } from "../../../../@types";
import useLoader from "../../../../generic/loader";
import { useQueryHandler } from "../../../../hooks/usequery";
import Price from "../categores/price";
import Discaount from "../categores/discaount/index";
import { useSearchParamsHandler } from "../../../../hooks/usesearchparams";

const Categories = () => {
  const { data, isLoading, isError }: Datatype<CategoryType> = useQueryHandler({
    pathname: "categories",
    url: "flower/category",
  });

  const { setParam, getParam } = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";
     const sort = getParam("sort") || "default-sorting"
     const type = getParam( "type") || "all-plants"

  const { categories_loader } = useLoader(); 
  return (
    <div>
      <div className="bg-[rgb(251,251,251)] p-[20px]">
        <h2 className="text-[#3D3D3D] font-bold text-[18px] mb-2">Categories</h2>
      {isLoading || isError ? (
          categories_loader() 
        ) : (
          data?.map((value) => (
            <div
         onClick={() => setParam({ category: value.route_path  ,sort ,type })} 
              key={value._id}
className={`flex justify-between cursor-pointer mb-[15px] text-[#3D3D3D] text-base transition-colors font-medium hover:text-[green] ${category === value.route_path ? "text-[green]" : ""}`}

            >
              <div>{value.title}</div>
              <div>{Math.abs(value.count)}</div>
            </div>
          ))
        )}
        <Price />
      </div>
      <Discaount />
    </div>
  );
};

export default Categories;
