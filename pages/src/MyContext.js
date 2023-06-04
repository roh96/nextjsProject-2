const { createContext, Children, useState, useEffect } = require("react");
import axios from "axios";
export const DataContext = createContext(null);

const MyContext = ({ children }) => {
  const [dataNick, setDataNick] = useState();

  // async function dataFun(type, obj) {
  //   let trans;
  //   if (type == "get") {
  //     await axios.get("/api").then((res) => (trans = res));
  //   } else if (type == "post") {
  //     await axios.post("/api", obj);
  //     return dataFun("get");
  //   }
  //   // } else if (type == "put") {
  //   //   await axios.put(`/api/${obj.id}`, obj);
  //   //   return dataFun("get");
  //   // } else {
  //   //   await axios.delete(`/api/${obj.id}`);
  //   //   return dataFun("get");
  //   // }

  //   setData(trans.data);
  // }

  // useEffect(() => {
  //   dataFun("get");
  // }, []);

  return (
    <DataContext.Provider
      value={{ dataNick: dataNick, setDataNick: setDataNick }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default MyContext;
