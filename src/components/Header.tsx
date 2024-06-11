import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chat from '../../public/icons/chat.svg';
import user1 from '../../public/icons/user1.svg';
import user2 from '../../public/icons/user2.svg';
import changeProfile from '../../public/icons/changeProfile.svg';
import logout from '../../public/icons/logout.svg';
import close from '../../public/icons/close.svg';
import triangle from '../../public/icons/triangle.svg'

const Header = () => {
    const navigate = useNavigate();
    const [User, setUser] = useState(true);
    const [IsOpen, setIsOpen] = useState(false);

    return (
        <div className='shadow-md bg-white p-6 rounded-b-3xl'>
            <div className='flex justify-between items-center'>
                <h3 className="font-['Circe Rounded'] text-[24px] font-400 leading-[24px] text-[#323854]">
                    Добро пожаловать, <span className="text-[#7362BC]">{User ? 'Михаил!' : 'Анна!'}</span>
                </h3>
                <div className="flex items-center gap-3">
                    <img src={chat} alt="" />
                    <img src={User ? user1 : user2} alt="" />
                    <img
                        src={changeProfile}
                        alt=""
                        onClick={() => setIsOpen((prev: boolean) => !prev)}
                        className={`rotate-${IsOpen ? '180' : '0'} cursor-pointer`}
                    />
                </div>
            </div>
            <div
                className={`w-[250px] h-[262px] p-[30px] gap-[12px] rounded-[12px] border border-[#7362BC] bg-white absolute z-[99] right-[50px] top-[68px] ${IsOpen ? 'block' : 'hidden'
                    }`}
            >
                <img
                    src={close}
                    alt=""
                    className="absolute top-[12px] right-[12px] cursor-pointer"
                    onClick={() => setIsOpen(false)}
                />
                <img src={triangle} alt="" className="absolute right-[54px] top-[-8px]" />
                <h3 className="font-['Circe Rounded'] text-[16px] font-400 leading-[21.6px] text-[#323854]">
                    Смена пользователя
                </h3>
                <div
                    className={`flex items-center gap-[8px] w-[90%] h-[48px] p-[8px] rounded-[12px] ${User ? 'bg-[#EEEEFF]' : ''
                        }`}
                >
                    <img src={User ? user1 : user2} alt="" />
                    <div className="flex flex-col gap-[2px]">
                        <h4 className="font-['Circe Rounded'] text-[12px] font-400 leading-[16.2px] text-[#323854]">
                            {User ? 'Михаил' : 'Анна'}
                        </h4>
                        <p className="font-['Circe Rounded'] text-[10px] font-300 leading-[12px] text-[#323854]">
                            Это вы
                        </p>
                    </div>
                </div>
                <div
                    className="flex items-center gap-[8px] w-[90%] h-[48px] p-[8px] rounded-[12px] cursor-pointer"
                    onClick={() => setUser((prev: boolean) => !prev)}
                >
                    <img src={!User ? user1 : user2} alt="" />
                    <div className="flex flex-col gap-[2px]">
                        <h4 className="font-['Circe Rounded'] text-[12px] font-400 leading-[16.2px] text-[#323854]">
                            {!User ? 'Михаил' : 'Анна'}
                        </h4>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-[#EEEEFF] mt-[12px]"></div>
                <button
                    className="flex justify-between items-center w-full h-[40px] bg-white border-none font-['Circe Rounded'] text-[16px] font-400 leading-[21.6px] text-[#008AFF] mt-[12px]"
                    onClick={() => navigate('/')}
                >
                    <p>Выход</p>
                    <img src={logout} alt="" />
                </button>
            </div>
        </div>
    );
}

export default Header;