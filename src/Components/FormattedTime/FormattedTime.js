// FormattedTime.js
import React from 'react';
import styles from './FormattedTime.module.scss';
//import AppDuble from '../AppDuble/AppDuble';


const FormattedTime = ({ time }) => {
  const formatTime = (milliseconds) => {
    const hours = Math.floor(milliseconds / (60 * 60 * 1000)).toString().padStart(2, '0');
    const minutes = Math.floor((milliseconds / (60 * 1000)) % 60).toString().padStart(2, '0');
    const seconds = Math.floor((milliseconds / 1000) % 60).toString().padStart(2, '0');
    const millisecondsFormatted = (milliseconds % 1000).toString().padStart(1, '0');
    return `${hours}:${minutes}:${seconds}.${millisecondsFormatted}`;
    
  };

  return (
    <div className={styles.searchForm}>
      {formatTime(time)}
    </div>
  );
};

export default FormattedTime;
