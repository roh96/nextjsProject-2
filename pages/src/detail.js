import React, { useEffect, useState, useContext, startTransition } from "react";
import detailstyle from "@/styles/_detail.module.scss";

import { DataContext } from "./MyContext";
import axios from "axios";
import { Router, useRouter } from "next/router";

const Detail = () => {
  const REST_API_KEY = "0871b8de404d373dcd5244fcb8873bd5";
  const REDIRECT_URI = "https://nextjs-project-2.vercel.app/oauth/loginok";
  // const REDIRECT_URI =
  // "https://port-0-nextjsproject2-3a9t2ble82ehp6.sel3.cloudtype.app/oauth/loginok";
  // const REDIRECT_URI = "http://localhost:3000/oauth/loginok";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const [dataDetail, setDataDetail] = useState(null);
  const [resComment, setResComment] = useState(null);
  const [dataComment, setDataComment] = useState(null);
  // const { dataNick, setDataNick } = useContext(DataContext);
  const location = useRouter();
  const [state, setState] = useState(false);
  const [fav, setFav] = useState(false);

  const initial = {
    com: "",
    user: "",
    show: "",
  };
  const inifav = {
    user1: "",
    show1: "",
  };
  const [inputFavorite, setFavorite] = useState(inifav);
  const [inputValue, setValue] = useState(initial);
  // ㅁㄴㅇㅊㅁㄴㅇ첨ㅇ니ㅓ
  function valueChange(e) {
    let t = e.target;
    setValue(() => {
      return {
        show: dataDetail[0].mt20id,
        user: localStorage.aaa,
        [t.name]: t.value,
      };
    });
  }

  async function create(e) {
    e.preventDefault();
    console.log(inputValue);
    await axios.post("/api/hello", inputValue);
    setState(!state);
    e.target[0].value = "";
  }

  async function dataDelete(e) {
    await axios.delete(`/api/${e.num}`);
    setState(!state);
    // window.location.replace("/src/detail");
  }

  function parseStr(dataSet) {
    // console.log(dataSet);
    const parseString = require("react-native-xml2js").parseString;
    parseString(dataSet, (err, result) => {
      if (err !== null) {
        console.log("Error : ", err);
        return;
      }
      // console.log(result.dbs.db);
      setDataDetail(result.dbs.db);
    });
  }

  function ocomment(item) {
    if (item.showid == dataDetail[0].mt20id) return true;
  }
  // console.log(KAKAO_AUTH_URL);

  async function favorite() {
    if (!localStorage.aaa) {
      // console.log(localStorage.aaa);
      window.location.href = KAKAO_AUTH_URL;
    }
    if (!fav) {
      await axios.post("/api/hello?type=1234", {
        show1: dataDetail[0].mt20id[0],
        user1: localStorage.aaa,
        poster: dataDetail[0].poster[0],
        showname: dataDetail[0].prfnm[0],
      });
    } else {
      await axios.delete(
        `/api/1111?del=666&showid=${dataDetail[0].mt20id[0]}&userid=${localStorage.aaa}`
      );
    }
    setFav((current) => !current);
  }

  useEffect(() => {
    // console.log(location.query.id);
    // axios.get(`/api/hello?n=2000&id=${location.query.id}`).then((res) => {
    axios.get(`/api/hello?n=2000&id=${localStorage.bbb}`).then((res) => {
      parseStr(res.data[0]);
      setResComment(res.data[1]);
      // 영화id와 같은것만출력하기
    });
    axios
      .get(
        `/api/hello?type=4321&showid=${localStorage.bbb}&userid=${localStorage.aaa}`
      )
      .then((res) => {
        // console.log(res.data.length);
        // 배열도 값이 있는것으로 치기 떄문에 length로 데이터가 있는지 없는지 판단
        if (res.data.length) {
          setFav(true);
        } else setFav(false);
      });

    // console.log("sdfsdf");
  }, [state]);
  useEffect(() => {
    if (dataDetail) setDataComment(resComment.filter(ocomment));
  }, [dataDetail]);

  if (!dataDetail) return <>loading...</>;

  return (
    <div className={detailstyle.detaillist}>
      <div className={detailstyle.detailbox}>
        <div className={detailstyle.leftDetailbox}>
          <img src={dataDetail[0].poster}></img>
        </div>
        <div className={detailstyle.rightDetailbox}>
          <div className={detailstyle.title}>
            {dataDetail[0].prfnm}
            <span
              className={`${detailstyle.material_symbols_outlined} ${
                fav ? detailstyle.on : ""
              }`}
              onClick={() => favorite()}
            >
              star
            </span>
          </div>
          <div className={detailstyle.infobox}>
            <ul>
              <li className={detailstyle.firstbox}>
                <div>
                  <div className={detailstyle.boldp}>장소</div>
                  <div className={detailstyle.normalp}>
                    {dataDetail[0].fcltynm}
                  </div>
                </div>
                <div>
                  <div className={detailstyle.boldp}>관람시간</div>
                  <div className={detailstyle.normalp}>
                    {dataDetail[0].prfruntime}
                  </div>
                </div>
              </li>
              <li className={detailstyle.secondbox}>
                <div>
                  <div className={detailstyle.boldp}>기간</div>
                  <div className={detailstyle.normalp}>
                    {dataDetail[0].prfpdfrom} ~ {dataDetail[0].prfpdto}
                  </div>
                </div>
                <div>
                  <div className={detailstyle.boldp}>관람등급</div>
                  <div className={detailstyle.normalp}>
                    {dataDetail[0].prfage}
                  </div>
                </div>
              </li>
              <li className={detailstyle.thirdbox}>
                <div>
                  <div className={detailstyle.boldp}>분류</div>
                  <div className={detailstyle.normalp}>
                    {dataDetail[0].genrenm}
                  </div>
                </div>
                <div>
                  <div className={detailstyle.boldp}>현재상태</div>
                  <div className={detailstyle.normalp}>
                    {dataDetail[0].prfstate}
                  </div>
                </div>
              </li>
              <li className={detailstyle.fourthbox}>
                <div>
                  <div className={detailstyle.boldp}>가격</div>
                  <div className={detailstyle.normalp}>
                    {dataDetail[0].pcseguidance}
                  </div>
                </div>
                <div>
                  <div className={detailstyle.boldp}>캐스팅</div>
                  <div className={detailstyle.normalp}>
                    {dataDetail[0].prfcast}
                  </div>
                </div>
              </li>
            </ul>
            <div className={detailstyle.timeinfo}>공연시간정보</div>
            <div className={detailstyle.timeinfobox}>
              <div>{dataDetail[0].dtguidance}</div>
              {/* <div>예매하기</div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className={detailstyle.buttonbox}>
        <button name="댓글창 가기">댓글창 가기</button>
      </div> */}
      <div className={detailstyle.bigposter}>
        <img src={dataDetail[0].styurls[0].styurl[0]}></img>
      </div>
      <div className={detailstyle.comment}>
        <div className={detailstyle.commenthead}>댓글</div>
        <div className={detailstyle.commentinputbox}>
          댓글을 남겨보세요
          <form onSubmit={create} id="111222">
            <div className={detailstyle.commentinput}>
              <textarea
                onChange={valueChange}
                placeholder="내용을 입력해주세요"
                name="com"
              ></textarea>
            </div>
            <div className={detailstyle.commentinputsummit}>
              0/1000 <button type="submit">등록</button>
            </div>
          </form>
        </div>
        <div>
          <ul>
            {dataComment &&
              dataComment.map((obj, k) => {
                // {dataDetail.mt20id}
                return (
                  <li key={k}>
                    <div className={detailstyle.commentbox}>
                      <div className={detailstyle.commenttxt}>
                        {obj.comment}
                      </div>
                      <div className={detailstyle.commentinfo}>
                        {obj.userid}
                        <div>
                          <button onClick={() => dataDelete(obj)}>삭제</button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
          <div className={detailstyle.commentbox}>
            <div className={detailstyle.commenttxt}>어쩌구 저쩌구</div>
            <div className={detailstyle.commentinfo}>아이디 시간</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
