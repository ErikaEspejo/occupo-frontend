import vueRouter from 'vue-router'
import App from './App'
import OccupoUsuario from './components/OccupoUsuario'

const router = new vueRouter({
    mode:'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/',
            name: "usuario",
            component: OccupoUsuario
        },
        {
            path: '*',
            name: "Error",
            component: Error
        },
        
    ]
})

export default router