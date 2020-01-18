import React from 'react';
import DoneItem from './DoneItem'
import styles from './DoneItemsList.module.css';

const DoneItemsList = (props) => {
const { items } = props;
    return(
        <div className={styles.mainDiv} style={{ overflow: "scroll", maxHeight: "500px" }}>
        {
            items.map((item, index) => {
                return (
                    <DoneItem key={index} title={item.item} />
                )
            })
        }
        
    </div>
    )
    
}

export default DoneItemsList;