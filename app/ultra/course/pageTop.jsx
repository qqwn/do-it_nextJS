'use client';
import React from 'react'
const classesTop = (props) => {
    return (
        <div>
            <div className = 'class-box'>
                <p>코스</p>
            </div>
        
            <style jsx>{`
                .class-box{
                    border-bottom: 1px solid black;
                    position : relative;
                    display: flex;
                    padding : 1em 0em 1em 1em;
                    flex-direction : column;
                    width : 100%;
                }
                .class-detail{
                    display : flex;
                    font-size : 12px;
                    color : darkgrey;

                }
            `}</style>
        </div>
    );
};
export default classesTop;