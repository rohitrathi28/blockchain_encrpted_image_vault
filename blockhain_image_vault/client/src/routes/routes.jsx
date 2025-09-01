import {createBrowserRouter} from "react-router-dom"
import Wallet from "../pages/Wallets"

import Homes from "../pages/Homes"


export const routes = createBrowserRouter([
    {path:"/",element:<Wallet/>},
    {path:"/home",element: <Homes/>
        
    }
])