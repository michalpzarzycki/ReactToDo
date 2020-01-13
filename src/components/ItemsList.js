import React from 'react';
import Item from './Item';
import styles from './ItemsList.module.css'

const ItemsList = () => {
    return(
        <div className={styles.mainDiv}>
            <Item />
            <Item />
        </div>
    )
}

export default ItemsList;