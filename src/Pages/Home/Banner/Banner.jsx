
import img2 from '../../../assets/2.jpeg'

const Banner = () => {
  return (
    <div className='lg:flex'>
      <div>
          <img src={img2} alt="" className='rounded'/>
     
      </div>
      <div className='items-center justify-center flex bg-[#f9f8f6] rounded'>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque illum hic.</h2>
      </div>
    </div>
  );
};

export default Banner;