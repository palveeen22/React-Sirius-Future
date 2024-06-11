import { useNavigate } from "react-router-dom";
import SideBarElement from "./SideBarElement";
import Icons from "../libs/constants";
import { TPropsSide } from "../assets/custom/type";

const SideBar = ({ active }: TPropsSide) => {
    const navigate = useNavigate()

    return (
        <nav className="w-[15%] bg-[#EEEEFF] min-h-screen rounded-3xl py-8 my-8 ml-14">
            <div className="flex flex-col justify-between items-center gap-5">
                <span className="flex justify-center items-center">
                    <img src="/images/sirin.png" className="w-40 h-15 object-cover" alt="Logo" />
                </span>
                <SideBarElement isACtive={active} Title='Главная' Icon={Icons.Home} Onclick={() => {

                    navigate('/' + Icons.Home)
                }} />
                <SideBarElement isACtive={!active} Title='Расписание' Icon={Icons.Calendar} Onclick={() => {

                    navigate('/' + Icons.Calendar)
                }} />
                <SideBarElement isACtive={!true} Title='Оплата' Icon={Icons.Payment} />
                <SideBarElement isACtive={!true} Title='Достижения' Icon={Icons.Achievements} />
                <SideBarElement isACtive={!true} Title='Тренажеры' Icon={Icons.Trainer} />
                <SideBarElement isACtive={!true} Title='Библиотека' Icon={Icons.Library} />
                <SideBarElement isACtive={!true} Title='Проверка связи' Icon={Icons.connection} />
                <SideBarElement isACtive={!true} Title='Настройки' Icon={Icons.Settings} />
                <SideBarElement isACtive={!true} Title='Вопросы' Icon={Icons.Questions} />
                <div className="bg-[#FDFDFF] flex flex-col justify-start gap-4 p-4 rounded-3xl m-4">
                    <h5 className="text-base font-normal">Учитесь бесплатно</h5>
                    <p className="text-sm text-[#323854] font-light">
                        Приводите друзей с детьми заниматься в Sirius Future и получайте
                        подарки!
                    </p>
                    <div className="flex justify-between items-center">
                        <button className="bg-[#D8ECFF] p-4 rounded-full">
                            <p className="text-[#323854] font-normal">Узнать</p>
                        </button>
                        <img src="/images/gift.png" className="w-20 h-10 object-cover" alt="Gift" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default SideBar;
