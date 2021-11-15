import React from 'react';

function MyButton(props) {
    return (<div>
        <button className="button" onClick={props.onClick} type={props.type}>{props.name} </button>
    </div>
    );
}
export default MyButton;