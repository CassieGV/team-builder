import React, {useState} from 'react';

const memberForm = (props)=> {
    console.log("memberForm props: ", props);
    const [member, setMemeber] = useState({
        name: "",
        email: "",
        role: ""

    })
    return (
        <form>
          <label htmlFor="body">Name</label>
          <input type="text" name="Name" onChange={changeHandler} />
    
          <label htmlFor="body">email</label>
          <input type="text" name="email" onChange={changeHandler} />

          <label htmlFor="body">role</label>
          <input type="text" name="role">Role</input>
    
        
          <input type="submit" />
        </form>
      );
}

export default memberForm;