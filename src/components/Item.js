import React from 'react'
import styles from './Item.module.css'

const Item = () => {
    return (


        <div className={styles.mainDiv}>
            <div className={styles.taskDiv}>ITEM</div>
            <div className={styles.datesDiv}>
                <div>Data dodanie: DATE</div>
                <div>Deadline:DEADLINE</div>
            </div>
            <div className={styles.rateDiv}>VALUE</div>
            <div className={styles.btnsDiv}>
                <div className={styles.leftBtns}>
                    <button>DELETE</button>
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