import vueRouter from 'vue-router'
import App from './App'
import CrearCuenta from './components/CrearCuenta'
import Principal from './components/Principal'
import Reservar from './components/Reservar'
import Habitaciones from './components/Habitaciones'
import Pagos from './components/Pagos'
import UserAuth from './components/UserAuth'
import ActualizarUsuario from '/componets/ActualizarUsuario'

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
            path: '/usuario',
            name: "user",
            component: CrearCuenta
        },
        {
            path: '/usuario/update_usuario',
            name: "updateuser",
            component: ActualizarUsuario
        },
        {
            path: '/principal',
            name: "principal",
            component: Principal
        },
        {
            path: '/user/auth',
            name: "UserAuth",
            component: UserAuth
        },
        {
            path: '/user/reservas',
            name: "Reservar",
            component: Reservar
        },
        {
            path: '/habitaciones',
            name: "Habitaciones",
            component: Habitaciones
        },
        {
            path: '/user/pagos',
            name: "Pagos",
            component: Pagos
        },
        {
            path: '/*',
            name: "Error",
            component: Error
        },
        
    ]
})

export default router