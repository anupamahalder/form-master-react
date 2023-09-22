import { useEffect, useRef } from "react";
const RefForm = () => {
    //Create reference to each input field
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    //To set the cursor in the first input field
    useEffect(()=>{
        //calling the focus function
        nameRef.current.focus();
    },[])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="Your full name"/> <br />
                {/* Setting the initial value  */}
                <input ref={emailRef} defaultValue={'abc@xyz.com'} type="email" name="email" id=""/>
                <br />
                <input ref={passwordRef} type="text" name="phone" id="" placeholder="phone number"/> <br />
                {/* <button type="submit">Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;