import Scrollbars from 'react-custom-scrollbars-2'
import { Card } from './card/card' 
import css from './list.module.scss'
import { Button } from '/Users/a1/kanban-board/src/components/shared/button.js'
import { useState } from 'react'
import { LIST_TYPES, LIST_COPY } from '/Users/a1/kanban-board/src/config.js'
import { Link } from 'react-router-dom'
import {addNewTask} from '/Users/a1/kanban-board/src/components/board/list/card/card.js'
import { Select } from '/Users/a1/kanban-board/src/components/select/select.js'

export function List(props){
    const {title, type, tasks, task, addNewTask, noFiltredTasks, setTasks} = props
    const [isFormVisible, setFormVisible] = useState(false)
    const [isSelectVisible, setisSelectVisible] = useState(false)

    const handleClick = () =>{
        setFormVisible(!isFormVisible)
    }

    const formSubmit = (title) => {
		addNewTask(title)
		setFormVisible(false)
	}

    const handleSelectVisible = () => {
        setisSelectVisible(!isSelectVisible)
    }

    const taskRemove = (e) => {
        console.log(e.target.value)
        const findTask = noFiltredTasks.find(task => task.id === e.target.value)
        if (findTask) {
            setTasks([...noFiltredTasks.filter(task => task !== findTask)])
        }
    }

    return (
        <div className={css.column}>
            <div className={css.header}>{title}</div>
                <div className={css.wrapper}>
                    <div className={css.body}>
                    
                    <Scrollbars autoHeightMax={400} autoHide autoHeight>
                        {tasks.map(task => {
                            return(
                                <div className={css.card}>
                                <Link to='/tasks/${task.id}' className={css.link}>
                                <p key={task.id} className={css.title}>
                            {task.title}</p></Link>
                            <Button className={css['button-remove']} onClick={taskRemove}>
                        <img src={require('/Users/a1/kanban-board/src/components/shared/icon-remove.svg').default} 
                        height={14} width={15} alt="remove"/>
                        </Button>
                           </div>
                           
                            )  
                           }
                           )     
                        }
                       </Scrollbars>  
                    
                    </div>
                    <div className={css.footer}>
                        
                        {type === LIST_TYPES.BACKLOG && isFormVisible && (
                            <Card formSubmit={formSubmit} />
                        )}
                        {type === LIST_TYPES.BACKLOG && (
                            <button className={css.button} onClick={handleClick}>+ Add card</button>)}


                    <div className={css.selectCard}>
                    {type !== LIST_TYPES.BACKLOG && isSelectVisible && (
                        <Select {...props}  handleSelectVisible={handleSelectVisible}/>
                        )}

                    {type !== LIST_TYPES.BACKLOG && 
                    <button  className={css.button} onClick={handleSelectVisible}> + Add card </button>
                }

                        
                    </div> 
                </div> 
        </div>
        </div>
    )}
