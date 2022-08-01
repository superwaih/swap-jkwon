import React from 'react';
import { useCountdown } from '../hooks/useCountDown';
import DateTimeDisplay from '../components/DateTimeDisplay';
import {useFormContext} from "../FormContext"
import { useNavigate } from 'react-router-dom';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice text-white">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};


const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter text-white flex-col normal gap-3 flex m-auto items-center justify-center ">
      <p className='p-8'>
        Transaction is now confirming. Please monitor your inbox for a confirmation mail from our team!
      </p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const navigate = useNavigate()
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const{setPending} = useFormContext()

  if (days + hours + minutes + seconds <= 0) {
    setPending(false)
   navigate("/")
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
