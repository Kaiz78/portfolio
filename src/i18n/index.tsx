import en from './en.json';
import fr from './fr.json';

export const translate = (key: string, language: string): string => {
    let langData:any;

    if (language === 'EN') {
        langData = en;
    } else if (language === 'FR') {
        langData = fr;
    }

    return langData[key];
}