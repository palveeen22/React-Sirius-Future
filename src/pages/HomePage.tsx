import Header from '../components/Header'
import DogIcon from '../../public/images/dog.svg'
import NextlessonCard from '../components/NextlessonCard'


const HomePage = () => {
    return (
        <section className='w-[85%]'>
            <Header />
            <div className='w-full flex justify-between items-center px-8 py-6 gap-4'>
                {/* <section className="w-1/2 flex flex-row gap-5 p-5">
                    <div className="bg-[#7362BC] w-1/2 h-62 rounded-3xl opacity-0 flex flex-col gap-3 relative overflow-hidden">
                        <h2 className="text-white text-4xl font-normal font-['Circe Rounded'] leading-8 mt-14 ml-10 w-3/5">До 31 декабря любой курс со скидкой 20%</h2>
                        <p className="text-white text-base font-light font-['Circe Rounded'] leading-5 ml-10 w-3/5">До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!</p>
                        <img src={DogIcon} alt="" className="absolute right-0 bottom-0" />
                    </div>
                    <div className="bg-[#E8CBFF] w-40 h-62 rounded-lg opacity-0"></div>
                </section>
                <div className='w-1/2' > y</div > */}
                <div className='bg-[#7362BC] w-1/2 h-64 rounded-3xl'></div>
                <NextlessonCard />
                <div className='bg-[#E8CBFF] w-[20%] h-64 rounded-3xl'></div>
            </div >
            <div className='w-full flex justify-center items-center px-8 py-6 gap-4'>
                <div className='border border-[#7362BC] w-[35%] h-96 rounded-3xl'></div>
                <div className='border border-[#7362BC] w-[65%] h-96 rounded-3xl'></div>
            </div >
        </section >
    )
}

export default HomePage