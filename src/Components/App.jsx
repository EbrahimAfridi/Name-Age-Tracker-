import '../Styles/App.css'
import AddUser from "./User/AddUser.jsx";
import UsersList from "./User/UsersList.jsx";
import React, {useState} from "react";

const App = () => {
    const [usersList,setUsersList] = useState([]);
    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUserList) => {
            return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString() }];
        });
    }
    return (
        <div className="App">
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    );
};

export default App
