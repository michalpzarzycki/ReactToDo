import React from 'react';
import Item from './Item';
import DoneItem from './DoneItem'
import styles from './ItemsList.module.css'

const ItemsList = (props) => {
    const { items, deleteAllList, itemDelete, type } = props;

    return(
        <div className={styles.mainDiv} style={{ overflow: "scroll", maxHeight: "500px" }}>
            {
                items.map((item, index) => {
                
                        if(type=="item"){
                        return(
                        <Item key={index} item={item.item} id={item.id} date={item.date} value={item.value} deadline={item.deadline} itemDelete={() => itemDelete(item.id)} />) 
                        } else {
                            return(
                            <DoneItem key={index} item={item}/>
                            )
                        }
                    
                })
            }
            <Item />
        </div>
    )
}

export default ItemsList;
