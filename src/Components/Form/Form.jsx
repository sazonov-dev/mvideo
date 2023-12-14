import React from 'react';
import styles from './Form.module.css';
import Input from "../Input/Input";
import {useNavigate} from "react-router-dom";
import Papa from 'papaparse';
import localforage from 'localforage';

const Form = ({setValidType}) => {
    const navigate = useNavigate();

    const inputHandler = (event) => {
        const file = event.target.files[0]
        const fileType = file.type.split('/')[1];

        if (fileType !== 'csv') {
            return setValidType(false);
        }

        setValidType(true);

        Papa.parse(file, {
            complete: function(results) {
                localforage.setItem('tableData', JSON.stringify(results.data)).then(function() {
                    console.log('Data has been saved to localForage');
                }).catch(function(err) {
                    console.error('Error saving data to localForage:', err);
                });
                navigate('/table');
            },
            header: true
        });
    }

    return (
        <form className={styles.form}>
            <h2>Выберите файл в формате CSV</h2>
            <Input onInput={inputHandler}/>
        </form>
    );
};

export default Form;
