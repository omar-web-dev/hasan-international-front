import "./Category.css";

const CategoryCard = () => {
  return (
    <>

      <div className="rounded card">
        {/* category card  figure*/}

        <figure>
          <div className="rounded-lg image-container ">
            <img
            className="rounded-lg"
            src="https://e7.pngegg.com/pngimages/562/852/png-clipart-hoodie-t-shirt-clothing-bluza-sweater-t-shirt-black-top.png"
            alt="car!"
            />
            {/* category card  button*/}
            <div className="category-image-overlay">
              <div className="absolute bottom-0 w-full">
                <button className="w-full bg-[#01B26F] text-center font-semibold p-2 text-xl">Blog Name</button>
              </div>
            </div>
          </div>
        </figure>
        
      </div>
    </>
  );
};

export default CategoryCard;
