
import React, { useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import {Button} from '@mui/material';
import { Toast } from 'primereact/toast'; 
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../style/Style.css'
import { Margin } from '@mui/icons-material';
import { Outlet, useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, setLends, setReturns } from '../redux/Actions';
import { getUser } from '../redux/api';
import axios from 'axios';
import { Box } from '@mui/material';

export const Register = () => {
  const dispatch = useDispatch()


  
  useEffect(() => {
    axios.get(`https://localhost:7052/api/Rental`).then((response) => {
      dispatch(setLends(response.data))
  })
  axios.get(`https://localhost:7052/api/Bac`).then((response) => {
      dispatch(setReturns(response.data))
  })
    
  }, []);
  let nav = useNavigate()
  const list = useSelector(state => state.users)
  const schema = yup.object().shape({
    name: yup.string().required('שם הינו שדה חובה'),
    password: yup.string().required('סיסמא נדרשת')
  })
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
  const toast = useRef(null);
  const [v, setV] = useState(false)
  const onSubmit = (data) => {
    axios.post(`https://localhost:7052/api/User/GetUser?password=${data.password}`).then((res) => {
      console.log(res.data);
      
      dispatch(setCurrentUser(res.data))
      nav('/VehicleMenu')
       
    }).catch(() => {
      console.log(v)
      toast.current.show({
        severity: 'error',  // הודעת הצלחה
        summary: 'משתמש אינו רשום במערכת',
        detail: 'לא ניתן להתחבר למערכת ללא רישום למערכת',
        life:1000,  // הזמן שההודעה תישאר
      })
    }
    )

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
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor={'name'}>שם פרטי:</label><br></br>
      <InputText id={'name'} type={'text'} {...register('name', { required: "שם הינו שדה חובה" })} ></InputText>
      <br></br>
      {errors.name && <small style={{ color: 'red', margin: '5px' }}>{errors.name.message}</small>}
      <br></br>
      <label htmlFor={'password'}>סיסמא:</label><br></br>
      <InputText id={'password'} type={'password'} {...register('password', { required: 'סיסמא נדרשת' })}></InputText>
      <br></br>
      {errors.password && <small style={{ color: 'red' }}>{errors.password.message}</small>}
      <br></br>
      <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3, borderRadius: 2 ,backgroundColor:'red'}}
        >
          התחברות 
        </Button>
      <br></br>
    </form>
    </Box>
   <Toast ref={toast} position="top-center" />
    {{ v } && <Outlet></Outlet>}
    
  </>


}


