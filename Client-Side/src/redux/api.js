// //////user///////
import axios from "axios";
const port=''

export const postUser=(user)=>{
    return axios.post(`${port}/User`,user)
}
export const getUser=()=>{
  return axios.get(`${port}/User`)
}
export const putUser=(user)=>{
    return axios.post(`${port}/User`,user)
}
export const deleteUser=(id)=>{
  return axios.delete(`${port}/User?id=${id}`)
}
// //////cars//////
export const postCar=(user)=>{
    return axios.post(`${port}/car`,user)
}
export const updateCar=(car,id)=>{
    return axios.put(`${port}/car?id=${id}`,car)
}
export const deleteCar=(id)=>{
    return axios.delete(`${port}/car?id=${id}`)
}
export const getCars=()=>{
    return axios.get(`${port}/car`)
}

export const addCar=(car)=>{
  return axios.post(`${port}/car`,car)
}

///rentals////
export const postRental=(rental)=>{
    return axios.post(`${port}/Rental`,rental)
}
export const deleteRental=(id)=>{
  return axios.delete(`${port}/Rental`,id)
}
export const getRental=(id)=>{
  return axios.get(`${port}/Rental`)
}

const fetchCarRentals = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/');
    console.log(response.data); 
  } catch (error) {
    console.error('Error fetching car rentals:', error);
  }
};
export default port
