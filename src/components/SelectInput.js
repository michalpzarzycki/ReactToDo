import React from 'react';
import styles from './SelectInput.module.css'

const SelectInput = (props) => {

    const { value, handleSelectChange} = props;

    return(
     
            <select className={styles.mainSelect} value={value} onChange={handleSelectChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>

    )
}

export default SelectInput