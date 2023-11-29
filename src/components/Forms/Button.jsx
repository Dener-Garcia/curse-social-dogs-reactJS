import React from 'react'
import styles from './button.module.css'

const Button = ({labelButton, type, ...props}) => {
	return(
		<button {...props} className={styles.button} type={type}>{labelButton}</button>
	)
}

export default Button
