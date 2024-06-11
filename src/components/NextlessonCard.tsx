import { useState, useEffect } from 'react';

function NextlessonCard() {
    const [minutes, setMinutes] = useState(59);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMinutes(prev => prev - 1);
        }, 60000);

        return () => clearTimeout(timer);
    }, [minutes]);

    return (
        <div className="w-[30%] h-64 bg-[#FFF1CB] rounded-3xl flex flex-col justify-around items-center">
            <h2 className="text-xl font-normal text-center">
                Следующее занятие <span className="block">начнется через:</span>
            </h2>            <div className="flex justify-between w-48">
                <div className="text-4xl font-medium text-gray-700">
                    6<span className="text-sm">д</span>
                </div>
                <div className="text-4xl font-medium text-gray-700">
                    12<span className="text-sm">ч</span>
                </div>
                <div className="text-4xl font-medium text-gray-700">
                    {minutes}<span className="text-sm">м</span>
                </div>
            </div>
            <button className="w-48 h-12 flex justify-center items-center border border-dashed border-gray-700 rounded-full">
                Button
            </button>
        </div>
    );
}

export default NextlessonCard;
