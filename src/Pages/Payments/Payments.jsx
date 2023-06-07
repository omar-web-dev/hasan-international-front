import amex from "../../assets/payment/amex.png";
import master from "../../assets/payment/master_card.png";
import pay_pal from "../../assets/payment/pay_pal.png";
import visa from "../../assets/payment/Visa.png";
import western from "../../assets/payment/western_union.png";

const Payments = () => {
  const brands = [
    { id: 1, img: amex, title: "brand 1" },
    { id: 2, img: master, title: "brand 2" },
    { id: 3, img: pay_pal, title: "brand 3" },
    { id: 4, img: visa, title: "brand 4" },
    { id: 5, img: western, title: "brand 10" },
  ];

  return (
    <>
      {/* this is a Brand section */}
      <div className="flex gap-2 items-center justify-end">
        {/* Brand card */}
        {brands.map((brand) => (
          <div key={brand.id}>
            <img className="rounded-lg h-[70px] w-24" src={brand.img} alt="car!" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Payments;
