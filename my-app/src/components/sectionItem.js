import React from 'react';
import './styles.css';

const sectionItem = (props) => {
    return(
        <div className = "block">
            <div className = "name">
                {props.name}
            </div>
            <div className = "time">
                {props.time}
            </div>
            <div className = "description">
                {props.description}
            </div>
        </div>
    );
}

export default sectionItem;