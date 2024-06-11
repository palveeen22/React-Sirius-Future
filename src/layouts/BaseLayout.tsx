import { Outlet } from "react-router-dom";
import NavBar from "../components/SideBar";
import SideBar from "../components/SideBar";

const BaseLayout = () => {
    return (
        <section className='w-full flex justify-start p-4'>
            <SideBar />
            <Outlet />
        </section>
    );
};

export default BaseLayout;
