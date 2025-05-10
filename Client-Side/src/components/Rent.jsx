import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Paper, TextField, Typography, CardMedia, Box, Stack } from '@mui/material';
import Style from '../style/Style.css'
import matchers from '@testing-library/jest-dom/matchers';
import Item from './Item';
import { MarginOutlined } from '@mui/icons-material';
import { Outlet } from 'react-router';
import { RentNext } from './RentNext';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCar } from '../redux/Actions';

export const RentCarPopup = ({ isOpen, onClose}) => {
  let car=useSelector(state=>state.selectedCar)
  console.log(car);
  let dispatch=useDispatch()
  const [openDetyles, setOpenPopapDetyles] = useState(false);
  const openPopupDetyles = () => setOpenPopapDetyles(true);
  const closePopupDetyles = () => {
    setOpenPopapDetyles(false)
    
  }
  const o = () => {
    onClose();
    setTimeout(openPopupDetyles, 200);
  }
  return <>
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>השאלת רכב</DialogTitle>
      <DialogContent>
        <Box>
          <CardMedia
            component="img"
            maxWidth
            width="15%"
            height='30%'
            image={`/cars/${car.img}`}
            alt={car.model}
            sx={{ objectFit: 'contain', }}
          />
          <Box>
            <Typography variant="h6" align='center'>{car.company} {car.model}</Typography>
            <Typography variant="h6" align='right'>{car.company} {car.model}</Typography>
            <Typography variant="h6" color="text.secondary" align='right'>{car.description}</Typography>
            <Typography variant="h6" align='right'>עיר: {car.city}</Typography>
            <Typography variant="h6" align='right'>רחוב: {car.street}</Typography>
            <Typography variant="h6" align='right'>מחיר לשעה: ${car.pricePerHour}</Typography>
            <Typography variant="h6" align='right'> שנת יצור: {car.yearBook}</Typography>
            <Typography variant="h6" align='right'>{'קמ"ש '}{car.fuelConsumptionPerKm}</Typography>
          </Box>
        </Box>

        <Box
          autoFocus required
          margin="dense"
          id="רישוי"
          name="מספר רישוי רכב"
          label="מספר רישוי רכב "
          type="text"
          fullWidth
          variant="outlined"
          value={() => car.licensing

          }
        ></Box>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" variant="contained" onClick={o}>להשכרה עכשיו</Button>
      </DialogActions>
    </Dialog>
    <RentNext isOpen={openDetyles} onCloseP={closePopupDetyles} car={car} ></RentNext>
  </>
};
