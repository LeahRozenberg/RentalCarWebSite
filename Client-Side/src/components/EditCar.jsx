// import { AttachMoney, CalendarToday, Cancel, CheckBox, CheckCircle, CreditCard, Description, DirectionsCar, LocalGasStation, LocationOn, People, Update } from "@mui/icons-material"
// import { BottomNavigation, BottomNavigationAction, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Input, Stack, TextField, Typography } from "@mui/material"
// import { useForm } from "react-hook-form"
// import { useDispatch } from "react-redux"
// import { updateCar } from "../redux/api"
// import { InputText } from "primereact/inputtext"
// import { useLocation } from "react-router"
// import Item from "./Item"
// import { useState } from "react"

// export const EditCar = () => {
//     let dispatch = useDispatch()
//     let location = useLocation()
//     const { register, handleSubmit, formState: { errors } } = useForm()
//     const onSubmit = (data) => {
//         // car.street = data.city
//         // car.price = data.price
//         console.log(data);
//         updateCar({...car,
//             street:car.street,
//             available:true,
//             automaticGear:true,
//             city:city,
//             fuelConsumptionPerKm:fuelConsumptionPerKm,
//             yearBook:yearBook,
//             pricePerHour:pricePerHour,
//             typeCar:description

//         }, car.id)
//         setOpen2(true)
//     }
//     const { isOpen, car } = location.state
//     const [numSeats, setNumSeats] = useState(car.numberOfSeats)
//     const [yearBook, setYearBook] = useState(car.yearBook)
//     const [automaticGear, setAutomaticGear] = useState(car.automaticGear)
//     const [fuelConsumptionPerKm, setFuelConsumptionPerKm] = useState(car.fuelConsumptionPerKm)
//     const [pricePerHour, setPricePerHour] = useState(car.pricePerHour)
//     const [city, setCity] = useState(car.city)
//     const [available, setAvailable] = useState(car.available)
//     const [description, setDescription] = useState(car.typeCar)

//     const [open2, setOpen2] = useState(true)
//     return <>
//         <Dialog open={isOpen} fullWidth maxWidth="sm">
//             <DialogTitle>עידכון פרטי רכב</DialogTitle>
//             <DialogContent>
//                 <form className='form' onSubmit={handleSubmit(onSubmit)}>
//                     <Box sx={{ direction: 'rtl' }}>
//                         <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
//                             <Box display={'flex'} flexDirection={'row'} >
//                                 <People sx={{ color: 'red', mr: 1 }} />
//                                 <TextField label={`מספר מושבים: ${car.numberOfSeats}`} value={numSeats}
//                                     {...register('numberOfSeats')} onKeyDown={(e) => { setNumSeats(e.target.value + e.key) }}
//                                     onClick={() => { setNumSeats("") }}></TextField>
//                             </Box>
//                             <Box display={'flex'} flexDirection={'row'} >
//                                 <CalendarToday sx={{ color: 'red', mr: 1 }} />
//                                 <TextField label={`שנת יצור: ${yearBook}`} value={yearBook} {...register('yearBook')} onKeyDown={(e) => {
//                                     console.log(e);
//                                     setYearBook(e.target.value + e.key)
//                                 }}
//                                     onClick={() => { setYearBook("") }}></TextField>
//                             </Box>
//                             <Box display={'flex'} flexDirection={'row'} >
//                                 <DirectionsCar sx={{ color: 'red', mr: 1 }} />
//                                 <CheckBox label={`גיר: ${automaticGear ? 'אוטומטי' : 'ידני'}`}
//                                     {...register('automaticGear')} onKeyDown={(e) => { setAutomaticGear(e.target.value + e.key) }}
//                                     onClick={() => { setAutomaticGear("") }}></CheckBox>
//                             </Box>
//                             <Box display={'flex'} flexDirection={'row'} >
//                                 <LocalGasStation sx={{ color: 'red', mr: 1 }} />
//                                 <TextField label={`צריכת דלק (לק"מ): ${fuelConsumptionPerKm}`} value={fuelConsumptionPerKm}
//                                     {...register('fuelConsumptionPerKm')} onKeyDown={(e) => { setFuelConsumptionPerKm(e.target.value + e.key) }}
//                                     onClick={() => { setFuelConsumptionPerKm("") }}></TextField>
//                             </Box>
//                             <Box display={'flex'} flexDirection={'row'} >
//                                 <AttachMoney sx={{ color: 'red', mr: 1 }} />
//                                 <TextField label={`מחיר לשעה: ${pricePerHour} ₪`} value={pricePerHour}
//                                     {...register('pricePerHour')} onKeyDown={(e) => { setPricePerHour(e.target.value + e.key) }}
//                                     onClick={() => { setPricePerHour("") }}></TextField>
//                             </Box>
//                             <Box display={'flex'} flexDirection={'row'} >
//                                 <LocationOn sx={{ color: 'red', mr: 1 }} />
//                                 <TextField label={`מיקום: ${car.city}`} value={`${city}`}
//                                     {...register('city')} onKeyDown={(e) => { setCity(e.target.value + e.key) }}
//                                     onClick={() => { setCity("") }}></TextField>
//                             </Box>
//                             <Box display={'flex'} flexDirection={'row'} >
//                                 {car.available ? (<>

//                                     <CheckBox sx={{ color: 'green', mr: 1 }} {...register('available')} />
//                                 </>
//                                 ) : (
//                                     <>
//                                         <CheckCircle sx={{ color: 'green', mr: 1 }} />
//                                         <Cancel sx={{ color: 'red', mr: 1 }} />
//                                     </>
//                                 )}
//                                 {`זמינות: ${car.available ? 'זמין' : 'לא זמין'}`}
//                             </Box>
//                             <Box display={'flex'} flexDirection={'row'} >
//                                 <Description sx={{ color: 'red', mr: 1 }} />
//                                 <TextField {...register('typeCar')} label={`תיאור: ${description || 'אין תיאור זמין'}`} value={description}
//                                     onKeyDown={(e) => { setDescription(e.target.value + e.key) }}
//                                     onClick={() => { setDescription("") }}></TextField>
//                             </Box>
//                         </Stack>
//                         <Button type="submit" sx={{ mt: 3, borderRadius: 2, backgroundColor: 'red' }} >לעידכון</Button>
//                     </Box>
//                 </form>
//             </DialogContent>
//         </Dialog>

//     </>
// }
import { AttachMoney, CalendarToday, Cancel, CheckBox, CheckCircle, CreditCard, Description, DirectionsCar, LocalGasStation, LocationOn, People, Update } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Input, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateCar } from "../redux/api";
import { InputText } from "primereact/inputtext";
import { useLocation } from "react-router";
import Item from "./Item";
import { useState } from "react";
import { InputAdornment } from '@mui/material';
import { } from '@mui/icons-material';

export const EditCar = () => {
    let dispatch = useDispatch();
    let location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const uCar={
            ...car,
            street: car.street,
            numberOfSeats: parseInt(numSeats),
            automaticGear: true,
            city: city,
            fuelConsumptionPerKm: parseInt(fuelConsumptionPerKm),
            yearBook: yearBook,
            pricePerHour: pricePerHour,
            typeCar: description
        }
        console.log(uCar);
        updateCar(uCar, car.id);
        setOpen2(true);
    };

    const { isOpen, car } = location.state;
    const [numSeats, setNumSeats] = useState(car.numberOfSeats);
    const [yearBook, setYearBook] = useState(car.yearBook);
    const [automaticGear, setAutomaticGear] = useState(car.automaticGear);
    const [fuelConsumptionPerKm, setFuelConsumptionPerKm] = useState(car.fuelConsumptionPerKm);
    const [pricePerHour, setPricePerHour] = useState(car.pricePerHour);
    const [city, setCity] = useState(car.city);
    const [available, setAvailable] = useState(car.available);
    const [description, setDescription] = useState(car.typeCar);
    const [open2, setOpen2] = useState(true);

    return <>
        <Dialog open={isOpen} onClose={() => setOpen2(false)} fullWidth maxWidth="sm">
            <DialogTitle sx={{ textAlign: 'center' }}>עידכון פרטי רכב</DialogTitle>
            <DialogContent sx={{ backgroundColor: '#f8f8f8' }}>
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{ direction: 'rtl', textAlign: 'center' }}>
                        <Stack direction="column" spacing={2} sx={{ mt: 2, width: 'auto' }}>
                            <Box display={'flex'} flexDirection={'row'}>
                                <TextField
                                    label={`מספר מושבים: ${car.numberOfSeats}`}
                                    value={numSeats}
                                    {...register('numberOfSeats')}
                                    onKeyDown={(e) => { setNumSeats(e.target.value + e.key) }}
                                    onClick={() => { setNumSeats("") }}
                                    type="number"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <People sx={{ color: 'red' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                                />
                            </Box>


                            <Box display={'flex'} flexDirection={'row'}>
                                <TextField
                                    label={`שנת יצור: ${yearBook}`}
                                    value={yearBook}
                                    {...register('yearBook')}
                                    onKeyDown={(e) => { setYearBook(e.target.value + e.key) }}
                                    onClick={() => { setYearBook("") }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <CalendarToday sx={{ color: 'red' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                                />
                            </Box>


                            <Box display={'flex'} flexDirection={'row'}>
                                <CheckBox
                                    label={`גיר: ${automaticGear ? 'אוטומטי' : 'ידני'}`}
                                    {...register('automaticGear')}
                                    onClick={() => { setAutomaticGear(!automaticGear) }}
                                    sx={{ color: '#e57373' }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <DirectionsCar sx={{ color: 'red' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>


                            <Box display={'flex'} flexDirection={'row'}>

                                <TextField
                                    label={`צריכת דלק (לק"מ): ${fuelConsumptionPerKm}`}
                                    value={fuelConsumptionPerKm}
                                    {...register('fuelConsumptionPerKm')}
                                    onKeyDown={(e) => { setFuelConsumptionPerKm(e.target.value + e.key) }}
                                    onClick={() => { setFuelConsumptionPerKm("") }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocalGasStation sx={{ color: 'red' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                                />
                            </Box>

                            <Box display={'flex'} flexDirection={'row'}>
                                <TextField
                                    label={`מחיר לשעה: ${pricePerHour} ₪`}
                                    value={pricePerHour}
                                    {...register('pricePerHour')}
                                    onKeyDown={(e) => { setPricePerHour(e.target.value + e.key) }}
                                    onClick={() => { setPricePerHour("") }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AttachMoney sx={{ color: 'red' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                                />
                            </Box>

                            <Box display={'flex'} flexDirection={'row'}>
                                <TextField
                                    label={`מיקום: ${car.city}`}
                                    value={`${city}`}
                                    {...register('city')}
                                    onKeyDown={(e) => { setCity(e.target.value + e.key) }}
                                    onClick={() => { setCity("") }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationOn sx={{ color: 'red' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                                />
                            </Box>

                            <Box display={'flex'} flexDirection={'row'}>
                                {car.available ? (
                                    <>
                                        <CheckBox sx={{ color: 'green', mr: 1 }} {...register('available')} on />
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle sx={{ color: 'green', mr: 1 }} />
                                        <Cancel sx={{ color: 'red', mr: 1 }} />
                                    </>
                                )}
                                {`זמינות: ${car.available ? 'זמין' : 'לא זמין'}`}
                            </Box>

                            {/* תיאור */}
                            <Box display={'flex'} flexDirection={'row'}>
                                <TextField
                                    label={`תיאור: ${description || 'אין תיאור זמין'}`}
                                    value={description}
                                    {...register('typeCar')}
                                    onKeyDown={(e) => { setDescription(e.target.value + e.key) }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Description sx={{ color: 'red' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    onClick={() => { setDescription("") }}
                                    sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
                                />
                            </Box>
                        </Stack>

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 3, borderRadius: 2, backgroundColor: 'red' }}
                        >
                            לעדכון
                        </Button>
                        <Button variant="outlined" onClick={() => setOpen2(false)}
                            sx={{ mt: 3, borderRadius: 2, backgroundColor: 'red' }}>סגור</Button>
                    </Box>
                </form>
            </DialogContent>
        </Dialog>
    </>
}


