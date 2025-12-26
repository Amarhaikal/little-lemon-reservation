import React from 'react';
import './Reservations.css';
import ReservationForm from '../components/ReservationForm';

const Reservations = () => {
  return (
    <main className="reservations-page">
      <div className="reservations-container">
        <h1>Reservation</h1>
        <ReservationForm />
      </div>
    </main>
  );
};

export default Reservations;
