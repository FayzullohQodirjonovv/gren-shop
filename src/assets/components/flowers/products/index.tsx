import Card from "./card";
import type { Datatype, ProductsType } from "../../../../@types";
import { useQueryHandler } from "../../../../hooks/usequery";
import ProductsHeader from "./productsheader";
import useLoader from "../../../../generic/loader";
import { useSearchParamsHandler } from "../../../../hooks/usesearchparams";

const Products = () => {
    const {getParam} = useSearchParamsHandler()
  const category = getParam("category") || "house-plants";
    const sort = getParam("sort") || "default-sorting"
     const type = getParam( "type") || "all-plants"

      const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const {data, isLoading, isError}:Datatype<ProductsType[]> = useQueryHandler({
pathname: `products-${category}-${sort}-${type}-min-${range_min}-min-${range_min}-max-${range_max}`,
url: `flower/category/${category}`,
params:{
sort,type, range_min,range_max,
}
  });
  const {poroducts_loader}= useLoader()
  
  return (
    <div>
      <ProductsHeader />
<div className="grid grid-cols-3 gap-5 mt-5">
  {isLoading || isError ? (
    poroducts_loader()
  ) : (
    data?.map((value) => (
      <Card key={value._id} {...value} />
    ))
  )}
</div>

    </div>
  );
};

export default Products;