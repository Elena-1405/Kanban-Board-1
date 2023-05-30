import css from './main.module.scss'
import { Board } from '../board/board/board'
import { Routes, Route} from 'react-router-dom'
import { TaskDetails } from '/Users/a1/kanban-board/src/components/board/task details/task_details.js'


export const Main = props => {
    
    return (
        <main className={css.main}>
            <Routes>
                <Route exact path='/' element={<Board {...props}/>}/>
                <Route path={'/tasks/:taskId'} element={<TaskDetails {...props}/>}/>       
            </Routes>
        </main>
        
    )
}
