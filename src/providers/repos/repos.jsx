import { createContext, useState } from "react";

export const ReposContext = createContext([]);

export const ReposProvider = ({ children }) => {
  const [repos] = useState([
    {
      image:
        "https://seeklogo.com/images/D/django-logo-F46C1DD95E-seeklogo.com.png",
      title: "Group Project Ascencion",
      link: "https://github.com/alexandrearaujoo/ascension-api",
    },
    {
      image: "https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png",
      title: "Group Project Facilita Transportes",
      link: "https://github.com/aggierosa/FacilitaTransporte",
    },
    {
      image: "https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png",
      title: "S.P.A API Rick&Morty",
      link: "https://github.com/aggierosa/Rick-MortySPAapi",
    },
    {
      image:
        "https://seeklogo.com/images/D/django-logo-F46C1DD95E-seeklogo.com.png",
      title: "KMDB",
      link: "https://github.com/Kenzie-Academy-Brasil-Developers/m5-sprint4-kmdb-aggierosa",
    },
    {
      image:
        "https://seeklogo.com/images/D/django-logo-F46C1DD95E-seeklogo.com.png",
      title: "Komercio",
      link: "https://github.com/Kenzie-Academy-Brasil-Developers/m5-sprint5-komercio-aggierosa",
    },
  ]);

  return (
    <ReposContext.Provider value={{ repos }}>{children}</ReposContext.Provider>
  );
};
