import React from 'react';
import './Balance.css';
export default props => {
    const classes = `cmw-balance cmw-balance-w-${props.width || 50} cmw-balance-h-${props.height || 50}`;
    return (
        <div className={classes}>{props.children}</div>
    );
}