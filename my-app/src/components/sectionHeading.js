import React from 'react';
import './styles.css';

const sectionHeading = (props) => {
    return (
        <div className = "heading">
            {props.name}
        </div>
    );
}

export default sectionHeading;