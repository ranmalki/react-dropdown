import { useContext, useEffect } from 'react';
import { UserContext } from '../user-context';
import './DropdownButton.scss';

function DropdownButton(props) {

    const {isShown, setIsShown} = useContext(UserContext);
    
    useEffect(() => {
        document.addEventListener('click', () => {
            setIsShown(false);
        });
    }, []);

    const clickHandler = (e) => {
        e.stopPropagation();
        setIsShown(!isShown)
    }

    return (
        <div>
            <button className="button" onClick={clickHandler}>Dropdown button</button>
        </div>
    );
}

export default DropdownButton;