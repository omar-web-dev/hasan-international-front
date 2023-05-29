import HeadImage from "../../Components/HeadImage/HeadImage";

const SingleProduct = () => {
  return (
    <>
      <HeadImage
        text={"Single-product"}
        image={
          "https://hawkmed.com.cn/wp-content/uploads/2021/12/160610965300119296f.jpg"
        }
      />
      <div className="max-w-[1200px] mx-auto flex">
        <div>
          <div className="w-[500px] border h-[400px]">Product img</div>
          <div className="w-[500px] border h-[100px]">product imge slider</div>
        </div>
        <div>
          <div className="w-[500px] border h-[100px]">product Title</div>
          <div className="flex">
            <div className="w-[500px] border h-[100px]">Rating</div>
            <div className="w-[50px] border h-[100px]">Share</div>
            <div className="w-[50px] border h-[100px]">Love</div>
          </div>

          <div className="w-[500px] border h-[30px]">price</div>
          <div className="flex">
            <div className="w-[100px] border h-[30px]">Regular</div>
            <div className="w-[100px] border h-[30px]">Parcentaic</div>
          </div>
          <div className="w-[500px] border h-[30px]">QUT : 1</div>
          <div className="flex">
            <div className="w-[100px] border h-[30px]">Buy Now</div>
            <div className="w-[100px] border h-[30px]">Add to Card</div>
          </div>

        </div>
      </div>
    </>
  );
};

export default SingleProduct;
