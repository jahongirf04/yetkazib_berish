const db = require("../config/db_connection");

exports.searchBuyurtma = (req, res) => {
  const { start, end } = req.body;
  db.query(`select * from buyurtmalar`, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    for (i in result) {
      if (
        Number(result[i].yetkazilgan_vaqt) > Number(start) &&
        Number(result[i].yetkazilgan_vaqt) < Number(end)
      ) {
        res.json(result[i]);
      }
    }
  });
};
