import { menuType } from "../Menu";

export const menuConfig: Record<menuType, any> = {
    ua: {
        'Послуги': '/services',
        'Про нас': '/about',
        'Команда': '/team',
        'Контакти': '/contacts'
    },
    ru: {
        'Услуги': '/services',
        'О нас': '/about',
        'Наша команда': '/team',
        'Контакты': '/contacts'
    },  
    en: {
        'Services': '/services',
        'About': '/about',
        'Our team': '/team',
        'Contacts': '/contacts'
    }
  
}

