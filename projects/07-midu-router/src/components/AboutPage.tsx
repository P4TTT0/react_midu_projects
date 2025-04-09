import { Lang, useI18n } from "../translations/useI18n";


export const AboutPage = ({ routeParams }: { routeParams: { lang: Lang } }) => {
    const i18n = useI18n(routeParams.lang ?? 'en');
    return(
      <>
        <h1>{i18n.about.title}</h1>
        <div>
          <img src="https://github.com/p4ttt0.png" alt="Foto de p4ttt0" />
          <p>{i18n.about.description}</p>
        </div>
      </>
    );
  }