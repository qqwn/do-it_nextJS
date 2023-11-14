'use client';
import React from 'react'
const classes = (props) => {
    return (
        <div>
            <div className='class-box'>
                <div className = 'class-box-deco'>
                    <span>
                        {props.code}_ {props.name}({props.courseId})
                    </span>
                    <div className='class-detail'>
                        <soan>공개 |</soan>
                        <span>.{props.professorName} | </span>
                        <spane>추가정보</spane>
                    </div>
                </div>
                
            </div>
        
            <style jsx>{`
                .class-box{
                    border : 0.01px solid #cacaca;
                    position : flex; 
                    display: flex;
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
                .class-box-deco{
                    border-left: 0.7rem solid #666666;
                    padding : 1rem 1rem 1rem 1rem;
                    position : flex;
                    display : flex;
                    flex-direction : column;
                }
            `}</style>
        </div>
    );
};
export default classes;