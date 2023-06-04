// import '@/styles/globals.css'

import "@/styles/header.scss";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import Common from "./src/commonHeader";
import MyContext from "./src/MyContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      ></meta>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+
        Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
        integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
        crossorigin="anonymous"
      ></Script>
      <Common></Common>
      <MyContext>
        <Component {...pageProps} />
      </MyContext>
    </>
  );
}
