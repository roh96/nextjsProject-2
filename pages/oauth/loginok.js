import React, { useEffect } from "react";
import qs from "qs";
import axios from "axios";
import { useRouter } from "next/router";

const Loginok = () => {
  const REST_API_KEY = "0871b8de404d373dcd5244fcb8873bd5";
  // const REDIRECT_URI = "http://localhost:3000/oauth/loginok";
  // const REDIRECT_URI =
  // "https://port-0-nextjsproject2-3a9t2ble82ehp6.sel3.cloudtype.app/oauth/loginok";
  const REDIRECT_URI = "https://nextjs-project-2.vercel.app/oauth/loginok";
  const CLIENT_SECRET = "Wj9Rk5DhtZZAKQVTzmu30AXxtazTqKwD";

  const router = useRouter();

  let tokey;

  const getToken = async () => {
    // Kakao Javascript SDK 초기화

    const code = new URL(window.location.href).searchParams.get("code");

    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    const res = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      payload
    );
    // tokey = res.data.access_token;
    // console.log(tokey);
    window.Kakao.init(REST_API_KEY);
    window.Kakao.Auth.setAccessToken(res.data.access_token);

    // document.cookie = `token=${res.data.access_token};`;
    // localStorage.setItem(res.data.access_token, 1);

    // window.location.href = "http://localhost:3000/";
    // access token 설정
    router.push("../");
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div></div>;
};

export default Loginok;
