
import { useSelector } from "react-redux"
import { Box, Typography, Grid, Button, TextField, Card, CardMedia, Stack } from "@mui/material";
import { AttachMoney, CheckCircleOutline, CreditCard, Event, HighlightOff, LocationCity, LocationOn, Speed } from "@mui/icons-material";
import Item from "./Item";
import { Stepper } from "./Sttepper";
import { useLocation } from "react-router";
import { Toast } from "primereact/toast";
import { useRef } from "react";
export const ToRent = () => {
    let car = useSelector(state => state.selectedCar)
    const to= useRef(null)
    let location = useLocation()
    const type = location.state
    console.log(type);
    const btn = {
        typeForFunc: type === 1 ? 1 :2, 
        text: type === 1 ? 'השכר עכשיו' : type === 2 ? 'החזר עכשיו' : '',
    }
    const toast = (severity, summary, detail) => {
        to.current.show({ severity, summary, detail, life:0 });
    };
    return <>
     <Toast ref={to} style={{ textAlign: "center", fontSize: "1.5rem" }}>
                <button onClick={() => toast.current.clear()}>סגור</button>
            </Toast>
        <Box sx={{ backgroundColor: "#f5f5f5", top: 0 }}>
            <Box sx={{ p: 3, backgroundColor: "#f5f5f5", display: 'flex', flexDirection: 'row-reverse' }}>
                <Card
                    sx={{
                        maxWidth: 'auto',
                        mx: "auto",
                        overflow: "hidden",
                        width: '65%',
                        mb: 3,
                    }}
                >
                    <CardMedia
                        component="img"
                        image={`/cars/${car.img}`}
                        alt={`${car.company} ${car.model}`}
                        sx={{ objectFit: 'cover', borderRadius: '4px' }}
                    />
                    <Stack direction="row" spacing={2}
                        sx={
                            {
                                backgroundColor: "white",
                                padding: "10px",
                                mt: "auto",
                                borderBottom: "2px solid red",
                                justifyContent: "center",
                                alignItems: "center",

                            }
                        }>
                        <Item>
                            <CreditCard sx={{ color: "red", mr: 1 }} />
                            {`${car.company} ${car.model}`}
                        </Item>
                        <Item>
                            <AttachMoney sx={{ color: "red", mr: 1 }} />
                            {`מחיר לשעה: ${car.pricePerHour}`}
                        </Item>
                        <Item>
                            <LocationOn sx={{ color: "red", mr: 1 }} />
                            {`עיר: ${car.city}`}
                        </Item>
                        <Item>
                            <Event sx={{ color: "red", mr: 1 }} />
                            {`שנת יצור: ${car.yearBook}`}
                        </Item>
                        <Item>
                            <Speed sx={{ color: "red", mr: 1 }} />
                            {`קמ"ש: ${car.fuelConsumptionPerKm}`}
                        </Item>
                    </Stack>
                </Card>


                <Box
                    sx={{
                        backgroundColor: "#fff",
                        borderTop: "4px solid red",
                        borderBottom: "4px solid red",
                        borderRadius: "10px",
                        p: 3,
                        mb: 3,
                        boxShadow: 3,
                        maxWidth: 400,
                        width: '35%',
                        mx: "auto",
                    }}
                >
                    <Box>
                        <Stepper type={type} toast={toast}></Stepper>
                        
                    </Box>

                    <Box sx={{ textAlign: "center", mt: 5 }}>
                            {btn.text}

                    </Box>
                </Box>
            </Box>
        </Box >
    </>
};



