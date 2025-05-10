import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CarCard} from './CarCard';
import { Search } from './Search';
import axios from 'axios';
import { setCurrentCarsFirst } from '../redux/Actions';
import { Outlet } from 'react-router';

export const VehicleMenu = () => {
  const dispatch = useDispatch();
  const listCarCards = useSelector(state => state.currentCars);

  const [filteredCars, setFilteredCars] = useState(listCarCards);
  const [filters, setFilters] = useState({ city: '', company: '', driveType: '', description: '' });


  useEffect(() => {
    axios.get('https://localhost:7052/api/car')
      .then(response => {
        dispatch(setCurrentCarsFirst(response.data));
        setFilteredCars(response.data);
      })
      .catch(error => {
       
      });
  }, [dispatch]);

  
  useEffect(() => {
    const applyFilters = () => {
      let newFilteredCars = listCarCards
      Object.keys(filters).forEach(key => {
        if (filters[key]) {
            newFilteredCars = newFilteredCars.filter(car =>
            car[key]?.toLowerCase() === filters[key].toLowerCase()
          );
        }
      });

      setFilteredCars(newFilteredCars);
    };
    applyFilters();
  }, [filters,listCarCards]);

 
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
console.log(filteredCars);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginBlock: '10px' }}>
        <Search
          text="עיר"
          options={[...new Set(listCarCards&& listCarCards.map(car => car.city))]}
          onChange={value => handleFilterChange('city', value)}
        />
        <Search
          text="חברה"
          options={[...new Set(listCarCards&& listCarCards.map(car => car.company))]} 
          onChange={value => handleFilterChange('company', value)}
        />
        <Search
          text="סוג הנעה"
          options={[...new Set(listCarCards&&listCarCards.map(car => car.driveType))]} 
          onChange={value => handleFilterChange('driveType', value)}
        />
        <Search
          text="דגם"
          options={[...new Set(listCarCards&&listCarCards.map(car => car.description))]} 
          onChange={value => handleFilterChange('description', value)}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {filteredCars.map((car, index) => (
          <CarCard car={car} type={1} />
        ))}
      </div>

    </>
  );
};
