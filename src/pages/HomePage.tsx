import Header from "../components/Header";
import DogIcon from "../../public/images/dog.svg";
import NextlessonCard from "../components/NextlessonCard";

const HomePage = () => {
    return (
        <section className="w-[85%]">
            <Header />
            <div className="w-full flex justify-between items-center px-8 py-6 gap-4">
                {/* <section className="flex flex-row pt-5 pl-8 gap-5">
                    <div className="w-1/2 bg-[#7362BC] h-[248px] gap-3 rounded-[30px] opacity-0 flex flex-col relative overflow-hidden">
                        <h2 className="mt-[56px] ml-[40px] w-[60%] font-[Circe Rounded] text-[32px] font-normal leading-[32px] text-left text-white">
                        </h2>
                        <p className="w-[60%] font-[Circe Rounded] text-[16px] font-light leading-[20px] text-left text-white ml-[40px]">
                        </p>
                        <img className="absolute right-0 bottom-0" src="/images/dog.svg" alt="Image description" />
                    </div>
                    <div className="w-[162px] h-[248px] top-[222px] left-[1228px] gap-0 rounded-[20px] opacity-0 bg-[#E8CBFF]">
                    </div>               
                     </section> */}

                <div className="relative bg-[#7362BC] w-1/2 h-64 rounded-3xl">
                    <div className="flex justify-between">
                        <div className="flex-col p-4 gap-10 justify-between">
                            <h2 className="mt-[56px] ml-[40px] w-[60%] text-[32px] font-normal leading-[32px] text-left text-white">До 31 декабря любой курс со скидкой 20%</h2>
                            <p className="w-[60%] font-[Circe Rounded] text-[16px] font-light leading-[20px] text-left text-white ml-[40px]">До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!</p>
                        </div>
                        <img className="absolute right-0 bottom-0 rounded-3xl" src="/images/dog.svg" alt="Image description" />
                    </div>
                </div>
                <NextlessonCard />
                <div className="bg-[#E8CBFF] w-[20%] h-64 rounded-3xl"></div>
            </div>
            <div className="w-full flex justify-center items-center px-8 py-6 gap-4">
                <div className="border border-[#7362BC] w-[35%] h-96 rounded-3xl"></div>
                <div className="border border-[#7362BC] w-[65%] h-96 rounded-3xl"></div>
            </div>
        </section>
    );
};

export default HomePage;
