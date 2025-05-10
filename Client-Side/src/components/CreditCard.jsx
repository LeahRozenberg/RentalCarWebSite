import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  TextField,
  Button,
  CardActions,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { CreditCard as CreditCardIcon } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Toast } from "primereact/toast";
import { useLocation, useNavigate } from "react-router";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, setUsers } from "../redux/Actions";
import port, { postUser } from "../redux/api";
import axios from "axios";

export const CreditCard = () => {
  const toast = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(state => state.currentUser)
  const users = useSelector(state => state.users)
  let location = useLocation()
  const schema = Yup.object().shape({
    creditNumber: Yup.string()
      .required("מספר כרטיס הוא שדה חובה")
      .matches(/^\d{16}$/, "מספר כרטיס חייב להכיל 16 ספרות"),
    expirationDate: Yup.date()
      .required("תאריך תפוגה הוא שדה חובה"),
    // .matches(
    //   /^(0[1-9]|1[0-2])\/\d{2}$/,
    //   "תאריך תפוגה חייב להיות בפורמט MM/YY"
    // ),
    cvv: Yup.string()
      .required("CVV הוא שדה חובה")
      .matches(/^\d{3}$/, "CVV חייב להכיל 3 ספרות"),
  });

  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), });
  console.log(user)
  const onSubmit = (data) => {
    const NewUser = {
      ...location.state.data,
      ...data,
      userTypeId: '1'
    }

    if (!user.creditNumber) {
      axios.post(`${port}/User`, NewUser).then(() => {
        axios.post(`${port}/User/GetUser?password=${NewUser.password}`).then((res) => {
          dispatch(setCurrentUser(res.data))
          toast.current.show({
            severity: "success",
            summary: "הצלחה",
            detail: "WELCOM",
            life: 3000,
          })
          setTimeout(() => {
            navigate("/VehicleMenu");
          }, 3000);
        })

      })
        .catch(() => {
          toast.current.show({
            severity: "error",
            summary: "שגיאה",
            detail: "אירעה שגיאה בהוספת הכרטיס.",
            life: 3000,
          });
        })
    }
    else {

      toast.current.show({
        severity: "success",
        summary: "הצלחה",
        detail: "WELCOM",
        life: 3000,
      })
      setTimeout(() => {
        navigate("/VehicleMenu");
      }, 3000);
    }


  }


  return <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 0,
        boxShadow: 3,
        maxWidth: 400,
        mx: "auto",
        my: 5,
        p: 3,
      }}
    >
      <Card sx={{ width: "100%", p: 2 }} variant="outlined">
        <Typography variant="h5" textAlign="center" gutterBottom>
          הוסף כרטיס אשראי
        </Typography>

        <Divider sx={{ my: 2 }} />

        <CardContent >
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>

            <TextField
              label="מספר כרטיס"
              {...register("creditNumber")}
              defaultValue={user.creditNumber ? user.creditNumber : ''}
              error={!!errors.creditNumber}
              helperText={errors.creditNumber?.message}
              InputProps={{
                endAdornment: <CreditCardIcon />,
              }}
              fullWidth
              sx={{ mb: 2 }}
            />

            
            <TextField
              label="תאריך תפוגה (MM/YY)"
              defaultValue={user.creditNumber ?user.expirationDate : ''}
              type="date"
              {...register("expirationDate")}
              error={!!errors.expirationDate}
              helperText={errors.expirationDate?.message}
              fullWidth
              sx={{ mb: 2 }}
            />

            <TextField
              label="CVV"
              defaultValue={user.creditNumber ? user.cvv : ''}
              {...register("cvv")}
              error={!!errors.cvv}
              helperText={errors.cvv?.message}
              fullWidth
              sx={{ mb: 2 }}
            />

            <FormControlLabel
              control={<Checkbox />}
              label="שמור פרטי כרטיס"
              sx={{ mb: 2 }}
            />


            <CardActions>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 3, borderRadius: 2, backgroundColor: 'red' }}
              >
                הוסף כרטיס
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </Box>
    <Toast ref={toast}></Toast>
  </>
}
