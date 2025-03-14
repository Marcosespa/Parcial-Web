import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      adopta:"Adopt a Robot with Robot Lovers",
      iniciosesion:"login",
      nombre_persona:"User Name",
      contrasenia:"Password",
      listado_robots: "List of Robots",
      nombre: "Name",
      modelo: "Model",
      fabricante: "Manufacturer",
      año_fabricacion: "Year of Manufacture",
      capacidad_procesamiento: "Processing Capacity"
    }
  },
  es: {
    translation: {
      adopta:"Adopta un Robot con Robot Lovers!",
      iniciosesion:"Inicio de sesion",
      nombre_persona:"Nombre de usuario",
      contrasenia:"Contraseña",
      listado_robots: "Listado de Robots",
      nombre: "Nombre",
      modelo: "Modelo",
      fabricante: "Fabricante",
      año_fabricacion: "Año de Fabricación",
      capacidad_procesamiento: "Capacidad de Procesamiento"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "es",
  interpolation: { escapeValue: false }
});

export default i18n;
