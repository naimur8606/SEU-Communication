import { Outlet } from "react-router-dom";
import Navbar from "../Components/CommonComponents/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:w-2/3 mx-auto bg-white min-h-screen md:py-2">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;