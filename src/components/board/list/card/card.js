import css from './card.module.scss'
import {Button} from '../../../shared/button'
import {useState} from 'react'
import clsx from 'clsx'
import {useNavigate} from "react-router-dom";

export function Card(props) {
    const {formSubmit} = props
	const [values, setValues] = useState({
		title: ''	
	})
   

	const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (values.title) {
			formSubmit(values.title)
		}
	}
	return (
		<form onSubmit={handleSubmit} className={css.form} >
			
            <input 
            className={css.input} 
            id='taskTitle' 
            name='title' 
            type='text' 
            placeholder='Enter task title' 
            onChange={handleChange} 
            value={values.title} />

			<button className={css.submit} type='submit'>Submit</button>
		</form>
	)
}
