import { executeQuery } from "./db";

const handler = async (req, res) => {
  const { method, body, query } = req;

  console.log(req.query.id);
  const selectDataId = async () => {
    let id = req.query.id;
    let data = await executeQuery("select * from commentTable where num=?", [
      id,
    ]);
    res.json(data);
  };
  const updateDataId = async () => {
    let { showid, comment, userid } = body;
    console.log(body);
    console.log(query.id);
    let data = await executeQuery(
      "update mytest set showid=?, comment=?, userid=? where num=?",
      [showid, comment, userid, query.id]
      // [아무개, 독서, "0220", 4]
    );
    res.json(data);
  };

  const deleteDataId = async () => {
    let data = await executeQuery("delete from commentTable where num=?", [
      query.id,
    ]);
    res.json(data);
  };

  const deleteFavorite = async () => {
    console.log(req.query, "oipjkjklkl");
    let data = await executeQuery(
      "delete from userdb where showid=? and userid=?",
      [req.query.showid, req.query.userid]
    );
    res.json(data);
  };

  switch (method) {
    case "GET":
      selectDataId();
      break;
    case "PUT":
      updateDataId();
      break;
    case "DELETE":
      if (req.query.del == "666") {
        deleteFavorite();
      } else deleteDataId();
      break;
  }
  //get[id], put, delete
};

export default handler;
