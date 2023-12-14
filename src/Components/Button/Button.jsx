import React from 'react';
import styles from './Button.module.css';
import {useNavigate} from "react-router-dom";
import localforage from "localforage";

const Button = () => {
    const navigate = useNavigate();

    const reset = () => {
        localforage.removeItem('tableData').then(function() {
            console.log(`Данные с ключом "tableData" успешно удалены из localForage.`);
            navigate('/');
        }).catch(function(err) {
            console.error('Ошибка при удалении данных из localForage:', err);
        });
    }

    return (
        <button className={styles.button} onClick={reset}>Загрузить новый файл</button>
    );
};

export default Button;
