import React, { useState } from 'react'

function SignUp() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        console.log("submitting the signup form data:", name, password)
        // Simple validation
        if (name === "" || password === "") alert('Please fill the credentials.')
        else {
            const userdetails = {
                name, password
            }
            let result = await fetch('http://localhost:5000/register', {
                method: 'POST',
                body: JSON.stringify(userdetails),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("result before .json()", result);
            result = await result.json()
            console.log(console.log("result after .json()", result), result);  

        }


    }

    return (
        <div>
            <h3>Fill the credentials to signup</h3>
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

export default SignUp