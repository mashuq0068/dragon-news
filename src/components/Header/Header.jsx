import logo from './logo.png'
import moment from 'moment/moment';
import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <>
        <div className=' flex flex-col justify-center items-center mt-12 space-y-5'>
             <img src={logo} alt="" />
             <div>
            <p> Journalism Without Fear or Favour</p>
             </div>
             <div>
             {moment().format("dddd, MMMM, D, YYYY ")}
             <span className='bg-slate-300 drop-shadow-xl shadow-xl px-2 py-2 ml-5 cursor-pointer '>{moment().format('LTS')}</span>
             </div>

        </div>
        <div  className=' mt-12  text-center flex gap-2 justify-center items-center'>
        <button className="   before:ease relative h-12 w-72 rounded-md overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 hover:border-none hover:drop-shadow-xl hover:shadow-xl before:transition-all before:duration-300 hover:text-white shadow-black hover:before:-rotate-180">
      <span className="relative z-10">Latest</span>
    </button>
            <span className=' drop-shadow-xl shadow-xl p-2'>
                <Marquee speed={100} pauseOnHover >
                    <p className='mr-8'>Match Highlights: Germany vs Spain </p>
                   
                <p className='mr-8'>Talk Show: Man city vs Tottenham </p>
                <p className='mr-8'>Champions Leauge : Buyern vs Man UTD</p>
                </Marquee>
                
            </span>
        </div>
        



        </>

    );
};

export default Header;