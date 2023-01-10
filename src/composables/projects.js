import mediamanagerLogo from '../assets/projects/Mediamanager/logo-mediamanager.png';
import cryptoLogo from '../assets/projects/Crypto-app/logo.png'
import pokemonLogo from '../assets/projects/Pokemon/PokemonLogo.png'
import todolistLogo from '../assets/projects/Todolist/todolist.png'
import prestamigoLogo from '../assets/projects/Prestamigo/prestamigologo.png'

export const projectsWork = [
    {
        tittle: 'Mediamanager',
        role: 'Frontend Developer',
        tecnologys: ['Vue Js', 'Fabric Js', 'Vuetify', 'Axios', 'Vuex'],
        description: 'Es una aplicación web hecha en Lavavel y Vue js, su funcion es administrar monitores comerciales que estan ubicados en distintas partes de Italia, cuenta con un editor de imagenes hecho con una libreria de javascript llamada Facric JS. Mi funcion es dar soporte al codigo ya existente, implementar nuevas soluciones y solucionar problemas.',
        company: 'Eforte.it',
        contac: 'matteoraggi@gmail.com',
        logo: mediamanagerLogo,
        to: '/proyectos/mediamanager'
    }
]

export const projectPersonal = [
    {
        tittle: 'Crypto App View',
        tecnologys: ['Vue Js', 'Axios', 'Bootstrap'],
        description: 'Es una aplicacion web en donde se muestran los precios actualizados de las cryptomonedas mas importantes, consumiendo una API para la obtención de dichos datos',
        logo: cryptoLogo,
        to: '/proyectos/cryptoApp'
    },
    {
        tittle: 'Pokemon-Game',
        tecnologys: ['Vue Js', 'Axios', 'Vuex'],
        description: 'Un pequeño juego que consiste en adivinar el pokemon',
        logo: pokemonLogo,
        to: '/proyectos/PokemonGame'
    },
    {
        tittle: 'Todolist',
        tecnologys: ['Vue Js', 'Tailwindcss','MongoDb', 'Express js',],
        description: 'Es una aplicacion en la que se puede registrar un usuario, y este puede almacenar sus tareas diarias, el usuario puede crear, modificar, actualizar y eliminar tareas con facilidad.',
        logo: todolistLogo,
        to: '/proyectos/Todolist' 
    },
    {
        tittle: 'Prestamigo',
        role: 'Frontend Developer',
        tecnologys: ['Ionic', 'Vue Js', 'React Js', 'Pinia', 'Typescript'],
        description: 'Es una aplicacion movil de gestion de prestamos hecha en ionic con vue, el dashboard esta construido en react',
        logo: prestamigoLogo,
        to: '/proyectos/prestamigo'
    }
]




