export const addUser = (user) => {
    return { type: 'ADD_USER', payload: user }
}
// מחיקת מוצר
export const removeCar = (id) => {
    return { type: 'REMOVE_CAR', payload: id }
}
export const updateCar = (id,car) => {
    return { type: 'APDATE_CAR', payload: id ,object:car}
}
// הצבת היוזר הנוכחי
export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}

export const setCurrentCars = () => {
    return { type: 'SET_CURRENT_CARS' }
}

export const setCurrentCarsFirst = (cars) => {
    return { type: 'SET_CURRENT_CARS_FIRST', payload: cars }
  }
  
export const addRental = (Rental) => {
    return { type: 'ADD_RENTAL', payload: Rental }
}

export const setCarProp = (car) => {
    return { type: 'SER_CAR_PROP', payload: car }
}
export const setSelectedCar = (car) => {
    return { type: 'SET_SELECTED_CAR', payload: car }
}
//////////////////////////
export const setUsers = (Users) => {
    return { type: 'SET_USERS', payload: Users }
}
export const setCar = (Car) => {
    return { type: 'SET_SELECTED_CAR', payload: Car }
}
export const setLends = (rentals) => {
    return { type: 'SET_LENDS', payload: rentals }
}
export const setReturns= (returns) => {
    return { type: 'SET_RETURNS', payload: returns }
}

