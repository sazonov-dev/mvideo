import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
    return (
        <div className={styles.customFileInput}>
            <input type="file" id="fileInput" className={styles.inputFile} onInput={props.onInput}/>
            <label htmlFor="fileInput" className={styles.label}>Выберите файл</label>
        </div>
    );
};

export default Input;
