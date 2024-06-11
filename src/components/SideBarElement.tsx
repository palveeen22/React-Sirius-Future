import { TPropsNav } from '../assets/custom/type';
import Icons from '../libs/constants';
import CalendarIcon from '../assets/custom/Calendar';
import LibraryIcon from '../assets/custom/LibIcon';
import PaymentIcon from '../assets/custom/PaymentIcon';
import QuestionsIcon from '../assets/custom/QuestionIcon';
import SettingsIcon from '../assets/custom/SettingIcon';
import PlayGroundIcon from '../assets/custom/PlayGroundIcon';
import ContactIcon from '../assets/custom/ContactIcon';
import HomeIcon from '../assets/custom/HomeIcon';
import AchivmentIcon from '../assets/custom/AchivmentIcon';

const SideBarElement = (props: TPropsNav) => {

    const { Title, Icon, isACtive, Onclick = () => console.log("click") } = props;

    const divClass = 'h-10 w-full flex flex-row items-center gap-2 cursor-pointer';
    const activeClass = 'bg-[#8D7FC7] rounded-r-[30px]';
    const iconClass = 'w-7 h-7 ml-11';
    const titleActiveClass = 'font-circe text-lg font-bold leading-5 text-left text-white';
    const titleInactiveClass = 'font-circe text-lg font-normal leading-5 text-left text-[#434B74]';

    const renderIcon = () => {
        switch (Icon) {
            case Icons.Home:
                return <HomeIcon isActive={isACtive} className={iconClass} />;
            case Icons.Calendar:
                return <CalendarIcon isActive={isACtive} className={iconClass} />;
            case Icons.Payment:
                return <PaymentIcon isActive={isACtive} className={iconClass} />;
            case Icons.Achievements:
                return <AchivmentIcon isActive={isACtive} className={iconClass} />;
            case Icons.Library:
                return <LibraryIcon isActive={isACtive} className={iconClass} />;
            case Icons.Questions:
                return <QuestionsIcon isActive={isACtive} className={iconClass} />;
            case Icons.Settings:
                return <SettingsIcon isActive={isACtive} className={iconClass} />;
            case Icons.Trainer:
                return <PlayGroundIcon isActive={isACtive} className={iconClass} />;
            case Icons.connection:
                return <ContactIcon isActive={isACtive} className={iconClass} />;
            default:
                return null;
        }
    };

    return (
        <div className={`${divClass} ${isACtive ? activeClass : ''}`} onClick={() => Onclick()}>
            {renderIcon()}
            <h4 className={isACtive ? titleActiveClass : titleInactiveClass}>{Title}</h4>
        </div>
    );
}

export default SideBarElement;
