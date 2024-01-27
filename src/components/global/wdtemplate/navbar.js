import React, {useState} from "react";
import ToggleDarkLight from '../theme/ThemeToggle';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useParams, Link } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const [activeNav, setActiveNav] = useState(false);
    const params = useParams();
    const [searchValue, setSearchValue] = useState(params?.query);
    // const [dropDownUser, setDropDownUser] = useState(false);

    const handleToggle = () => {
        setActiveNav(!activeNav);
    };

    const handleSearch = (e) =>{
        setSearchValue(e.target.value);
        
        const delayDebounceFn = setTimeout(() => {
            if (e.target.value) navigate(`/search/${e.target.value}`); 
            else navigate(`/`);
        }, 800)
    
        return () => clearTimeout(delayDebounceFn)
    }
    

    return (
    <>
        <header className="mb-20">
            <nav className="flex justify-around py-4 bg-white/80
                backdrop-blur-md shadow-md w-full
                fixed top-0 left-0 right-0 z-10">

                <div className="flex items-center">
                    <Link className="cursor-pointer" to={`/`}>
                        Wibudesu
                    </Link>
                </div>

                <div className="items-center hidden space-x-8 md:flex">
                    <a className="flex text-gray-600 hover:text-blue-500
                        cursor-pointer transition-colors duration-300" href="/">
                        Home
                    </a>

                    <a className="flex text-gray-600 
                        cursor-pointer transition-colors duration-300
                        font-semibold hover:text-blue-600" href="/">
                        Anime
                    </a>

                    <Link className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300" to={`/manga`}>
                        Manga
                    </Link>

                    <Link className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300" to={`/lightnovel`}>
                        Light Novel
                    </Link>

                    {/* <a className="flex text-gray-600 hover:text-blue-500
                        cursor-pointer transition-colors duration-300" href="/">
                        Wibunews
                    </a>

                    <a className="flex text-gray-600 hover:text-blue-500
                        cursor-pointer transition-colors duration-300" href="/">
                        Help
                    </a> */}
                </div>

                <div className="flex items-center space-x-5">
                    
                    <div className='max-w-md mx-auto'>
                        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                <FaSearch
                                    className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer h-6 w-6"
                                />
                            </div>

                            <input
                            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Search something.."
                            onChange={handleSearch}
                            value={searchValue}
                            /> 
                        </div>
                    </div>
                    <ToggleDarkLight />
                    {/* <FaUser className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer" onClick={handleDropDown}/>

                    <div className={ (dropDownUser ? "" : "hidden" ) + " absolute right-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none top-12"} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                        <Link className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0" to={`/setting/apisetting`}>Api settings</Link>
                        <form method="POST" action="#" role="none">
                            <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                        </form>
                        </div>
                    </div> */}
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={handleToggle}>
                            <svg
                                className="w-6 h-6 text-gray-500"
                                xshow="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>

        <div className={!activeNav ? "hidden" : "md:hidden"}>
            <ul className="">
                {/* <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
                <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
                <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
                <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li> */}
                <li><a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" href="/">
                        Home
                    </a></li>
                <li><a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" href="/">
                    Anime
                </a></li>

                <li><Link className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" to={`/manga`}>
                    Manga
                </Link></li>

                <li><a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" href="/">
                    Wibunews
                </a></li>

                <li><a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" href="/">
                    Help
                </a></li>
            </ul>
        </div>
    </>);
}

export default Navbar;