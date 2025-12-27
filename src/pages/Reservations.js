import React from 'react';
import './Reservations.css';
import BookingForm from '../components/BookingForm';

const Reservations = () => {
  return (
    <main className="reservations-page">
      <div className="reservations-container">
        <h1>Reservation</h1>
        <BookingForm />
      </div>
    </main>
  );
};

export default Reservations;
