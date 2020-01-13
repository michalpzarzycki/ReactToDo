import React from 'react';
import Input from './Input'
import Button from './Button'
import styles from './AddItem.module.css'


const AddItem = () => {
    return (
        <div className={styles.mainDiv}>
            <form>
            <Input />
            <Button />
            </form>
        </div>
    )
}

export default AddItem;

