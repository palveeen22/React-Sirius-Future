import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const BaseLayout = () => {
    return (
        <section className='w-full flex justify-start'>
            <SideBar active />
            <Outlet />
        </section>
    );
};

export default BaseLayout;
