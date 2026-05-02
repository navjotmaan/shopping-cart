import { Link } from 'react-router-dom';
import { Swirl } from '@paper-design/shaders-react';

const Home = () => {
    return (
        <div className='relative w-full h-screen overflow-hidden'>
            <Swirl
                className='absolute inset-0 w-full h-full object-cover'
                width={window.innerWidth} 
                height={window.innerHeight}
                colors={["#90a955", "#4f772d", "#31572c"]}
                colorBack="#132a13"
                bandCount={4}
                twist={0.1}
                center={0.2}
                proportion={0.5}
                softness={0}
                noise={0.2}
                noiseFrequency={0.4}
                speed={0.32}
            />

            <div className='absolute inset-0 z-10 flex flex-col justify-center text-white md:pr-50 md:pl-10 px-5'>
                <h2 className='md:text-[6rem] text-5xl leading-15 md:leading-30 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mt-40 font-bold font-pro'>
                    Uncommon Finds for Common Spaces
                </h2>
                <p className='mt-4 text-lg md:text-xl md:w-[60%] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'>
                    We’ve scouted the unique and the necessary so you don't have to. Shop the essentials you won't find anywhere else.
                </p>
                <button className='mt-8 w-50 bg-[#ecf39e] text-black font-bold text-lg px-6 py-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-[#d4e17a]'>
                    <Link to="shop">Start Shopping</Link>
                </button>
            </div>
        </div>
    )
};

export default Home;