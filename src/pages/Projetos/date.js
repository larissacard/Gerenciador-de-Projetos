import React, { useState } from 'react';
import Calendar from 'react-calendar';  
import 'react-calendar/dist/Calendar.css';

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
   <Calendar onChange={onChange}/>
    
  );
}

export default MyApp;