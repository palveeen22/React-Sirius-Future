"use client";
import { useState } from "react";
import { z } from "zod";
import { FormDataSchema } from "../../schemas/validation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { Login } from "./loginAction";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate();

    type Inputs = z.infer<typeof FormDataSchema>;
    const [showPassword, setShowPassword] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('ru');
    const [loginError, setLoginError] = useState<string | null>(null);

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        // Here, you can add your logic to update the language of your application
        console.log(`Selected language: ${language}`);
    };


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(FormDataSchema),
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const result = await Login(data);
            if (result.success) {
                // Handle successful login
                navigate('/dashboard');
                console.log(result.data);
            } else {
                setLoginError(JSON.stringify(result.error));
            }
        } catch (error) {
            setLoginError('An error occurred during login.');
        }
    };

    return (
        <section className="w-full min-h-screen flex justify-center items-center">
            <main className="flex flex-col justify-center items-center gap-5">
                <img src="/images/logo.png" className="w-20 h-20" />
                <h1 className="text-[#323854] text-5xl">Вход в Sirius Future</h1>
                {/* {loginError && <div className="text-red-500">{loginError}</div>} */}
                <form
                    className="w-full flex flex-col gap-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        type="email"
                        {...register("email")}
                        placeholder="E-mail"
                        className="border border-[#ECECEC] rounded-lg px-4 py-3  focus:ring-[#8D7FC7] focus:ring-1 focus:outline-none hover:border-[#8D7FC7] cursor-pointer"
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            {...register("password")}
                            placeholder="Пароль"
                            className="border border-[#ECECEC] rounded-lg  px-4 py-3  focus:ring-[#8D7FC7] focus:ring-1 focus:outline-none hover:border-[#8D7FC7] cursor-pointer w-full"
                        />
                        <button
                            type="button"
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <img src="/icons/eyeOpen.svg?url" alt="Show password" />
                            ) : (
                                <img src="/icons/eyeClose.svg?url" alt="Hide password" />
                            )}
                        </button>
                    </div>
                    {errors.password && <p>{errors.password.message}</p>}
                    <div className="w-full flex justify-start items-center gap-3">
                        <input type="checkbox" className="w-5 h-5 border-[#C8C5CD] accent-[#7362BC]" />
                        <h3 className="text-[#79747F] text-md">Запомнить меня</h3>
                    </div>
                    <button type="submit" className="bg-[#8D7FC7] rounded-full p-5 mt-5">
                        <p className="text-white text-lg font-bold leading-[22.5px] text-center">Войти</p>
                    </button>
                </form>
                <div className="w-full flex justify-between items-center">
                    <h3 className="text-[#008AFF] text-base cursor-pointer">Я забыл пароль</h3>
                    <h3 className="text-[#008AFF] text-base cursor-pointer">Войти как тренер</h3>
                </div>
                <div className="flex-col justify-center items-center text-center p-25">
                    <h3 className="text-[#323854] text-base cursor-pointer">Нет аккаунта?</h3>
                    <h3 className="text-[#008AFF] text-base cursor-pointer">Зарегистрироваться</h3>
                </div>
                <div className="flex flex-row gap-2 items-center text-center">
                    <div
                        className={`font-['Circe_Rounded'] leading-[21px] text-left cursor-pointer ${selectedLanguage === 'ru' ? 'text-[#7362BC] text-4xl' : 'text-[#79747F] text-xl'
                            }`}
                        onClick={() => handleLanguageChange('ru')}
                    >
                        Ru
                    </div>
                    <div
                        className={`font-['Circe_Rounded'] leading-[21.6px] text-left cursor-pointer ${selectedLanguage === 'en' ? 'text-[#7362BC] text-4xl' : 'text-[#79747F] text-xl'
                            }`}
                        onClick={() => handleLanguageChange('en')}
                    >
                        En
                    </div>
                </div>
            </main>
        </section>
    );
};

export default LoginPage;