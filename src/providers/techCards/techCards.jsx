import { createContext, useState } from "react";

export const TechContext = createContext([])

export const TechProvider = ({children}) => {
    const [ techs ] = useState([
        {title: 'Javascript', image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"},
        {title: 'React', image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"},
        {title: 'Redux', image:"https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"},
        {title: 'CSS3', image:"https://logospng.org/download/css-3/logo-css-3-2048.png"},
        {title: 'HTML5', image:"https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png"},
        {title: 'Typescript', image:"https://www.svgrepo.com/show/303600/typescript-logo.svg"},
        {title: 'Typeorm', image:"https://opencollective-production.s3-us-west-1.amazonaws.com/a90da2c0-a82c-11e7-8125-a1bea2bef08c.png"},
        {title: 'Python', image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png"},
        {title: 'PostgreSQL', image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"},
        {title: 'NodeJS', image:"https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png"},
        {title: 'Django', image:"https://seeklogo.com/images/D/django-logo-F46C1DD95E-seeklogo.com.png"}
    ])

    return (
        <TechContext.Provider value={{techs}}>
            {children}
        </TechContext.Provider>
    )
}
