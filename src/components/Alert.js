import React from 'react'

export default function alert(props) {
    return (


        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong>:   {props.alert.msg}</div>


        // this code is for when layout shifting when showing alet message 
        //  niche diya gaya syntax (props.alert &&) in video no.13 you can refer to understand from react course

        // <div style={{height:'50px'}}>
        // { props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        //     <strong>{props.alert.type}</strong>:   {props.alert.msg}</div>
        // }
        //     </div>




    )
}
