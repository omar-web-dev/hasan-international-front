import NewProductCard from "./NewProductCard";

const NewProduct = () => {
  return (
    <>
    {/* new product content */}
      <div className="mt-20">
        <div className="text-center max-w-[600px] mx-auto">
          <h2 className="my_h2">New Products</h2>
          <p className="text-lg">
            A perfect blend of creativity, energy, communication, happiness and
            love. Let us arrange a smile for you.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 my-10">
    {/* new product card */}
          <NewProductCard />
          <NewProductCard />
          <NewProductCard />
          <NewProductCard />
          <NewProductCard />
          <NewProductCard />
        </div>
      </div>
    </>
  );
};

export default NewProduct;
