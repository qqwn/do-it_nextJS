'use client';
import React from 'react'
const userBaseInfo = (props) => {
    return (
        <div>
            <div className='containInfo'>
                <h2>기본 정보</h2>
                <table>
                    <tr>
                        <td>성명</td>
                        <td>.{props.name}</td>
                    </tr>
                    <tr>
                        <td>이메일 주소</td>
                        <td>{props.email}</td>
                    </tr>
                    <tr>
                        <td>학생 ID</td>
                        <td>{props.major}</td>
                    </tr>
                </table>
            </div>
            
            <style jsx>{`
                .comtainInfo{
                    padding-top : 1em;
                    position: relative;

                }
                td{
                    padding: 0.5em 1em 0.5em 1em;
                }
                tr{
                    border : 1px solid lightgrey;
                    padding : 1em 1em 1em 1em;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
            `}</style>
        </div>
    );
};
export default userBaseInfo;