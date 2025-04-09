import { useLanguage } from "../customHooks/useLanguage";
import { useI18n } from "../translations/useI18n";

export const HomePage = () => {
    const { language } = useLanguage();
    const i18n = useI18n(language ?? 'en');
    return (
      <>
        <h1>Home</h1>
        <p>{i18n.home.title}</p>
      </>
    );
}