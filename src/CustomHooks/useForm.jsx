import { useState } from 'react'

const typeValidade = {
	email: {
		regex:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		,
		message: 'Parece que seu e-mail esta incorreto, digite um e-mail valido.'
	}
}

const useForm = (type) => {
	const [value, setValue] = useState('')
	const [error, setError] = useState(null)
  

	const validadeField =(valueField) =>{
		if (type === false) return true

		if (valueField.length === 0) {
			setError('Esse campo não pode ficar vazio')
			return false
		}

		else if (typeValidade[type] && !typeValidade[type].regex.test(valueField)) {
			setError(typeValidade[type].message) // pego o tipo de input e seto a message de acordo com meus TypesValidade
			return false
		}

		else {
			setError(null)
			return true
		}
	}

	const onChangeFc = ({target}) => {
		if(error) validadeField(target.value) // comeco a validar somente se ja tiver erro na tela
		setValue(target.value)
	}
  
	return {
		value,
		setValue,
		onChangeFc,
		error,
		validadeField: () => validadeField(value), // exportando como um metodo que ativa outro metodo, para evitar no local que sera usado ter de passar o state ma chamada da funcao ex: username.validadeField(username), agora posso simplesmente username.validadeField()
		onBlurFc: () => validadeField(value) // quando usuario sair do campo ja realizo a validacao 
	}
}

export default useForm