import { defineStore } from "pinia";

const themeStore = defineStore({
    id: "ThemeStore",

    state: () => ({
        theme: 'ligth',
    }),

    actions: {
        setTheme(newTheme){
            localStorage.setItem('theme', newTheme);
            if (newTheme === 'light') {
                document.querySelector('html').classList.remove('dark');
                
            }else{
                document.querySelector('html').classList.add('dark');
            }

            this.$state.theme = newTheme
        },

        initTheme(){
            const local = localStorage.getItem('theme');

            if(!local){
                localStorage.setItem('theme', this.$state.theme )
            }
            this.setTheme(local)
        }
    }


})




export default themeStore;