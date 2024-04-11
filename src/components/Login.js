import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

// define login component
function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    // handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        // authenticate the user with firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            // redirect to homepage after successful login
            history.push('/');
        })
        .catch(error => {
            console.error('Error signing in', error);
        });
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' required />
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' required />
                <Button type='submit'>Log in</Button>
            </form>
        </div>
    );
}

export default Login;