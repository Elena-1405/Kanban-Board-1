import css from './profile.module.scss'
import { useState } from 'react'
import arrowUp  from '../../shared/icons/arrow-up.svg'
import arrowDown from '../../shared/icons/arrow-down.svg'
import imgProfile from '../../shared/icons/user-avatar.svg'

export const Profile = () => {

    const [isMenuShown, setMenuShown] = useState(false);
    

    return(
        <div className={css.profile}
        onClick={() => setMenuShown(!isMenuShown)}>
            
           <img className={css.avatar} src={ imgProfile }/>

        <button className={css.button}>
            {isMenuShown ? <img src={arrowUp} /> : <img src={arrowDown} />}
        </button>

        {isMenuShown && <div className={css.menu}>
            <div>Profile</div>
            <div>Log</div>
            </div>
            }
        
        </div>
    )
}