import { Skeleton } from "antd";

const useLaoder = () => {
  const categories_loader = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <Skeleton.Input key={idx} className="!w-full !mb-[15px]" active />
    ));
  };

  const poroducts_loader = () => {
    return Array.from({ length: 6 }).map((_, idx) => (
      <div key={idx}>
        <Skeleton.Image active className="!w-full !h-[300px]" />
        <Skeleton.Input active />
      </div>
    ));
  };
  return { categories_loader, poroducts_loader };
};

export default useLaoder;