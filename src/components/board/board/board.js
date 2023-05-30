import  { List } from '../list/list'
import css from '../board/board.module.scss'
import { LIST_TYPES, LIST_COPY } from '../../../config'
import uniqid from 'uniqid'

export const Board = (props) => {
    const {tasks, setTasks} = props;

    const addNewTask = (title, description) => {
        const task = {
            id: uniqid(),
            title: title,
            description: description,
            status: LIST_TYPES.BACKLOG,
        }
        setTasks([...tasks, task])
    }
    
   return (
        <div className={css.board}>
            {Object.values(LIST_TYPES).map(type=> {
                const listTasks = tasks.filter(task => task.status === type)
                return (
                   <List 
                   key={type} 
                   type={type} 
                   title={LIST_COPY[type]} 
                   tasks={listTasks  || []} 
                   addNewTask={addNewTask}
                   noFiltredTasks={tasks}
                    setTasks={setTasks}/> 
                )
            })} 
        </div>
   ) 
}