import { BottomNavigation, BottomNavigationAction, Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
    CreditCard,
    People,
    CalendarToday,
    LocalGasStation,
    AttachMoney,
    LocationOn,
    DirectionsCar,
    CheckCircle,
    Cancel,
    Description,
} from '@mui/icons-material';
import { useSelector } from "react-redux";
import Item from "./Item";
import  {Login} from "./Login";
import { RentNext } from "./RentNext";
import { Return, ReturnCar } from "./ReturnCar";

export const Stepper = ({type,toast}) => {
    console.log(type);
    const steps = ['פרטי רכב', 'מילוי פרטים אישיים', ' תשלום השכרה'];
    const nav = useNavigate()
    let car = useSelector(state => state.selectedCar)
    const [value, setValue] = useState(0);
    return <>
        <Box sx={{ direction: 'rtl' }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    console.log(newValue);
                    
                    setValue(newValue)     
                }}
            >
                <BottomNavigationAction label='פרטי רכב'/>
                <BottomNavigationAction label='מילוי פרטים אישיים' />
                <BottomNavigationAction label={type.type==1?'תשלום והשכרה':'החזרת הרכב'} />
            </BottomNavigation>
            {value === 0 && (
                <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
                    <Item>
                        <CreditCard sx={{ color: 'red', mr: 1 }} />
                        {`${car.company} ${car.model}`}
                    </Item>
                    <Item>
                        <People sx={{ color: 'red', mr: 1 }} />
                        {`מספר מושבים: ${car.numberOfSeats}`}
                    </Item>
                    <Item>
                        <CalendarToday sx={{ color: 'red', mr: 1 }} />
                        {`שנת יצור: ${car.yearBook}`}
                    </Item>
                    <Item>
                        <DirectionsCar sx={{ color: 'red', mr: 1 }} />
                        {`גיר: ${car.automaticGear ? 'אוטומטי' : 'ידני'}`}
                    </Item>
                    <Item>
                        <LocalGasStation sx={{ color: 'red', mr: 1 }} />
                        {`צריכת דלק (לק"מ): ${car.fuelConsumptionPerKm}`}
                    </Item>
                    <Item>
                        <AttachMoney sx={{ color: 'red', mr: 1 }} />
                        {`מחיר לשעה: ${car.pricePerHour} ₪`}
                    </Item>
                    <Item>
                        <LocationOn sx={{ color: 'red', mr: 1 }} />
                        {`מיקום: ${car.city}, ${car.street}`}
                    </Item>
                    <Item>
                        {car.available ? (
                            <CheckCircle sx={{ color: 'green', mr: 1 }} />
                        ) : (
                            <Cancel sx={{ color: 'red', mr: 1 }} />
                        )}
                        {`זמינות: ${car.available ? 'זמין' : 'לא זמין'}`}
                    </Item>
                    <Item>
                        <Description sx={{ color: 'red', mr: 1 }} />
                        {`תיאור: ${car.description || 'אין תיאור זמין'}`}
                    </Item>
                </Stack>
            )}
            {value === 1 && (
                <Login></Login>
            )}
            {value === 2 && (
                <Typography variant="h6" sx={{ mt: 2 }}>
                  { type.type===1 && ( <RentNext toast={toast}></RentNext>)}
                  {type.type==2 && (<ReturnCar></ReturnCar>)}
                </Typography>
            )}


        </Box>
    </>
}