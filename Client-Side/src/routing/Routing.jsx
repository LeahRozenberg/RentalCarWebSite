import { Route, Routes } from "react-router"
import { Home } from "../components/Home"
import { Login } from "../components/Login"
import { Register } from "../components/Register"
import { VehicleMenu } from "../components/VehicleMenu"
import { CreditCard } from "../components/CreditCard"
import { AccountSidebar } from "../components/Account"
import { MyRent, myRent } from "../components/myRent"
import { Form } from "../components/FormLog"
import { ToRent } from "../components/ToRent"
import { CarCard } from "../components/CarCard"
import { Stepper } from "../components/Sttepper"
import { Return, ReturnCar } from "../components/ReturnCar"
import { Manager } from "../components/Manager"
import { Users } from "../components/Users"
import { EditCar } from "../components/EditCar"

export const Routing = () => {
    return <>
        <Routes>
            <Route path="Home" element={<Home></Home>}></Route>
            <Route path="Login" element={<Login></Login>} >
                <Route path="creditCard" element={<CreditCard></CreditCard>}></Route>
            </Route>

            <Route path="CreditCard" element={<CreditCard></CreditCard>}></Route>
            <Route path="Register" element={<Register></Register>}></Route>
            <Route path="VehicleMenu" element={<VehicleMenu ></VehicleMenu>}>
                <Route path="Account" element={<AccountSidebar ></AccountSidebar>}></Route>
                <Route path="CarCard" element={<CarCard></CarCard>}></Route>
            </Route>
            <Route path="ToRent" element={<ToRent></ToRent>}></Route>
            <Route path="myRent" element={<MyRent></MyRent>}></Route>
            <Route path="FormLog" element={<Form></Form>}></Route>
            <Route path="Sttepper" element={<Stepper></Stepper>}>
            </Route>


            <Route path="" element={<Home></Home>}></Route>
            <Route path="Return" element={<ReturnCar></ReturnCar>}></Route>
            <Route path="manager" element={<Manager ></Manager>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
            <Route path="EditCar" element={<EditCar></EditCar>}></Route>
        </Routes>

    </>

}