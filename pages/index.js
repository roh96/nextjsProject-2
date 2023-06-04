// import styles from "@/styles/Home.module.css";
import indexstyle from "@/styles/_index.module.scss";
import Layout from "./src/Layout";
import HeadMeta from "./src/HeadMeta";
import Main from "./src/main";
import Detail from "./src/detail";
// import Profile from "./src/Profile";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "./src/MyContext";
import axios from "axios";

export default function Home() {
  // const { dataNick, setDataNick } = useContext(DataContext);
  const [state, setState] = useState(false);
  const [fst, setFst] = useState("02");
  const [fsh, setFsh] = useState("AAAA");
  const [da, setDa] = useState();

  const [stActive, setStActive] = useState({ a1: true, a2: false, a3: false });
  const [shActive, setShActive] = useState({
    b1: true,
    b2: false,
    b3: false,
    b4: false,
    b5: false,
    b6: false,
    b7: false,
    b8: false,
    b9: false,
  });

  // const [user_id, setUserId] =  useState();
  // const [profileImage, setProfileImage] = useState();

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      // 사용자 정보 변수에 저장
      // setUserId(data.id);
      // console.log(data.properties.nickname);
      localStorage.aaa = data.properties.nickname;
      // setDataNick(data.properties.nickname);
      // setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(dataNick);
  async function switchPrfstate(e, number) {
    // if ((e = "01")) {
    // } else if ((e = "02")) {
    // } else {
    // }
    let aaa = { a1: false, a2: false, a3: false };
    for (let i in aaa) {
      if (i == number) aaa[i] = true;
    }
    setFst(e);
    // console.log(`/api/hello?st=${e}`);
    setDa(await axios.get(`/api/hello?st=${e}&sh=${fsh}`));

    setStActive(aaa);

    setState(!state);
  }
  async function switchShcate(e, number) {
    let bbb = {
      b1: false,
      b2: false,
      b3: false,
      b4: false,
      b5: false,
      b6: false,
      b7: false,
      b8: false,
      b9: false,
    };
    for (let i in bbb) {
      if (i == number) bbb[i] = true;
    }

    setFsh(e);
    // console.log(`/api/hello?sh=${e}`);
    setDa(await axios.get(`/api/hello?sh=${e}&st=${fst}`));

    setShActive(bbb);
    setState(!state);
  }
  // function switchArea(e) {
  //   axios.get();
  // }

  useEffect(() => {
    getProfile();
    console.log("sdfsdf");
  }, [state]);

  return (
    <>
      <Layout>
        <HeadMeta title="index" />
        {/* <Profile /> */}
        <div className={indexstyle.div}>
          <div className={indexstyle.firstContainer}>
            <img src="/img/BigBanner.jpg" />
            <div>
              <ul>
                <li>
                  <img src="/img/Thumbnail01.jpg" />
                </li>
                <li>
                  <img src="/img/Thumbnail02.png" />
                </li>
                <li>
                  <img src="/img/Thumbnail03.jpg" />
                </li>
                <li>
                  <img src="/img/Thumbnail04.jpg" />
                </li>
                <li>
                  <img src="/img/Thumbnail05.jpg" />
                </li>
                <li>
                  <img src="/img/Thumbnail06.jpg" />
                </li>
                <li>
                  <img src="/img/Thumbnail07.png" />
                </li>
                <li>
                  <img src="/img/Thumbnail08.jpg" />
                </li>
                <li>
                  <img src="/img/Thumbnail09.png" />
                </li>
                <li>
                  <img src="/img/Thumbnail10.jpg" />
                </li>
              </ul>
            </div>
          </div>
          <div className={indexstyle.secondContainer}>
            <div className={indexstyle.bigButton}>
              <div className={indexstyle.secLeftContainer}>
                <form>
                  <button name="genre" type="button">
                    장르별
                  </button>
                  {/* <button name="region" type="button">
                    지역별
                  </button> */}
                </form>
              </div>
              <div className={indexstyle.secRightContainer}>
                <form>
                  <button
                    //클래스추가법알기
                    className={stActive.a1 ? indexstyle.on : ""}
                    name="ing"
                    type="button"
                    onClick={() => switchPrfstate("02", "a1")}
                  >
                    공연중
                  </button>
                  <button
                    className={stActive.a2 ? indexstyle.on : ""}
                    name="done"
                    type="button"
                    onClick={() => switchPrfstate("03", "a2")}
                  >
                    공연완료
                  </button>
                  <button
                    className={stActive.a3 ? indexstyle.on : ""}
                    name="will"
                    type="button"
                    onClick={() => switchPrfstate("01", "a3")}
                  >
                    공연예정
                  </button>
                </form>
              </div>
            </div>
            <div className={indexstyle.smallButton}>
              <form>
                <button
                  className={shActive.b1 ? indexstyle.on : ""}
                  name="AAAA"
                  type="button"
                  onClick={() => switchShcate("AAAA", "b1")}
                >
                  연극
                </button>
                <button
                  className={shActive.b2 ? indexstyle.on : ""}
                  name="BBBC"
                  type="button"
                  onClick={() => switchShcate("BBBC", "b2")}
                >
                  무용
                </button>
                <button
                  className={shActive.b3 ? indexstyle.on : ""}
                  name="BBBE"
                  type="button"
                  onClick={() => switchShcate("BBBE", "b3")}
                >
                  대중무용
                </button>
                <button
                  className={shActive.b4 ? indexstyle.on : ""}
                  name="CCCA"
                  type="button"
                  onClick={() => switchShcate("CCCA", "b4")}
                >
                  클래식
                </button>
                <button
                  className={shActive.b5 ? indexstyle.on : ""}
                  name="CCCC"
                  type="button"
                  onClick={() => switchShcate("CCCC", "b5")}
                >
                  국악
                </button>
                <button
                  className={shActive.b6 ? indexstyle.on : ""}
                  name="CCCD"
                  type="button"
                  onClick={() => switchShcate("CCCD", "b6")}
                >
                  대중음악
                </button>
                <button
                  className={shActive.b7 ? indexstyle.on : ""}
                  name="EEEA"
                  type="button"
                  onClick={() => switchShcate("EEEA", "b7")}
                >
                  복합
                </button>
                <button
                  className={shActive.b8 ? indexstyle.on : ""}
                  name="EEEB"
                  type="button"
                  onClick={() => switchShcate("EEEB", "b8")}
                >
                  서커스/마술
                </button>
                <button
                  className={shActive.b9 ? indexstyle.on : ""}
                  name="GGGA"
                  type="button"
                  onClick={() => switchShcate("GGGA", "b9")}
                >
                  뮤지컬
                </button>
              </form>
            </div>
          </div>
        </div>
        <Main data={da} />
      </Layout>
    </>
  );
}
