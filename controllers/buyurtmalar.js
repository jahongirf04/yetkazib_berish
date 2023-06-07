const db = require("../config/db_connection");

exports.createBuyurtma = (req, res) => {
  const { mijoz_id, yetkazuvchi_id, yetkazilgan_vaqt, buyurtma } = req.body;
  db.query(
    `insert into buyurtmalar (mijoz_id,
    yetkazuvchi_id,
    yetkazilgan_vaqt,
    buyurtma)
    values (?,?,?,?)`,
    [mijoz_id, yetkazuvchi_id, yetkazilgan_vaqt, buyurtma],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({
        message: "Successful",
        RegionId: result.insertId,
      });
    }
  );
};

exports.getBuyurtmalar = (req, res) => {
  db.query(`select * from buyurtmalar`, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json(result);
  });
};

exports.getBuyurtma = (req, res) => {
  const myId = req.params.id;
  db.query(`select * from buyurtmalar where id = ?`, myId, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json(result);
  });
};

exports.updateBuyurtma = (req, res) => {
  const myId = req.params.id;
  const { buyurtma } = req.body;
  db.query(
    `update buyurtmalar set buyurtma = ? where id = ?`,
    [buyurtma, myId],
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Error" });
      }
      res.json({
        message: "Successful",
        id: result.insertId,
      });
    }
  );
};

exports.deleteBuyurtma = (req, res) => {
  const myId = req.params.id;
  db.query(`delete from buyurtmalar where id = ?`, myId, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json({
      message: "successful",
    });
  });
};

exports.searchBuyurtma = (req, res) => {
  db.query(`select * from buyurtmalar`, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json(result);
  });
};
