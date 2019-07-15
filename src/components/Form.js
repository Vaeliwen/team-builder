import React, {useState, useEffect} from 'react';

export const Form = (props) => {
    const [member, setMember] = useState({name: '', email: '', role: '', key: 0})

    const handleChange = event => {
        setMember({...member, [event.target.name]: event.target.value, key: Math.random()})
    }

    const submitHandler = (event, member) => {
        event.preventDefault();
        console.log(member.name)
        console.log(member.email)
        console.log(member.role)
        props.updateMembers(member)
    }

    useEffect(
        console.log(props.memberToEdit)
    , [props.memberToEdit])

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