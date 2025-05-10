import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid, FormControlLabel, Checkbox } from "@mui/material";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { addCar } from "../redux/api";
import { Select1 } from "./Select";


const schema = yup.object().shape({
  pricePerHour: yup.number().required("המחיר חייב להיות מספר"),
  city: yup.string().required("העיר נדרשת"),
  street: yup.string().required("הרחוב נדרש"),
  licensePlate: yup.string().required("מספר הרישוי נדרש"),
  numSeats: yup.number().min(1).required("מספר מקומות ישיבה נדרש"),
  yearBook: yup.number().required("שנת הייצור נדרשת"),
  company: yup.string().required("החברה נדרשת"),
  model: yup.string().required("המודל נדרש"),
  img: yup.mixed().required("תמונה נדרשת"),
  typeCar: yup.string().required("סוג רכב נדרש"),
  driveType: yup.string().required("סוג הנעה נדרש")
});

export const AddCar = ({ isOpen, setOpen }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    const newCar = {
      ...data,
      img: data.img[0].name,
      driveTypeId: typeDrive.findIndex(d => d.title === data.driveType),
      available: true,
      fuelConsumptionPerKm: 0,
      balance: 0,
      automaticGear: data.automaticGear || false,
      carModelId: typeCar.findIndex(d => d.description === data.typeCar)
    };
    addCar(newCar);
    setOpen(false);
  };

  const citys = [{ description: 'ירושלים' }, { description: 'בני ברק' }, { description: 'תל אביב' }, { description: 'באר שבע' }, { description: 'חדרה' }, { description: 'הרצליה' }];
  const typeDrive = [{}, { title: 'דלק' }, { title: 'היברידי' }, { title: 'גז' }];
  const typeCar = [{ description: 'פרטיים' }, { description: 'משפחתיים' }, { description: 'גיפים' },{ description: 'מנהלים' },{ description: 'גיפונים' },{ description: 'פרטיים' }];

  return (
    <Dialog open={isOpen} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
      <DialogTitle>הוספת רכב</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ 
        display: 'flex', flexDirection: 'column', gap: 2,
        flexDirection: "column",
        backgroundColor: "white", 
        borderRadius: 2, 
        boxShadow: 3, 
        maxWidth: 400,
        mx: "auto",
        my: 5,
        p: 3, }}>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="מחיר"
                fullWidth
                variant="outlined"
                {...register('pricePerHour')}
                error={!!errors.pricePerHour}
                helperText={errors.pricePerHour ? errors.pricePerHour.message : ''}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="עיר"
                fullWidth
                variant="outlined"
                {...register('city')}
                error={!!errors.city}
                helperText={errors.city ? errors.city.message : ''}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="רחוב"
                fullWidth
                variant="outlined"
                {...register('street')}
                error={!!errors.street}
                helperText={errors.street ? errors.street.message : ''}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="מספר רישוי"
                fullWidth
                variant="outlined"
                {...register('licensePlate')}
                error={!!errors.licensePlate}
                helperText={errors.licensePlate ? errors.licensePlate.message : ''}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="מספר מקומות"
                fullWidth
                variant="outlined"
                type="number"
                {...register('numSeats')}
                error={!!errors.numSeats}
                helperText={errors.numSeats ? errors.numSeats.message : ''}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="שנת ייצור"
                fullWidth
                variant="outlined"
                {...register('yearBook')}
                error={!!errors.yearBook}
                helperText={errors.yearBook ? errors.yearBook.message : ''}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox {...register('automaticGear')} />}
                label="גיר אוטומטי"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="סוג הנעה"
                fullWidth
                variant="outlined"
                {...register('driveType')}
                error={!!errors.driveType}
                helperText={errors.driveType ? errors.driveType.message : ''}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="חברה"
                fullWidth
                variant="outlined"
                {...register('company')}
                error={!!errors.company}
                helperText={errors.company ? errors.company.message : ''}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="מודל"
                fullWidth
                variant="outlined"
                {...register('model')}
                error={!!errors.model}
                helperText={errors.model ? errors.model.message : ''}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="תמונה"
                fullWidth
                variant="outlined"
                type="file"
                {...register('img')}
                error={!!errors.img}
                helperText={errors.img ? errors.img.message : ''}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="סוג רכב"
                fullWidth
                variant="outlined"
                {...register('typeCar')}
                error={!!errors.typeCar}
                helperText={errors.typeCar ? errors.typeCar.message : ''}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="outlined" onClick={() => setOpen(false)}>סגור</Button>
            <Button type="submit" variant="contained" color="primary">להוסיף רכב</Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};


