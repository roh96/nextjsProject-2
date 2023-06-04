// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { useEffect, useState } from "react";
import { Router } from "react-router-dom";
import { executeQuery } from "./db";

// let fs = require("fs");
// let db = require("data/db.json");
// const [fst, setFst] = useState("02");
// const [fsh, setFsh] = useState("AAAA");
export default async function handler(req, res) {
  //res.query.id;

  // console.log(req.query);
  //////////////////// 사진 데이터처리 ////////////////////////
  const photoData = async () => {
    // console.log(req.query);
    // console.log("aaa");

    if (req.query.n == 2000) {
      let detaildata = await axios.get(
        // "https://www.kopis.or.kr/openApi/restful/pblprfr/PF214116?service=39962a26034949b39f3e06d6079c102c"
        `https://www.kopis.or.kr/openApi/restful/pblprfr/${req.query.id}?service=39962a26034949b39f3e06d6079c102c`
      );
      let data = await executeQuery(
        "select * from commentTable order by num DESC",
        []
      );
      res.send([detaildata.data, data]);
    } else if (req.query.st || req.query.sh) {
      let maindata = await axios.get(
        // "https://www.kopis.or.kr/openApi/restful/pblprfr?service=39962a26034949b39f3e06d6079c102c&stdate=20230101&eddate=20230630&cpage=1&rows=15&prfstate=02&shcate=AAAA"
        `https://www.kopis.or.kr/openApi/restful/pblprfr?service=39962a26034949b39f3e06d6079c102c&stdate=20230101&eddate=20230630&cpage=1&rows=15&prfstate=${req.query.st}&shcate=${req.query.sh}`
      );

      // console.log(maindata.data);
      res.send(maindata.data);
      console.log("ccc");
    } else {
      let maindata = await axios.get(
        // "https://www.kopis.or.kr/openApi/restful/pblprfr?service=39962a26034949b39f3e06d6079c102c&stdate=20230101&eddate=20230630&cpage=1&rows=15&prfstate=02&shcate=AAAA"
        `https://www.kopis.or.kr/openApi/restful/pblprfr?service=39962a26034949b39f3e06d6079c102c&stdate=20230101&eddate=20230630&cpage=1&rows=15&prfstate=02&shcate=AAAA`
      );

      console.log(maindata.data);
      res.send(maindata.data);
    }
  };
  // console.log(req.query);
  // ${req.query.st}
  //////////////////////// 댓글처리 ///////////////////////////////////////////////////
  const { method, body } = req;

  // const selectData = async () => {
  //   try {
  //     // DESC(내림차순), ASC(오름차순)
  //     let data = await executeQuery(
  //       "select * from commentTable order by id DESC",
  //       []
  //     );
  //     res.json(data);
  //   } catch (err) {
  //     res.send(err);
  //   }
  // };
  const insertData = async () => {
    // DESC(내림차순), ASC(오름차순)
    let { show, com, user } = body;
    console.log(body);
    let data = await executeQuery(
      "insert into commentTable(showid, comment, userid) value (?,?,?)",
      [show, com, user]
    );
    // router.push("/src/detail");
    // photoData();
    res.send("작성성공");
  };

  const insertFavorite = async () => {
    console.log(req.query);
    console.log(body);

    let { show1, user1, poster, showname } = body;
    let data = await executeQuery(
      "insert into userdb(userid, showid,showposter,showname) value (?,?,?,?)",
      [user1, show1, poster, showname]
    );
    console.log("12222");
    res.send("즐겨성공");
  };

  const getFavorite = async () => {
    let data = await executeQuery(
      "select * from userdb where showid=? and userid=?",
      [req.query.showid, req.query.userid]
    );
    res.json(data);
  };

  const getMypage = async () => {
    console.log(req.query.userid, "adfa");
    let data = await executeQuery("select * from userdb where userid=?", [
      req.query.userid,
    ]);
    // console.log(data, "aaa");
    res.json(data);
  };

  switch (method) {
    case "GET":
      if (req.query.type == 4321) {
        getFavorite();
      } else if (req.query.my == 2222) {
        getMypage();
      } else photoData();
      // selectData();
      break;
    case "POST":
      if (req.query.type == 1234) {
        insertFavorite();
      } else insertData();
      break;
  }

  // console.log(data.data);
  // console.log(detaildata.data);
}
