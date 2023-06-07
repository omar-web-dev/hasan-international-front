import "./NewProductCard.css";


const NewProductCard = ({product}) => {
  return (
    <>
      {/* new product card  */}
      <div className="card mx-1 border hover:shadow-xl">
        {/* new product card  figure */}
        <figure>
          <div className="">
            <img
              className="w-[400px]"
              src={product.img}
              alt="car!"
            />
            <div className="image-overlay">
              <div className="icons absolute bottom-5">
                <span className="icon add-card">Add to Card</span>
                <span className="icon add-wishlist">Add to Wishlist</span>
              </div>
            </div>
          </div>
        </figure>
        {/* new product card  body */}
        {/* <div className="card-body"> */}
          {/* <h2 className="card-title">This is good product in this world</h2>
          <div className="flex justify-between">
            <p>Price : $200</p>
            <p className="text-end">Rating : 5.3</p>
          </div> */}
        {/* </div> */}
        <button
          className="mt-1 text-center bg-blue-500 b p-2 text-xl text-white "
        >
          See more
        </button>
      </div>
    </>
  );
};

export default NewProductCard;
