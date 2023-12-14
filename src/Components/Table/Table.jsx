import React, {useEffect, useState} from 'react';
import styles from './Table.module.css';
import localforage from "localforage";
import Button from "../Button/Button";

const Table = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        localforage.getItem('tableData').then(function(value) {
            console.log('Retrieved data from localForage:', value);
            setUsers(JSON.parse(value));
        }).catch(function(err) {
            console.error('Error retrieving data from localForage:', err);
        });
    }, [])


    return (
        <div className={styles.table}>
            <Button/>
            <div className={styles.grid}>
                <div className={styles.gridLine}>
                    <span className={styles.thead}>Имя</span>
                    <span className={styles.thead}>Номер телефона</span>
                    <span className={styles.thead}>email</span>
                    <span className={styles.thead}>Дата рождения</span>
                    <span className={styles.thead}>Адрес</span>
                </div>
                {!users ? null : users.map((user, i) => (
                    <div className={styles.gridLine} key={i}>
                        <span className={styles.thead}>{user.name}</span>
                        <span className={styles.thead}>{user.phone}</span>
                        <span className={styles.thead}>{user.email}</span>
                        <span className={styles.thead}>{user.bday}</span>
                        <span className={styles.thead}>{user.address}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;
