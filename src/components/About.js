import React, { useState } from 'react'

export default function About(props) {

    return (

        <>

            <h1 style={{ color: props.color }}><strong>About Us  </strong></h1>

            <h2 style={{ color: props.color }}>Features of Text-Converter</h2>
            <p>
                <li style={{ color: props.color }}>this is easy to use </li>
                <li style={{ color: props.color }}>very beautuful graphics  </li>
                <li style={{ color: props.color }}>there are many modes are available  </li>
                <li style={{ color: props.color }}>fast and based on single page application </li>
            </p>

            <h2 style={{ color: props.color }}>About Developer</h2>

            <p style={{ color: props.color }}>  <strong>Mark Wood - </strong> Front End Developer</p>
            <p style={{ color: props.color }}>  <strong>Tony Stark -</strong> Back End Developer </p>
            <p style={{ color: props.color }}>   <strong>Elon Musk -</strong> Graphic Designer</p>
            <p style={{ color: props.color }}>  <strong>Bill Gates -</strong> Full Stack Developer</p>



        </>
    )
}
