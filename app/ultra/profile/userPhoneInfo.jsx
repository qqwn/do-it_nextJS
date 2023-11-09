'use client';
import React from 'react'
const userPhoneInfo = (props) => {
    return (
        <div>
            <div>
                <h2>연락처 정보</h2>
                <table>
                    <tr>
                        <td>전화번호</td>
                        <td>{props.phoneNumber}(휴대폰)</td>
                    </tr>
                </table>
            </div>
            
            <style jsx>{`
                td{
                    padding: 0.5em 1em 0.5em 1em;
                }
                tr{
                    border: 1px solid lightgrey;
                    padding: 1em 1em 1em 1em;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
            `}</style>
        </div>
    );
};
export default userPhoneInfo;