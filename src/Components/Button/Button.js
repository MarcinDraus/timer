
import styles from './Button.module.scss';
import React from 'react';

const Button = (props) => {
  return <button className={styles.button} onClick={props.onClick}>{props.children}</button>;
};

export default Button;
