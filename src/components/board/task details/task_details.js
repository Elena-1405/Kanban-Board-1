import css from './task_details.module.scss'
import { useNavigate, useParams, useLocation,useMatch, Link } from 'react-router-dom'
import {Button} from '../../shared/button/button.js'
import {useEffect, useState} from "react";
import {createContext,useContext} from "react";
import remove from '../../shared/icons/icon-remove.svg'



export const TaskDetails = props => {

    const { path, taskId } = useLocation()
    const { tasks, setTasks } = props
    const task = tasks.find(task => path === taskId)
    console.log(taskId)

    const [values, setValues] = useState({
       description: task.description
    })

    const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}
    
    const saveDescription = () => {
        task.description = values.description
        setTasks([...tasks])
    }

    const navigate = useNavigate();
        const navigateBack = () => navigate(-1);

        return (
            <div className={css.wrapper}>
                
                    
                    <Button className={css.btnClose} onClick={navigateBack}>
                        <img src={remove} 
                       alt="remove"/></Button>
                <div className={css.title}>{task.title}</div>
    
                <textarea className={css.description} name='description'  
                type='text' value={values.description} 
                onChange={handleChange} 
                placeholder='No description yet'/>
                <button className={css.btnSave} onClick={() => {saveDescription(); navigateBack();}}>Save</button>
            </div>
        )
    }
    



    

//    const params = useMatch();

//     const {path} = params.taskId
// //console.log(params)
// const {tasks} = props
//  const task = tasks.find(task => task.id === path)

// // useEffect(() => {

// // }, []
// // )
    
//     const navigate = useNavigate();
//     const navigateBack = () => navigate(-1);

//     return (
//         <div className={css.wrapper}>
//             <div className={css.header}>
//                 <h2 className={css.title}>{task.title}</h2>
//                 <div className={css.status}>{taskId} </div>
//             </div>

//             <Button className={css['button-remove']} onClick={navigateBack}>
//             <img src={require('/Users/a1/kanban-board/src/components/shared/icon-remove.svg').default}
//             height={16} width={15} alt="remove"/>
//             </Button>
//             <div className={css.footer}>
//                 <button className={css.save} onClick={() => {
                    
//                     navigateBack();
//                 }}>Save Card</button>
//             </div>

//         </div>
//     )
// }
// NavLink to='/tasks/:taskId' isActive={() => true

