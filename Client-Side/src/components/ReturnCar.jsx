import { useDispatch, useSelector } from "react-redux";
import { setCurrentCarsFirst, setReturns } from "../redux/Actions";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { differenceInDays } from "date-fns";
export const ReturnCar = ({ isOpen, onClose }) => {
    let nav = useNavigate()
    const user = useSelector(state => state.currentUser)
    const lends = useSelector(state => state.lends)
    const car = useSelector(state => state.selectedCar)
    const returns = useSelector(state => state.returns)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const setReturn = (data) => {
        let date = new Date()
        let v=parseInt(data.retCode)/12345;
        
        let theLend= lends&& lends.find(x => x.id == v)
        const ret = {
            rentalId: theLend && theLend.id,
            date: date,
            balance: data.balance,
            id: returns && returns.find(r=>theLend && r.rentalId==theLend?.id).id,
            totalPayable: (((car.pricePerHour) * (differenceInDays(theLend?.date , date))) + (car.balance - data.balance) * 3.5),
            paid: true
        }

        const updatedCar = { ...car, available: true, balance: data.balance };
        axios.put(`https://localhost:7052/api/Bac?id=${ret.id}`, ret)
            .then((response) => {
                dispatch(setReturns(response.data))
                axios.put(`https://localhost:7052/api/Car?id=${updatedCar.id}`, updatedCar)
                    .then((response) => {
                        axios.get(`https://localhost:7052/api/Car`)
                            .then((response) => {
                                dispatch(setCurrentCarsFirst(response.data))
                            })
                        axios.get(`https://localhost:7052/api/Bac`)
                            .then((response) => {
                                dispatch(setReturns(response.data))
                                nav('/VehicleMenu')
                            })
                    })
            })

            .catch(error => {
                console.error(".............", error);
            });

    }

    return <>
        <form onSubmit={handleSubmit(setReturn)} style={{ width: "100%" }}>
            <TextField
                label="קוד החזרה"
                variant="outlined"
                type="number"
                fullWidth
                margin="normal"
                {...register("retCode", { required: "תוכל להחזיר עי קוד החזרה" })}
                error={!!errors.retCode}
                helperText={errors.name?.message}
            />

            <TextField
                label=" דלק "
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("balance", { required: "" })}
                error={!!errors.balance}
                helperText={errors.balance?.message}
            />
        
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 3, borderRadius: 2, backgroundColor: 'red' }}
            >
                להמשך רישום
            </Button>
        </form>
    </>
};