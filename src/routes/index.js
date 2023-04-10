import Home from "../pages/Home"
import Booking from "../pages/Booking"
import Hotels from "../pages/Hotels"
import Login from "../pages/Login"
import Introduction from "../pages/Introduction"
import Payment from "../pages/Payment"


const publicRoutes = [
    {path:'/', component: Home},
    {path:'/booking', component: Booking, layout : null},
    {path:'/hotels', component: Hotels},
    {path:'/login', component: Login, layout : null},
    {path:'/introduction', component: Introduction, layout : null},
    {path:'/payment', component: Payment, layout : null},
]

const privateRoutes=[]

export {publicRoutes,privateRoutes};