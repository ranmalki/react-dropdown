import { useContext, useState } from 'react';
import { UserContext } from '../user-context';
import DropdownItem from './DropdownItem/DropdownItem';
import './DropdownMenu.scss';


function DropdownMenu(props) {

    const {isShown, setIsShown} = useContext(UserContext);

    return (
        <div>
            {isShown && <div className="menu">
                <DropdownItem name='Action' />
                <DropdownItem name='Another action' />
                <DropdownItem name='Something else' />
            </div>}
        </div>

    );
}

export default DropdownMenu;