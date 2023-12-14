import React, {useEffect, useState} from 'react';
import styles from './General.module.css';
import Form from "../Form/Form";
import PushModal from "../PushModal/PushModal";
import {useNavigate} from "react-router-dom";
import localforage from "localforage";

const General = () => {
    const [validType, setValidType] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        localforage.getItem('tableData').then(function(value) {
            if (value.length > 1) {
                return navigate('/table')
            }
        }).catch(function(err) {
            console.error('Error retrieving data from localForage:', err);
        });
    }, [])

    return (
        <div className={styles.general}>
            {!validType ? <PushModal>Неправильный формат файла, разрешены только файлы .CSV</PushModal> : null}
            <Form setValidType={setValidType}/>
        </div>
    );
};

export default General;
