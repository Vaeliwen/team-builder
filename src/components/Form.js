import React, {useState} from 'react';

export const Form = (props) => {
    const [member, setMember] = useState({name: '', email: '', role: ''})

    const handleChange = event => {
        setMember({...member, [event.target.name]: event.target.value})
    }

    const submitHandler = (event, member) => {
        event.preventDefault();
        console.log(member.name)
        console.log(member.email)
        console.log(member.role)
        props.updateMembers(member)
    }

    return(
        <form onSubmit={event => submitHandler(event, member)}>
            <label>
                Name: <input name='name' placeholder='Name' type='text' onChange={event => handleChange(event)} />
            </label>
            <label>
                Email: <input name='email' placeholder='E-Mail' type='text' onChange={event => handleChange(event)} />
            </label>
            <label>
                Role: <input name='role' placeholder='Team Role' type='text' onChange={event => handleChange(event)} />
            </label>
            <button type='submit'>Submit!</button>
        </form>
    )
}