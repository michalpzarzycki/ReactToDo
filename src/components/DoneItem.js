import React from 'react';
import styles from './DoneItem.module.css';

const DoneItem = (props) => {
const { title } = props;
    return(
        <div>{ title }</div>
    )
}

export default DoneItem;