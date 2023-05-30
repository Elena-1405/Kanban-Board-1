import css from './header.module.scss'
import { Profile } from '/Users/a1/kanban-board/src/components/header/profile/profile.js'

export const Header =() => {
    return (
        <header className={css.header}>
            <h1>Kanban Board</h1>
            <Profile /> 

        </header>
    )
}
