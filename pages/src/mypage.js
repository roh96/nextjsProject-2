import mypagestyle from "@/styles/_mypage.module.scss";
import axios from "axios";
import Link from "next/link";

import React, { useEffect, useState, useContext } from "react";

const Mypage = () => {
  const [state, setState] = useState(false);
  const [myList, setMyList] = useState();

  // setState((current) => !current);
  useEffect(() => {
    axios.get(`/api/hello?my=2222&userid=${localStorage.aaa}`).then((res) => {
      setMyList(res.data);
      // console.log(res);
    });
  }, []);
  console.log(myList);
  if (!myList) return <>loading...</>;
  return (
    <div className={mypagestyle.mypagelist}>
      <div className={mypagestyle.mypagebox}>
        <h2>즐겨찾기</h2>
        <div className={mypagestyle.mypagecount}>
          즐겨찾기 된 갯수 : {myList.length}개
        </div>
        <div className={mypagestyle.mypageImgbox}>
          <ul>
            {myList &&
              myList.map((obj, k) => {
                return (
                  <li key={k}>
                    <Link
                      href={{
                        pathname: `/src/detail`,
                        query: { id: obj.showid },
                      }}
                      onClick={() => {
                        localStorage.bbb = obj.showid;
                      }}
                    >
                      <div className={mypagestyle.imgbox}>
                        {obj.showposter == null ? (
                          <img src="./img/sry.png"></img>
                        ) : (
                          <img src={obj.showposter}></img>
                        )}
                      </div>
                      <div className={mypagestyle.Title}>{obj.showname}</div>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
