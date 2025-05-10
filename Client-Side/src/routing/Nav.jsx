import { NavLink, useNavigate } from "react-router-dom"
import '../style/Style.css'
import { Provider, useDispatch, useSelector } from "react-redux"
import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import { AccountSidebar } from "../components/Account"
import { useState } from "react"
import PersonIcon from '@mui/icons-material/Person';
export const Nav = () => {
    const styleNav = ({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "#e50914" : "#333",
        fontWeight: "bold",
        fontSize: "1rem",
    })
    let nav=useNavigate()
    const [AccountOpen, setAccountOpen] = useState(false)
    const user=useSelector(state=>state.currentUser)
    return <>     
        <AccountSidebar open={AccountOpen} setOpen={setAccountOpen} />
        <AppBar position="absolute" sx={{ backgroundColor: "white", boxShadow: 1, marginTop: 0, position: "sticky", zIndex: 1000}}>
            <IconButton
                onClick={() => user.password? setAccountOpen(true) :nav('./FormLog')}
                aria-label="delete"
                size="small"
                color='red'
                sx={{ position: 'absolute', justifyContent: 'left', borderRadius: 2,marginTop:3}}>
                <PersonIcon sx={{ color: 'red', fontSize: '35px' }}></PersonIcon>
            </IconButton>
            <Box component="img" src={`${process.env.PUBLIC_URL}/cars/avis-vector-logo.svg`} alt="AVIS Logo" sx={{ justifyContent: 'center', marginTop:2,height:70 }} />
            <Toolbar sx={{ justifyContent: "center" }}>
                <Box className='nav' sx={{ display: "flex", gap: 3 }}>
                    <NavLink to="/Home" className="link" style={styleNav}>בית</NavLink>
                    <NavLink to="/Login" className="link" style={styleNav}>הרשמה</NavLink>
                    <NavLink to="/Register" className="link" style={styleNav}>התחברות</NavLink>
                    <NavLink to="/VehicleMenu" className="link" style={styleNav}>קטלוג</NavLink>
                    {/* <NavLink to="/myRent" className="link">myRent</NavLink> */}
                </Box>
            </Toolbar>
        </AppBar>
    </>
}