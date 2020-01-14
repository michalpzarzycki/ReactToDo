import React from 'react';
import Input from './Input'
import Button from './Button'
import styles from './AddItem.module.css'


const AddItem = (props) => {
    const { item, handleChange, handleSubmit } = props;
    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
            <Input onChange={handleChange} value={item}/>
            <Button />
            </form>
        </div>
    )
}

export default AddItem;

