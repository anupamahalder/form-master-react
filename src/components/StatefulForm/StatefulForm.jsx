import { useState } from "react";

const StatefulForm = () => {

    //use state for individual field we can give any inial value or null as initial value
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    //add an event handler
    const handleSubmit = e =>{
        e.preventDefault();
        //we can validate our data from input field
        //like password's length cannot be less than 8
        if(password.length < 8){
            setError('Password must be 8 characters or longer')
        }
        else{
            //no error then show the result
            setError('');
            console.log(name,email,password);
        }
    }
    const handleNameChange = e =>{
        setName(e.target.value);
    }
    const handleEmailChange = e =>{
        // we get the value in the input field 
        // console.log(e.target.value);
        //set the value inside the state so we can get the email from email state
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    // console.log(password);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* To set the initial value of an input field we can use value property */}
                <input onChange={handleNameChange} value ="Anupama Halder"
                type="text" name="name" placeholder="Your full name"/> <br />
                {/* onChange event handler does when we type anything in this input field then this eventhandler will be hitted */}
                <input onChange={handleEmailChange} 
                type="email" name="email" id="" placeholder="abc@gmail.com"/>
                <br />
                <input onChange={handlePasswordChange} 
                type="password" name="password" id="" placeholder="password" required/> 
                {
                    //if error occured show it inside a paragraph tag
                    error && <p>{error}</p>
                }
                <br />
                {/* <button type="submit">Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;