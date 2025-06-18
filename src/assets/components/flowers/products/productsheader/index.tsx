import { Select } from "antd";
import { useSearchParamsHandler } from "../../../../../hooks/usesearchparams";
import { title_category } from "../../../../../utils";

const productsheader = () => {
    const {getParam, setParam}= useSearchParamsHandler()
      const category = getParam("category") || "house-plants";
    const sort = getParam("sort") || "default-sorting"
    const type = getParam("type") || "all-plants"
        const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
    const handlechange = (e:string)=>{
setParam({category,sort:e})        
    }
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-5 items-center">
   {title_category.map((value)=>(
<h3 onClick={()=> setParam({category,sort,type:value.key, range_min,range_max,})} className={`cursor-pointer ${type=== value.key && "text-[green]"}`} key={value.key}>
    {value.title}
</h3>
   ))}
      </div>
      <div className="flex items-center gap-2">
        <h3>Sort by:</h3>
        <Select
        onChange={handlechange}
        
          defaultValue={sort}
          style={{ width: 120 }}
     options={[
  { value: "default-sorting", label: "Default Sorting" },
  { value: "the-cheapest", label: "The Cheapest" },
  { value: "most-expensive", label: "Most Expansive" },
]}
        />
      </div>
    </div>
  );
};
export default productsheader