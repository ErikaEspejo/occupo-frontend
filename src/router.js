import vueRouter from 'vue-router'
import App from './App'
import CrearCuenta from './components/CrearCuenta'

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
            component: CrearCuenta
        },
        {
            path: '*',
            name: "Error",
            component: Error
        },
        
    ]
})

export default router