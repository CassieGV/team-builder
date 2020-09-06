import React, {useState} from 'react';

const memberForm = (props)=> {
    console.log("memberForm props: ", props);
    const [member, setMemeber] = useState({
        name: "",
        email: "",
        role: ""

    })
}