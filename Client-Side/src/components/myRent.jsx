import { useLocation } from "react-router";
import { CarCard } from "./CarCard"
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { setLends, setReturns } from "../redux/Actions";
import { CastRounded } from "@mui/icons-material";

export const MyRent = () => {
    let location = useLocation()
    const dispatch = useDispatch()
    const lends = useSelector(state => state.lends)
    const returns = useSelector(state => state.returns)
    const user = useSelector(state => state.currentUser)
    const listCars = useSelector(state => state.currentCars)
    useEffect(() => {
        axios.get(`https://localhost:7052/api/Rental`).then((response) => {
            dispatch(setLends(response.data))
        })
        axios.get(`https://localhost:7052/api/Bac`).then((response) => {
            dispatch(setReturns(response.data))
        })
    }, [dispatch])
    console.log(lends);
    const [myRent, setMyRent] = useState(lends.length > 0 ? lends.filter(r => user.id == r.userId) : [])
    console.log(myRent)
    return <>
        <Box sx={{
            padding: 2,
            borderColor: "blue",
            border: "1px solid",
            minHeight: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {user.userTypeId == 2 && (lends.map((rent) => (
                    listCars.map((car) => (
                        rent.carId == car.id && <CarCard car={car} type={returns.find(r => r.rentalId == rent.id).paid == true ? 3 : 2} rent={rent} ></CarCard>
                    ))
                )))
                }
                {myRent.map((rent) => (
                    listCars.map((car) => (
                        rent.carId == car.id && <CarCard car={car} type={returns.find(r => r.rentalId == rent.id).paid == true ? 3 : 2} rent={rent} ></CarCard>
                    ))
                ))}
            </div>
        </Box>
    </>
}