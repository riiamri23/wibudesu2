
import Toggle from '../theme/ThemeToggle';

const Navbar = () => {
    return (
        <header className="mb-20">
            <nav className="flex justify-around py-4 bg-white/80
                backdrop-blur-md shadow-md w-full
                fixed top-0 left-0 right-0 z-10">

                <div className="flex items-center">
                    <a className="cursor-pointer" href="/">
                        Wibudesu
                    </a>
                </div>

                <div className="items-center hidden space-x-8 lg:flex">
                    <a className="flex text-gray-600 hover:text-blue-500
                        cursor-pointer transition-colors duration-300" href="/">
                        Home
                    </a>

                    <a className="flex text-gray-600 
                        cursor-pointer transition-colors duration-300
                        font-semibold hover:text-blue-600" href="/">
                        Anime
                    </a>

                    <a className="flex text-gray-600 hover:text-blue-500
                        cursor-pointer transition-colors duration-300" href="/">
                        Manga
                    </a>

                    <a className="flex text-gray-600 hover:text-blue-500
                        cursor-pointer transition-colors duration-300" href="/">
                        Wibunews
                    </a>

                    <a className="flex text-gray-600 hover:text-blue-500
                        cursor-pointer transition-colors duration-300" href="/">
                        Help
                    </a>
                </div>

                <div className="flex items-center space-x-5">
                    <a className="flex text-gray-600 
                        cursor-pointer transition-colors duration-300
                        font-semibold hover:text-blue-600" href="/">

                        Login
                    </a>

                    <Toggle />
                </div>
            </nav>
        </header>
        );
}

export default Navbar;