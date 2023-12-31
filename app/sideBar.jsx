'use client';
import Image from "next/image"
import React from 'react'
import Link from "next/link"
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const sideBar = (props) => {
    return (
    <>
        <div className = 'sideBarConfig'>
            <Link href="/" style={{textDecoration: 'none'}}>
                <Image
                src="/img/AJOU_LOGO.png"
                width={100}
                height={100}
                alt="AjouLogo"
                />
            </Link>
                <div className='sideBarNav'>
                    <div className = 'sideBarDetail'>
                        <Link href="/ultra/institution-page" style={{textDecoration: 'none'}}>
                            <span>아주Bb 안내사항</span>
                        </Link>
                        <Link href="/ultra/profile" style={{textDecoration: 'none'}}>
                            <span>
                                .{props.name}
                            </span>
                        </Link>
                        <Link href="/ultra/stream" style={{textDecoration: 'none'}}>
                            <span>활동 스트림</span>
                        </Link>
                        <Link href="/ultra/course" style={{textDecoration: 'none'}}>
                            <span>코스</span>
                        </Link>
                        <Link href="/ultra/organization" style={{textDecoration: 'none'}}>
                            <span>조직</span>
                        </Link>
                        <Link href="/ultra/calendar" style={{textDecoration: 'none'}}>
                            <span>캘린더</span>
                        </Link>
                        <Link href="/ultra/messages" style={{textDecoration: 'none'}}>
                            <span>메시지</span>
                        </Link>
                        <Link href="/ultra/grades" style={{textDecoration: 'none'}}>
                            <span className = 'navColor'>성적</span>
                        </Link>
                        <Link href="/ultra/tools" style={{textDecoration: 'none'}}>
                            <span>도구</span>
                        </Link>
                    </div>
                </div>
        </div>

            <style jsx>{`
            .sideBarConfig{
                position : relative;
                flex-direction: column;
                display : flex;
                background-color : #262626;
                height : 100%;
                padding : 1em 0em 0.5em 0em;
                align-items : center;
            }
            .sideBarConfig span {
                color : white;
                padding : 4px 0px 4px 0px;
            }
            .sideBarNav{
                position : flex;
                border-top : 2px solid black;
                padding : 5px 0px 5px 0px;
            }
            .sideBarDetail {
                padding : 0.5rem 1rem 0rem 1rem;
                display : flex;
                flex-direction : column;
                gap : 8px;
            }
            .sideBarConfig img{
                border-bottom : 10px solid white;
            }
            `}</style>    
    </>
    
  )
}
export default sideBar;
