import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.json";
import ru from "./lang/ru.json";

i18n.use(initReactI18next).init({
	resources: {
		en: { ...en },
		ru: { ...ru },
	},
	lng: "ru",
});
