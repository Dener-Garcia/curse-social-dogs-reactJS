import React from 'react'
import styles from './input.module.css'

const Input = ({label, textLabel, type, name, value}) => {
	return(
		<div className={styles.wrapper}>
			<label className={styles.label} htmlFor={label}>{textLabel}</label>
			<input className={styles.input}
				type={type}
				id={name}
				name={name}
				value={value}
			/>
			<span className={styles.error}>Erro</span>
		</div>
	)
}

export default Input
