'use client';
import React from 'react'
import Image from "next/image"
const userProfile = (props) => {
    return (
        <div>
            <div className='profile'>
                <p className = 'imgStyle'>
                    <Image
                        src="/img/PROFILE.png"
                        width={140}
                        height={140}
                        alt="profile image"
                    />
                </p>
                <div className = 'profileFont'>
                    <div>.{props.name}</div>
                    <div>{props.studentId}</div>
                </div>
            </div>
            
            <style jsx>{`
                .profile{
                    position : relative;
                    display : flex;
                    flex-direction: column;
                }
                .profileFont{
                    text-align: center;
                    position : relative;
                }
                .imgStyle{
                    text-align: center;
                }
            `}</style>
        </div>
    );
};
export default userProfile;