
const SimpleForm = () => {
    //Add event handler and taking a parameter(event or e)
    const handleSubmit = e =>{
        //to stop the default behaviour like reloading while submit will be stopped
        e.preventDefault();
        // e.target will give the <form> element
        //getting the value of inside the name field
        console.log(e.target.name.value);
        //getting the value of the email input 
        console.log(e.target.email.value);
        //getting the value of phone name input field
        console.log(e.target.phone.value);
        console.log('form submitted!');
    }

    return (
        <div>
            {/* To access the data from the form we have to use 'onSubmit' event handler */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your full name"/> <br />
                <input type="email" name="email" id="" placeholder="abc@gmail.com"/>
                <br />
                <input type="text" name="phone" id="" placeholder="phone number"/> <br />
                {/* <button type="submit">Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;