import css from './footer.module.scss'
//import {useTasks} from '../../hooks/tasks/use-tasks'

export const Footer =() => {
    //const {getActiveTaskCount, getFinishedTaskCount} = useTasks;

    return (
        <footer className={css.footer}>
            <span>Active tasks: '' </span>
            <span>FinishedTask: ''</span>
        </footer>
    )
}
