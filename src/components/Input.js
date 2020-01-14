import React, { Fragment } from 'react';

const Input = (props) => {
    const { onChange, value } = props;
    return(
        <Fragment>
            <input type="search" value={value} onChange={onChange} />
        </Fragment>
    )
}

export default Input;



