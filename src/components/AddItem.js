import React from 'react';
import Input from './Input'
import SelectInput from './SelectInput'
import Button from './Button'
import styles from './AddItem.module.css'


const AddItem = (props) => {
    const { item, value, handleChange, handleSubmit, handleSelectChange } = props;
    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
            <Input onChange={handleChange} value={item}/>
            <SelectInput value={value} handleSelectChange={handleSelectChange}/>
            <Button />
            </form>
        </div>
    )
}

export default AddItem;

