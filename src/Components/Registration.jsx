import { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="mx-auto shadow-md bg-gray-300 rounded-md px-3 md:px-5 lg:px-0">
      <div className="mx-auto py-8 flex justify-center items-center max-w-[800px] ">
        <div className=" bg-white w-full rounded-lg p-10 mx-auto">
          <h2 className="text-2xl font-bold mb-4">Sing Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Full Name <span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Sharmin Jahan Lucky"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Email <span className="text-[red]">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="jimi.uae@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Address <span className="text-[red]">*</span>
              </label>
              <input
                type="text"
                value={addressLine}
                onChange={(e) => setAddressLine(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="UAE, Sharjah"
              />
            </div>

            <div className=" flex gap-3">
              <div className="mb-4 w-full ">
                <label className="block mb-2 font-medium">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Rolla"
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block mb-2 font-medium">State</label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Sharjah"
                />
              </div>
              <div className="mb-4 w-full">
                <label className="block mb-2 font-medium">Zip Code</label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="00000"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          <div className="flex justify-between mt-4">
            <p className="text-sm text-center dark:text-gray-400">
              Have an account?
            </p>
            <Link to="/sing-in" className="hover:underline text-blue-500 hover:text-violet-400">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
