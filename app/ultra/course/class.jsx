'use client';
import React from 'react'
const classes = (props) => {
    return (
        <div>
            <div className = 'class-box'>
                <span>
                    {props.code}_ {props.name}({props.courseId})
                </span>
                <div className='class-detail'>
                    <soan>공개 |</soan>
                    <span>.{props.professorName} | </span>
                    <spane>추가정보</spane>
                </div>
            </div>
        
            <style jsx>{`
                .class-box{
                    border : 1px solid black;
                    position : flex; 
                    display: flex;
                    padding : 1em 1em 1em 1em;
                    margin : 1em 1em 1em 1em;
                    flex-direction : column;
                    flex : 1;
                }
                .class-detail{
                    display : flex;
                    font-size : 12px;
                    color : darkgrey;
                    padding : 0.5em 0em 0em 0em;
                }
            `}</style>
        </div>
    );
};
export default classes;