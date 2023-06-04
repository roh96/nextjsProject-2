import React, { useState, useEffect, useContext } from "react";
import mainstyle from "@/styles/_main.module.scss";

import { DataContext } from "./MyContext";
import axios from "axios";
import Link from "next/link";

const Main = ({ data }) => {
  const [dataList, setDataList] = useState();
  // const { dataNick, setDataNick } = useContext(DataContext);

  function parseStr(dataSet) {
    const parseString = require("react-native-xml2js").parseString;
    parseString(dataSet, (err, result) => {
      // console.log(result.dbs.db);
      if (err !== null) {
        console.log("Error : ", err);
        return;
      }
      /* What you do */

      setDataList(result.dbs.db);
    });
  }

  useEffect(() => {
    if (data) {
      parseStr(data.data);
    } else {
      axios.get("/api/hello").then((res) => {
        parseStr(res.data);
      });
    }
  }, [data]);

  return (
    <div className={mainstyle.apilist}>
      <div>
        <div>
          <ul>
            {dataList &&
              dataList.map((obj, k) => {
                return (
                  <li key={k}>
                    <Link
                      href={{
                        pathname: `/src/detail`,
                        query: { id: obj.mt20id },
                      }}
                      onClick={() => {
                        localStorage.bbb = obj.mt20id;
                      }}
                    >
                      <div className={mainstyle.imgbox}>
                        {obj.poster == null ? (
                          <img src="./img/sry.png"></img>
                        ) : (
                          <img src={obj.poster}></img>
                        )}
                      </div>
                      <div className={mainstyle.Title}>
                        {obj.prfnm}
                        <div className={mainstyle.notTitle}>
                          <div className={mainstyle.where}>{obj.fcltynm}</div>
                          <div className={mainstyle.date}>
                            {obj.prfpdfrom} ~ {obj.prfpdto}
                          </div>
                        </div>
                      </div>
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

export default Main;
