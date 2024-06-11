const SideBar = () => {
    return (
        <nav className="w-[20%] bg-[#EEEEFF] min-h-screen rounded-3xl p-4">
            <div className="flex flex-col justify-between items-center gap-10">
                <span className="flex justify-center items-center">
                    <img src="/images/sirin.png" className="w-40 h-15 object-cover" alt="Logo" />
                </span>
                <ul className="flex flex-col justify-between gap-10">
                    <li className="text-[#434B74] text-xl font-normal">Главная</li>
                    <li className="text-[#434B74] text-xl font-normal">Расписание</li>
                    <li className="text-[#434B74] text-xl font-normal">Оплата</li>
                    <li className="text-[#434B74] text-xl font-normal">Достижения</li>
                    <li className="text-[#434B74] text-xl font-normal">Тренажеры</li>
                    <li className="text-[#434B74] text-xl font-normal">Библиотека</li>
                    <li className="text-[#434B74] text-xl font-normal">Проверка связи</li>
                    <li className="text-[#434B74] text-xl font-normal">Настройки</li>
                    <li className="text-[#434B74] text-xl font-normal">Вопросы</li>
                </ul>
                <div className="bg-[#FDFDFF] flex flex-col justify-start gap-4 p-4 rounded-3xl">
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
