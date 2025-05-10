import * as React from 'react';
import { Card, CardContent, CardMedia, Button, Typography, Box, Popper, TextField, CardActions, CardHeader, IconButton, ButtonBase, Input, Dialog, DialogTitle, DialogContent, DialogActions, Checkbox } from '@mui/material';
import { useState } from 'react';
import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import SpeedIcon from '@mui/icons-material/Speed';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useDispatch, useSelector } from 'react-redux';
import { removeCar, setSelectedCar } from '../redux/Actions';
import { EditCar } from './EditCar';
import { Outlet, useNavigate } from 'react-router';
import { Toast } from 'primereact/toast';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { deleteCar } from '../redux/api';

export const CarCard = ({ car, list, setList, rent,type }) => {
  console.log(type);
  const toast = React.useRef(null);
  const nav = useNavigate()
  const cars = useSelector(state => state.cars)
  const theCars = useSelector(state => state.currentCars)
  let scar = useSelector(state => state.selectedCar)
  const user = useSelector(state => state.currentUser)
  const returns=useSelector(state=>state.returns)
  const dispatch = useDispatch()
  const [open, setOpenPopap] = useState(false);
  const btn={
    text:type===1?'השכר עכשיו':type===2?'החזר עכשיו':'הוחזר',
  }

  const openPopup = () => {
    console.log(user);

    if (!user.password) {
      console.log(user);

      toast.current.show({
        severity: 'success',  
        summary: 'משתמש אינו רשום במערכת',
        detiles: 'להכרת רכב יש לפתוח חשבון MY RENT',
        life: 3000,
      })
      setTimeout(() => {
        nav('/FormLog')
      }, 3000);


    }
    else {
      dispatch(setSelectedCar(car))
      console.log(type);
      nav('../ToRent', { state: {type}} )
      //setOpenPopap(true)
    }
  }

  const [open1, setOpenPopap1] = useState(false);
  const openPopup1 = () => setOpenPopap1(true);
  const closePopup1 = () => setOpenPopap1(false);


  const DeleteCar = (id) => {
    deleteCar(id)
    nav('/')
    console.log(deleteCar(id));

  }

  const UpdateCar = () => {
    nav('/EditCar',{state:{car:car,isOpen:true,onClose:onclose}})
   }




  return <>
    <Card sx={{
      width: 300,
      margin: 3,
      backgroundColor: '#f8f8f8',
      borderTop: "4px solid red", 
      borderBottom: "4px solid red",
      borderRadius: "10px", 
      boxShadow: 3, 
    }}>
      {user && user.userTypeId === 2 && (
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="error"
            onClick={() => DeleteCar(car.id)}
          >
            <Delete />
          </IconButton>
          <IconButton
            color="red"
            onClick={() => {UpdateCar(car.id)}}
          >
            <Edit />
          </IconButton>
        </CardActions>
      )||
        (<Checkbox  {...car} icon={<FavoriteBorder sx={{ color: 'red' }} />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />)}<CardMedia
        component="img"
        height="180"
        image={`/cars/${car.img}`}
        alt={`${car.company} ${car.model}`}
        sx={{ objectFit: 'cover', borderRadius: '4px' }}
      />
      <CardContent >
        <Typography variant="h6" textAlign="center" gutterBottom>
          {car.company} {car.model}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Box display="flex" alignItems="center">
            <LocalGasStationIcon sx={{ mr: 1 }} />
            <Typography variant="body2">דלק: {car.balance}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <EventSeatIcon sx={{ mr: 1 }} />
            <Typography variant="body2">מושבים: {car.numberOfSeats}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Box display="flex" alignItems="center">
            <SpeedIcon sx={{ mr: 1 }} />
            <Typography variant="body2">מהירות: {car.fuelConsumptionPerKm} קמ"ש</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <DirectionsCarIcon sx={{ mr: 1 }} />
            <Typography variant="body2">מחיר: ₪{car.pricePerHour}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color={car.available ? 'green' : 'red'}>
            {car.available ? 'זמין' : 'לא זמין'}
          </Typography>
          <Button
            variant="contained"
            disabled={type==1? !car.available :type==2?(returns.find(x=>x.rentalId==rent.id) && returns.find(x=>x.rentalId==rent.id).length>0):type==3}
            onClick={ 
              openPopup
              }
            sx={{ backgroundColor: 'red' }}
          >
           {btn.text}
          </Button>
        </Box>
      </CardContent>
    
      <Toast ref={toast} position="top-center" />
      
    </Card>
  </>
}

