import Head from "next/head";
import React, { useEffect, useState } from "react";

const Login = () => {
  const REST_API_KEY = "0871b8de404d373dcd5244fcb8873bd5";
  const REDIRECT_URI = "http://localhost:3000/oauth/loginok";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <div>
        <a href={KAKAO_AUTH_URL}>Kakao Login</a>
      </div>
    </>
  );
};
export default Login;
