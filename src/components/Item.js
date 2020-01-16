import React from 'react'
import styles from './Item.module.css'

const Item = (props) => {
    const { item, date, itemDelete, value, deadline } = props;

    return (


        <div className={styles.mainDiv}>
            <div className={styles.taskDiv}>{item}</div>
            <div className={styles.datesDiv}>
                <div>Data dodanie: {date}</div>
                <div>Deadline:{deadline}</div>
            </div>
            <div className={styles.rateDiv}>{value}</div>
            <div className={styles.btnsDiv}>
                <div className={styles.leftBtns}>
                    <button onClick={itemDelete}>DELETE</button>
                    <button>EDIT</button>
                </div>
                <div className={styles.rightBtns}>
                    <button>DONE</button>
                </div>
            </div>

        </div>
    )
}

export default Item;