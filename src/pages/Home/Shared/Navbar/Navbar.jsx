import { GiButterflyFlower } from 'react-icons/gi';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineHome, AiOutlineBars } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { MdNotifications } from 'react-icons/md';
import { RiLogoutBoxRLine } from 'react-icons/ri';

const Navbar = () => {
    return (
        <section className='mt-20'>
        <div className='fixed bottom-0 right-0 left-0 flex justify-center gap-4 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-black/5 py-2'>
        <GiButterflyFlower className='w-[45px] h-[45px] rounded-md text-center px-3 py-3 text-blue-700 cursor-pointer'/>
            <BiSearchAlt className='w-[45px] h-[45px] rounded-md text-center px-3 py-3 text-gray-500 cursor-pointer text-lg'/>
            <AiOutlineHome className='w-[45px] h-[45px] rounded-md text-center px-3 py-3 text-white cursor-pointer text-lg bg-blue-600'/>
            <AiOutlineBars className='w-[45px] h-[45px] rounded-md text-center px-3 py-3 text-gray-500 cursor-pointer text-lg'/>
            <VscAccount className='w-[45px] h-[45px] rounded-md text-center px-3 py-3 text-gray-500 cursor-pointer text-lg'/>
            <div className='flex'>
                <MdNotifications className='w-[45px] h-[45px] rounded-md text-center px-3 py-3 text-gray-500 cursor-pointer text-lg'/>
                <RiLogoutBoxRLine className='w-[45px] h-[45px] rounded-md text-center px-3 py-3 text-gray-500 cursor-pointer text-lg'/>
            </div>
            </div>
        </section>
    );
};

export default Navbar;