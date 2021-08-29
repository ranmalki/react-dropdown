import React from 'react';

function DropdownItem(props) {
    return (
        <div className='item'>
            <li>{props.name}</li>
        </div>
    );
}

export default DropdownItem;