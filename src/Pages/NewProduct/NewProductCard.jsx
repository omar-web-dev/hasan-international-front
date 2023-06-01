import { Link } from "react-router-dom";
import "./NewProductCard.css";

const NewProductCard = () => {
  return (
    <>
      {/* new product card  */}
      <div className="card mx-4 border hover:shadow-xl">
        {/* new product card  figure */}
        <figure>
          <div className="image-container">
            <img
              className="w-[100%] h-full"
              src="https://bmabazar.com/wp-content/uploads/2019/07/t-1.jpg"
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
        <div className="card-body">
          <h2 className="card-title">This is good product in this world</h2>
          <div className="flex justify-between">
            <p>Price : $200</p>
            <p className="text-end">Rating : 5.3</p>
          </div>
        </div>
        <Link
          className="text-center bg-blue-500 b p-2 text-xl text-white "
          to="../single-product"
        >
          See more
        </Link>
      </div>
    </>
  );
};

export default NewProductCard;
