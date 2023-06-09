import Home from "../pages/Home"
import Booking from "../pages/Booking"
import Hotels from "../pages/Hotels"
import Login from "../pages/Login"
import Introduction from "../pages/Introduction"
import Payment from "../pages/Payment"
import Uti from "../components/Uti"
import Room from "../components/Room"
import Register from "../pages/Register"


const publicRoutes = [
    {path:'/', component: Login, layout : null},
    {path:'/home', component: Home},
    {path:'/booking/:hotelId', component: Booking, layout : null},
    {path:'/hotels', component: Hotels},
    {path:'/register', component: Register, layout : null},
    {path:'/introduction', component: Introduction, layout : null},
    {path:'/payment', component: Payment, layout : null},
    {path:'/uti/:hotelIdUti', component: Uti, layout : null},
    {path:'/room/:hotelIdRoom', component: Room, layout : null},
]

const privateRoutes=[]

export {publicRoutes,privateRoutes};