import React from 'react';
import styles from './PushModal.module.css';

const PushModal = (props) => {
    return (
        <div className={styles.push}>
            {props.children}
        </div>
    );
};

export default PushModal;
