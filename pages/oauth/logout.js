import React, { useEffect, useState } from "react";
import qs from "qs";
import axios from "axios";
import { useRouter } from "next/router";

const Logout = () => {
  const REST_API_KEY = "0871b8de404d373dcd5244fcb8873bd5";
  // const LOGOUT_REDIRECT_URI = "http://localhost:3000/oauth/logout";
  const LOGOUT_REDIRECT_URI =
    "https://port-0-nextjsproject2-3a9t2ble82ehp6.sel3.cloudtype.app/oauth/logout";
  //   const CLIENT_SECRET = "Wj9Rk5DhtZZAKQVTzmu30AXxtazTqKwD";

  const router = useRouter();
  // console.log(Kakao.Auth.getAccessToken());

  const deleteToken = async () => {
    // Kakao Javascript SDK 초기화

    // const code = new URL(window.location.href).searchParams.get("code");
    window.localStorage.removeItem("aaa");

    // const payload = qs.stringify({
    //   client_id: REST_API_KEY,
    //   logout_redirect_uri: LOGOUT_REDIRECT_URI,
    // });
    // // console.log(Kakao.Auth.getAccessToken());

    // const res = await axios.get(
    //   "https://kauth.kakao.com/oauth/logout",
    //   payload
    // );

    // window.Kakao.init(REST_API_KEY);
    // window.Kakao.Auth.setAccessToken(res.data.access_token);
    // console.log(Kakao.Auth.getAccessToken());
    // access token 설정
    router.push("/");
  };

  useEffect(() => {
    deleteToken();
  }, []);

  return <div></div>;
};

export default Logout;
