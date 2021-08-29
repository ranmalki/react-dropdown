import React from 'react';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import DropdownButton from './DropdownButton/DropdownButton';

function Dropdown(props) {
    return (
        <div>
            <DropdownButton />
            <DropdownMenu />
        </div>
    );
}

export default Dropdown;