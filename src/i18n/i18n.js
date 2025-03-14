import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
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
  lng: "es",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
