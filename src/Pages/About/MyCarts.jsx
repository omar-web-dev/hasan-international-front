import { Link } from "react-router-dom";
import prodcut1 from "../../assets/application/app-1.jpeg";
import prodcut2 from "../../assets/application/app-2.jpeg";
import prodcut3 from "../../assets/application/app-3.jpeg";
import prodcut4 from "../../assets/application/app-4.jpeg";
import prodcut5 from "../../assets/application/app-5.jpeg";
import prodcut6 from "../../assets/application/app-6.jpeg";
import prodcut7 from "../../assets/application/app-7.jpeg";


const MyCarts = () => {

  const myProducts = [
    { _id: 1, img: prodcut1, title: "This is a products-1", price: { regular: 90, sell: 79 } },
    { _id: 2, img: prodcut2, title: "This is a products-2", price: { regular: 35, sell: 29 } },
    { _id: 3, img: prodcut3, title: "This is a products-3", price: { regular: 90, sell: 67 } },
    { _id: 4, img: prodcut4, title: "This is a products-4", price: { regular: 101, sell: 89 } },
    { _id: 5, img: prodcut5, title: "This is a products-5", price: { regular: 78, sell: 68 } },
    { _id: 6, img: prodcut6, title: "This is a products-6", price: { regular: 123, sell: 89 } },
    { _id: 7, img: prodcut7, title: "This is a products-7", price: { regular: 123, sell: 89 } },
  ];

  
const sellPrices = myProducts.map(product => product.price.sell);

const totalAmount = sellPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <div className="pt-4 bg-[#BDC3C7]">
      <div className="mx-auto flex flex-col max-w-[700px] px-3 md:px-5 lg:px-0 dark:bg-gray-900 dark:text-gray-100">
        <ul className="flex flex-col divide-y divide-gray-700">
          {myProducts.map((item) => (
            <li key={item._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={item?.img}
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {item?.title}
                      </h3>
                      <p className="text-sm dark:text-gray-400">Classic</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">{item?.price?.sell}</p>
                      <p className="text-sm line-through dark:text-gray-600">
                        {item?.price?.regular}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                      </svg>
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount:
            <span className="font-semibold">{totalAmount} €</span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4 pb-4 mt-2">
          <Link to='/product'
            className="px-6 py-2 bg-[#576574] text-white rounded-md dark:border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only">{" "}to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCarts;
