
const SimpleForm = () => {
    //Add event handler and taking a parameter(event or e)
    const handleSubmit = e =>{
        //to stop the default behaviour like reloading while submit will be stopped
        e.preventDefault();
        console.log('form submitted!');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <br />
                {/* <button type="submit">Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;