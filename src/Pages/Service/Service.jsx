import { useEffect } from "react";
import app1 from "../../assets/services/service-1.jpg";
import app2 from "../../assets/services/service-2.jpg";
import app3 from "../../assets/services/service-3.png";

const Service = () => {
  useEffect(() => {
    return () => {
      document.title = "Hasan International / service";
    };
  }, []);
  const appData = [
    { id: 1, img: app1 },
    { id: 2, img: app2 },
    { id: 3, img: app3 },
  ];

  return (
    <div className="bg-[#bdc3c7] pb-10">
      <div className="bg-[#bdc3c7] ">
        <h2 className=" my_h2 text-[#5f27cd] ">Service</h2>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="lg:flex px-3 md:px-5">
          <div className="lg:w-1/2 lg:h-[122.4vh]  lg:mr-14">
            <p className="text-[18px] text-justify lg:pr-2">
              <span className="font-semibold"> 1. Services</span> <br />
              Hasan International Provide Integrated Service Solution.
              <br />
              <br />
              <span className="font-semibold">
                2. Heamodialysis Unit Setup
              </span>{" "}
              <br />
              We provided world class heamodialysis unit concept with design and
              dialysis machine, dialysis water treatment plant, dialyzer, blood
              line, fistula needle, dialysis catheter, dialyzer reuse machine,
              and dialyzer reprocessing machine supplier.
              <br />
              <br />
              <span className="font-semibold">
                3. Installation and Comission
              </span>{" "}
              <br />
              Hasan International provide quality and quick design, installation
              and commissioning service.
              <br />
              <br />
              <span className="font-semibold">4. Consultancy</span> <br />
              We help make a better country in a best way. Hasan International
              is one of the consulting organizations and providing appropriate
              and sustainable solutions in health care, industrial factory
              setup, training and strengthening of institutional capabilities.
              We mainly emphasis on effective planning, operation and quality
              product management system. Consultancy with Mineral water project,
              Mango juice project, carbonated drinks project, plastic machinery,
              Waste water treatment plant, Industrial water treatment plant,
              Feed mill project, Auto bricks project, Packaging machinery, Solar
              system, Water desalination plant, Hospital equipment setup etc.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="grid gap-5 mt-3 lg:mt-3 lg:ml-32">
              {appData.map((item) => (
                <div key={item.id} className="bg-white px-4 rounded shadow">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto mb-2"
                  />
                  <h3 className="text-center text-lg font-bold">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
