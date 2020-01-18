import React, { Fragment } from 'react';
import styles from './Button.module.css'

const Button = () => {
    return(
        <Fragment>
            <button className={styles.mainBtn} type="submit">ADD</button>
        </Fragment>
    )
}

export default Button;