import React, { Fragment } from 'react';
import styles from './Input.module.css'

const Input = (props) => {
    const { onChange, value } = props;
    return(
        <Fragment>
            <input className={styles.mainInput} type="search" value={value} onChange={onChange} />
        </Fragment>
    )
}

export default Input;



