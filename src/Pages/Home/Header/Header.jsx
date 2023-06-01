import "./Header.css";
const Header = () => {
  return (
    <div className="h-[100vh]">
      <img
        className="w-full h-screen"
        src="https://i.ibb.co/NyV9v6v/bg.png"
        alt="car!"
      />
      <div className="heder-content flex">
        <div className="text-center ">
          <h2 className="text-[#81ecec] text-4xl font-bold  leading-none">
            Safe Water
          </h2>
          <h2 className="text-[#81ecec] text-6xl font-bold  leading-none">
            SAVE THE WORLD
          </h2>
        </div>
      </div>
        
    </div>
  );
};

export default Header;
