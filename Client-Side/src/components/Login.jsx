import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../style/Style.css'
import { Outlet, useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux';
import { getUser, postUser } from '../redux/api';
import { setCurrentUser, addUser } from '../redux/Actions'
import Item from './Item';
import { Box, Typography, TextField, Button } from "@mui/material";
export const Login = () => {
  const user=useSelector(state=>state.currentUser)
  const dispatch = useDispatch()
  let nav = useNavigate()
  const schema = yup.object().shape({
    name: yup.string().required('שם הינו שדה חובה'),
    tz: yup.string().matches(/^\d{9}$/, 'תעודת זהות לא תקנית').required('שם  הינו שדה חובה'),
    //email: yup.string().email('דואר אלקטרוני לא תקני').required('דואר אלקטרוני נדרש'),
    phoneNumber: yup.string().matches(/^05\d{8}$/, 'מספר טלפון לא תקני').required('שם  הינו שדה חובה'),
    password: yup.string().min(6, 'הסיסמא חייבת להיות לפחות 6 תווים').required('סיסמא נדרשת')
  })


  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

  const [submitted, setSubmitted] = useState(false);
  const toast = useRef(null);
  const [v, setV] = useState(false)
  const onSubmit = (data) => {
    setV(true)
    console.log(data)
    nav('/CreditCard', { state: {data} }) 
  }
  return <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white", 
        borderRadius: 2, 
        boxShadow: 3, 
        maxWidth: 400,
        mx: "auto",
        my: 5,
        p: 3,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <TextField
          label="שם פרטי"
          variant="outlined"
          defaultValue={user? user.name:''}
          fullWidth
          margin="normal"
          {...register("name", { required: "שם הינו שדה חובה" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="תעודת זהות"
          variant="outlined"
          defaultValue={user? user.tz:''}
          fullWidth
          margin="normal"
          {...register("tz", { required: "תעודת זהות הינה שדה חובה" })}
          error={!!errors.tz}
          helperText={errors.tz?.message}
        />

        <TextField
          label="מספר טלפון"
          variant="outlined"
          defaultValue={user ? user.phoneNumber:''}
          fullWidth
          margin="normal"
          {...register("phoneNumber", { required: "מספר טלפון הינו שדה חובה" })}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />

        <TextField
          label="סיסמה"
          variant="outlined"
          defaultValue={user? user.password:''}
          fullWidth
          margin="normal"
          type="password"
          {...register("password", { required: "סיסמה נדרשת" })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3, borderRadius: 2 ,backgroundColor:'red'}}
        >
          להמשך רישום
        </Button>
      </form>
    </Box>
  </>
};






