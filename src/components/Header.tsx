import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [isUser, setIsUser] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggleUser = () => {
        setIsUser((prevUser) => !prevUser);
    };

    const toggleDropdown = () => {
        setIsOpen((prevOpen) => !prevOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div className="shadow-md bg-white p-6 rounded-b-3xl">
            <div className="flex justify-between items-center">
                <h3 className="font-['Circe Rounded'] text-[24px] font-400 leading-[24px] text-[#323854]">
                    Добро пожаловать, <span className="text-[#7362BC]">{isUser ? 'Михаил!' : 'Анна!'}</span>
                </h3>
                <div className="flex items-center gap-3">
                    <img src="/icons/chat.svg" alt="chat-notif" />
                    <div className="flex justify-start items-center">
                        <img src={isUser ? "/icons/user1.svg" : "/icons/user2.svg"} alt="user-profile" className="w-10 h-10 object-cover" />
                        <img
                            src={"/icons/changeProfile.svg"}
                            onClick={toggleDropdown}
                            className="w-8 h-8 cursor-pointer"
                            style={{ rotate: isOpen ? '180deg' : '0deg' }}
                        />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="w-64 p-8 gap-4 rounded-xl border border-[#7362BC] bg-white absolute z-[99] right-5 top-20">
                    <img
                        src="/icons/close.svg"
                        alt="icon-close"
                        className="absolute top-[12px] right-[12px] cursor-pointer"
                        onClick={closeDropdown}
                    />
                    <img src="/icons/triangle.svg" alt="triangle-sirius" className="absolute right-[54px] top-[-8px]" />
                    <div className="flex-col justify-between gap-4">
                        <h3 className="font-['Circe Rounded'] text-[16px] font-400 leading-[21.6px] text-[#323854]">
                            Смена пользователя
                        </h3>
                        <div
                            className={`flex items-center gap-[8px] w-[90%] h-[48px] p-[8px] rounded-[12px] ${isUser && 'bg-[#EEEEFF]'}`}
                        >
                            <img src={isUser ? "/icons/user1.svg" : "/icons/user2.svg"} alt="sirius-user" />
                            <div className="flex flex-col gap-[2px]">
                                <h4 className="font-['Circe Rounded'] text-[12px] font-400 leading-[16.2px] text-[#323854]">
                                    {isUser ? 'Михаил' : 'Анна'}
                                </h4>
                                <p className="font-['Circe Rounded'] text-[10px] font-300 leading-[12px] text-[#323854]">Это вы</p>
                            </div>
                        </div>
                        <div
                            className="flex items-center gap-[8px] w-[90%] h-[48px] p-[8px] rounded-[12px] cursor-pointer"
                            onClick={toggleUser}
                        >
                            <img src={!isUser ? "/icons/user1.svg" : "/icons/user2.svg"} alt="sirius-user" />
                            <div className="flex flex-col gap-[2px]">
                                <h4 className="font-['Circe Rounded'] text-[12px] font-400 leading-[16.2px] text-[#323854]">
                                    {!isUser ? 'Михаил' : 'Анна'}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-[#EEEEFF] mt-[12px]"></div>
                    <button
                        className="flex justify-between items-center w-full h-[40px] bg-white border-none font-['Circe Rounded'] text-[16px] font-400 leading-[21.6px] text-[#008AFF] mt-[12px]"
                        onClick={handleLogout}
                    >
                        <p>Выход</p>
                        <img src="/icons/logout.svg" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;