import React from 'react';
import Item from './Item';
import styles from './ItemsList.module.css'

const ItemsList = (props) => {
    const { items, deleteAllList, itemDelete, itemDone } = props;

    return(
        <div className={styles.mainDiv} style={{ overflow: "scroll", maxHeight: "500px" }}>
            {
                items.map((item, index) => {
                    return (
                        <Item key={index} item={item.item} id={item.id} date={item.date} value={item.value} deadline={item.deadline} itemDelete={() => itemDelete(item.id)} itemDone={()=> itemDone(item.id)}/>
                    )
                })
            }
            <Item />
        </div>
    )
}

export default ItemsList;
