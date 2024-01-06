import { IoHome, IoNotifications } from "react-icons/io5";
import { FaFacebookMessenger, FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation()?.pathname;
    const navLink = (
        <div className="flex justify-center items-center space-x-12 text-3xl text-gray-400">
            <Link className={`${location === '/' && 'text-[#f68e35]'}`} to={'/'}><IoHome></IoHome></Link>
            <Link className={`${location === '/messages' && 'text-[#f68e35]'}`} to={"/messages"}><FaFacebookMessenger></FaFacebookMessenger></Link>
            <Link className={`${location === '/notification' && 'text-[#f68e35]'}`} to={'/notification'}><IoNotifications></IoNotifications></Link>
            <Link className={`${location === '/search' && 'text-[#f68e35]'}`} to={'/search'}><FaSearch></FaSearch></Link>
        </div>
    );

    return (
        <div className="mb-28 md:mb-16 z-[1] bg-white">
            <div className="shadow-md px-4 py-2 fixed top-0 w-full bg-white">
                <div className="flex justify-between items-center">
                        <Link to={'/'} className="md:w-1/3 flex items-center space-x-1.5">
                            <img className="h-12" src="https://i.ibb.co/BLnGcZv/seu.png" alt="" />
                            <h4 className="text-[#f68e35] font-semibold">SEU <br />Communication</h4>
                        </Link>
                    <div className="w-1/3 hidden md:block">
                        {navLink}
                    </div>
                    <div className="md:w-1/3 flex justify-end">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="flex items-center border p-1 rounded-lg">
                                <h4 className="font-semibold mr-1 hidden md:block">Md Naimur Rahman</h4>
                                <img className="h-10 w-10 rounded-full" src="https://i.ibb.co/9VWdWWq/IMG-55777.jpg" alt="PP" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md space-y-2 w-40">
                                <li className="font-medium"><Link to={'/update-profile'}>Update Profile</Link></li>
                                <li className="btn btn-sm text-red-600">LogOut</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="md:hidden mt-2">
                    {navLink}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
