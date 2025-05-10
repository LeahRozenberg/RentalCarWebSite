import React, { useRef, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Paper, TextField, Typography, CardMedia, Box, Stack } from '@mui/material';
import Style from '../style/Style.css'
import matchers from '@testing-library/jest-dom/matchers';
import Item from './Item';
import { MarginOutlined } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addRental, setCurrentCars, setCurrentCarsFirst, setLends, setSelectedCar, updateCar } from '../redux/Actions';
import { postCar, postRental, putCar } from '../redux/api';
import axios from 'axios';
import { Toast } from 'primereact/toast';

export const RentNext = ({ isOpen, onCloseP, toast }) => {
    const nav = useNavigate()
    const user = useSelector(state => state.currentUser)
    const lends = useSelector(state => state.lends)
    const car = useSelector(state => state.selectedCar)
    const [myRentId, setMyRentId] = useState(1)
    const dispatch = useDispatch()
    const date = (date) => {
        return <>
            <div>
                <h5  >תאריך ושעת קבלת הרכב</h5>
                {date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()}
                <br></br>
                {date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds()}
            </div>
        </>
    }
    
    const numCar = (car) => {
        return <>
            <div>
                <h5> מספר רישוי רכב</h5>
                {car.licensePlate}
            </div>
        </>
    }

    const setRent = (user, car) => {
        const rent = {
            userId: user.id,
            carId: car.id,
            date: new Date()
        };
        const updatedCar = { ...car, available: false };
        axios.post(`https://localhost:7052/api/Rental`, rent)
            .then(() => {
                axios.put(`https://localhost:7052/api/Car?id=${updatedCar.id}`, updatedCar)
                    .then((response) => {
                        dispatch(setLends(response.data))

                        axios.get(`https://localhost:7052/api/Car`)
                            .then((response) => {
                                dispatch(setCurrentCarsFirst(response.data))
                                setMyRentId(lends && lends?.find(x => car.id == x.carId)?.id)
                                setTimeout(() => {

                                    toast('success', 'primary', ` מספר השכרה${myRentId}`)
                                    nav('/VehicleMenu')
                                }
                                    , 10000);
                            })
                    })
            })
            .catch(error => {
                console.error("Error updating car or rental:", error);
            });
    }
    return <>

        <Box
            autoFocus required
            margin="dense"
            id="רישוי"
            name="מספר רישוי רכב"
            label="מספר רישוי רכב "
            type="text"
            fullWidth
            variant="outlined"
            value={() => car.licensePlate
            }>
            <Stack direction="column" spacing={2}>
                <Item>{numCar(car)}</Item>
                <Item>{date(new Date())}</Item>
                <p>קוד ההחזרה שלי:</p>
                <Item>{parseInt(myRentId) * 12345}</Item>
            </Stack>
            <Button color="red" variant="contained" onClick={() => setRent(user, car)}>השכר עכשיו</Button>
        </Box>
    </>
};
