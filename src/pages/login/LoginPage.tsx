"use client";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { ApiRequest } from "../../libs/apiRequest";
import { useTranslation } from "react-i18next";
import useLanguage from "../../hooks/useLanguage";

type TLoginInput = {
    email: string;
    password: string;
};

// Define the validation schema using zod
const FormDataSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

const LoginPage = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('ru');
    const { t } = useTranslation();
    const { currentLanguage, handleChangeLanguage } = useLanguage();
    // const [loginError, setLoginError] = useState<string | null>(null);

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        console.log(`Selected language: ${language}`);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLoginInput>({
        resolver: zodResolver(FormDataSchema),
    });

    const handleLogin = async (input: TLoginInput) => {
        try {
            const { data } = await ApiRequest.auth["v1.0"].post("/login", input);
            localStorage.setItem("access_token", data.access_token);
            navigate("/Home");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="w-full min-h-screen flex justify-center items-center">
            <main className="flex flex-col justify-center items-center gap-5">
                <img src="/images/logo.png" className="w-20 h-20" alt="Logo" />
                <h1 className="text-[#323854] text-5xl">{t('headerLogin')}</h1>
                <form
                    className="w-full flex flex-col gap-4"
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <input
                        type="email"
                        {...register("email")}
                        placeholder="Почта"
                        className="border border-[#ECECEC] rounded-lg px-5 py-4 focus:ring-[#8D7FC7] focus:ring-2 focus:outline-none hover:border-[#8D7FC7] cursor-pointer w-full placeholder:text-lg"
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            {...register("password")}
                            placeholder="Пароль"
                            className="border border-[#ECECEC] rounded-lg px-5 py-4 focus:ring-[#8D7FC7] focus:ring-2 focus:outline-none hover:border-[#8D7FC7] cursor-pointer w-full placeholder:text-lg"
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
                    <h3 className="text-[#008AFF] text-xl cursor-pointer">Я забыл пароль</h3>
                    <h3 className="text-[#008AFF] text-xl cursor-pointer">Войти как тренер</h3>
                </div>
                <div className="flex-col justify-center items-center text-center p-25 m-8">
                    <h3 className="text-[#323854] text-base cursor-pointer">Нет аккаунта?</h3>
                    <h3 className="text-[#008AFF] text-xl cursor-pointer">Зарегистрироваться</h3>
                </div>
                <div className="flex flex-row gap-2 items-center text-center mt-24">
                    <div
                        className={`font-['Circe_Rounded'] leading-[21px] text-left cursor-pointer ${selectedLanguage === 'ru' ? 'text-[#7362BC] text-4xl' : 'text-[#79747F] text-xl'}`}
                        onClick={() => handleChangeLanguage('ru')}
                    >
                        Ru
                    </div>
                    <div
                        className={`font-['Circe_Rounded'] leading-[21.6px] text-left cursor-pointer ${selectedLanguage === 'en' ? 'text-[#7362BC] text-4xl' : 'text-[#79747F] text-xl'}`}
                        onClick={() => handleChangeLanguage('en')}
                    >
                        En
                    </div>
                </div>
            </main>
        </section>
    );
};

export default LoginPage;
