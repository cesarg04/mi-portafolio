import jsLogo from '../assets/skils/logo-javascript.svg'
import cssLogo from '../assets/skils/css-logo.svg'
import vueLogo from '../assets/skils/Vue.js_Logo_2.svg'
import nodeLogo from '../assets/skils/nodejs-icon.svg'
import reactLogo from '../assets/skils/React-icon.svg'
import ionicLogo from '../assets/skils/ionic_Logo.svg'

const skils = [
    {
        name: 'JavaScript',
        logo: jsLogo,
        description: ['ES6/ES7', 'JQUERY', 'Fetch', 'Axios']

    },
    {
        name: 'VueJS',
        logo: vueLogo,
        description: ['Composition Api', 'Options Api', 'Vuex', 'Vuetify', 'Quasar']
    },
    {
        name: 'ReactJS',
        logo: reactLogo,
        description: ['Context Api', 'Redux', 'Testing']

    },
    {
        name: 'Ionic',
        logo: ionicLogo,
        description: ['Cordova', 'Capacitor','IOS','Android', 'Integracion con Vue y React']
    },
    {
        name: 'CSS',
        logo: cssLogo,
        description: ['SASS', 'Tailwindcss', 'Bootstrap'] 
        
    },
    {
        name: 'NodeJS',
        logo: nodeLogo,
        description: ['Express js', 'MongoDB', 'SQL']

    }

]


export default skils;