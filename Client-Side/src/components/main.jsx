import { BrowserRouter } from "react-router-dom"
import { Nav } from "../routing/Nav"
import { Routing } from "../routing/Routing"
import { Provider } from "react-redux"
import store from "../redux/Store"
import DashboardLayoutAccount from "./exemple"
import { AccountSidebar } from "./Account"
import { IconButton } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react"
import { Home } from "./Home"

export const Main = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return <>
    <Provider store={store}>
        <BrowserRouter>
          <AccountSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        
              {/* כפתור לפתיחת הסיידבר */}

            <Nav></Nav>
            <Routing></Routing>
        </BrowserRouter>
    </Provider>
    </>
}