import React from 'react'
import styles from './input.module.css'

const Input = ({label, textLabel, type, name, value, onChangeFc, error, onBlurFc}) => {
	console.log(value)
	return(
		<div className={styles.wrapper}>
			<label className={styles.label} htmlFor={label}>{textLabel}</label>
			<input className={styles.input}
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChangeFc}
				onBlur={onBlurFc}
			/>
			{error && <span className={styles.error}>{error}</span>}
		</div>
	)
}

export default Input
