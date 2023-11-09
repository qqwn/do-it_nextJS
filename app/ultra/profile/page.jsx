import React from "react";
import UserBaseInfo from './userBaseInfo';
import UserPhoneInfo from './userPhoneInfo';
import UserConfig from './userConfig';
import UserProfile from './userProfile';
const Profile = async () => { // 비동기 함수로 변경시켜줌
    const response = await fetch("http://localhost:9999/userInfo", {
        cache: "no-cache"
    });
  const userInfo = await response.json();

  return (
    <>
      <UserProfile
        name={userInfo.name}
        studentId={userInfo.studentId}
      />
      <UserBaseInfo
        name={userInfo.name}
        email={userInfo.email}
        major={userInfo.major}
      />
      <UserPhoneInfo
        phoneNumber={userInfo.phoneNumber}
      />
      <UserConfig
      />
    </>
  );  
};
export default Profile;