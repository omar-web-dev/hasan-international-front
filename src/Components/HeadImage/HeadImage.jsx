import './HeadImage.css'

const HeadImage = ({ image, text }) => {
  return (
    <div className="h-[40vh] relative">
      <img src={image} alt="" className='w-full absolute h-full'/>
      <div className='heading-image-overlay'>
      <h2 className="text-[#2af1ffeb] text-5xl bottom-14 absolute left-1/2 -translate-x-1/2 font-bold leading-none">
        {text}
      </h2>
      </div>
    </div>
  );
};

export default HeadImage;
