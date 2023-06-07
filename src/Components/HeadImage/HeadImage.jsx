import './HeadImage.css'

const HeadImage = ({ text }) => {
  return (
    <div className="h-[10vh] bg-[#bdc3c7] relative">
      <div className=''>
      <h2 className="my_h2 text-[#5f27cd] absolute left-1/2 -translate-x-1/2 font-bold leading-none">
        {text}
      </h2>
      </div>
    </div>
  );
};

export default HeadImage;
