import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const DashboardLayout = () => {
    return (
        <section className='w-[80%]'>
            <Header />
            <Outlet />
        </section>
    );
};

export default DashboardLayout;
