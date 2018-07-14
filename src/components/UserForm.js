import React from 'react';

const UserForm = () => {
    return (
        <form>
            <input type="text" name="username" style={{ margin: "20px auto", display: "block" }}/>
            <button>Submit</button>
        </form>
    )
}

export default UserForm;