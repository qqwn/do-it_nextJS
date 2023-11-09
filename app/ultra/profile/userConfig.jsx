'use client';
import React from 'react'
const userConfig = (props) => {
    return (
        <div>
            <div>
                <h2>시스템 설정</h2>
                <table>
                    <tr className='configBorder'>
                        <td>언어</td>
                        <td>한국어 (한국)</td>
                    </tr>
                    <tr className='configBorder'>
                        <td>개인 정보 설정</td>
                        <td>교수자만 내 프로필 정보를 볼 수 있음</td>
                    </tr>
                    <tr>
                        <td>글로벌 통지 설정</td>
                        <td>스트림 통지</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>이메일 통지</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>푸시 통지</td>
                    </tr>
                </table>
            </div>
            
            <style jsx>{`
                .configBorder{
                    border : 1px solid lightgrey;
                }
                td{
                    padding: 0.5em 1em 0.5em 1em;
                }
                tr{
                    padding : 1em 1em 1em 1em;
                }
                table {
                    width: 100%;
                    border : 1px solid lightgrey;
                    border-collapse: collapse;
                }
            `}</style>
        </div>
    );
};
export default userConfig;