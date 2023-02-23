import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import UsersList from "./UsersList.jsx";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const UsernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const AgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };
    const addUserHandler = (event) => {
       event.preventDefault();
       if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
           return;
       }
       props.onAddUser(enteredUsername, enteredAge);
       setEnteredUsername('');
       setEnteredAge('');1
   };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'> Username </label>
                <input id='username' type="text" value={enteredUsername} onChange={UsernameChangeHandler}/>
                <label htmlFor='age'> Age </label>
                <input type="number" min='0' value={enteredAge} onChange={AgeChangeHandler}/>
                <Button type='submit'> Add User </Button>
            </form>
        </Card>
    )
};

export default AddUser;