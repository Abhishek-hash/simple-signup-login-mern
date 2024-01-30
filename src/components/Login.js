import React, { useState } from 'react'

function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        console.log("submitting the Login form data:", name, password)
        // Simple validation
        if (name === "" || password === "") alert('Please fill the credentials.')
        else {
            const userdetails = {
                name, password
            }
            let result = await fetch('http://localhost:5000/login', {
                method: 'POST',
                body: JSON.stringify(userdetails),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("result before .json()", result);
            result = await result.json()
            console.log("result after .json()", result);

            if (result.success) {
                alert("You are logged in.")

            }
            else {
                alert("User does not exist. Please signup!")
            }
        }

    }

    return (
        <div>
            <h3>Fill the credentials to Login</h3>
            <input
                type='text'
                className='input-box1'
                placeholder='enter name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <br />
            <input
                type='password'
                className='input-box2'
                placeholder='enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button
                onClick={handleSubmit}
                type='button'
            >submit</button>
        </div>
    )
}

export default Login