import Link from "next/link";
import React, { useEffect, useState } from "react";

const CommonHeader = () => {
  const REST_API_KEY = "0871b8de404d373dcd5244fcb8873bd5";
  // const REDIRECT_URI = "http://localhost:3000/oauth/loginok";
  // const LOGOUT_REDIRECT_URI = "http://localhost:3000/oauth/logout";
  // const REDIRECT_URI =
  // "https://port-0-nextjsproject2-3a9t2ble82ehp6.sel3.cloudtype.app/oauth/loginok";
  // const LOGOUT_REDIRECT_URI =
  // "https://port-0-nextjsproject2-3a9t2ble82ehp6.sel3.cloudtype.app/oauth/logout";
  const REDIRECT_URI = "https://nextjs-project-2.vercel.app/oauth/loginok";
  const LOGOUT_REDIRECT_URI =
    "https://nextjs-project-2.vercel.app/oauth/logout";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;

  const [user_id, setUserId] = useState(null);

  //   console.log(Kakao.Auth.getAccessToken());

  const getProfile = async () => {
    // try {
    //   // Kakao SDK API를 이용해 사용자 정보 획득
    //   let data = await window.Kakao.API.request({
    //     url: "/v2/user/me",
    //   });
    //   // 사용자 정보 변수에 저장
    //   console.log(data);
    //   setUserId(data.id);
    // } catch (err) {
    //   console.log(err, "lklklkl");
    // }
  };
  //   console.log(Kakao.Auth.getAccessToken());

  useEffect(() => {
    console.log(localStorage.aaa);
    setTimeout(() => {
      setUserId(localStorage.aaa);
      // console.log("sdfsdfs");
    }, 500);
    // getProfile();
  }, []);

  // console.log(user_id);
  // if (!user_id) return <>loading...</>;
  return (
    <div>
      <header className={"headerstyle"}>
        <div>
          <Link href="/">
            <h1>
              쇼<span>링크</span>
            </h1>
          </Link>
          <ul>
            {!user_id ? (
              <li>
                <Link href={KAKAO_AUTH_URL}>로그인</Link>
              </li>
            ) : (
              <li>
                <Link href="/src/mypage">마이페이지</Link>
                <Link href={KAKAO_LOGOUT_URL}>로그아웃</Link>
              </li>
              // <li>
              //   <a>회원가입</a>
              // </li>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default CommonHeader;
