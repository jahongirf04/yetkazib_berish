const db = require("../config/db_connection");

exports.createMijoz = (req, res) => {
  const { name, balance, phone, address } = req.body;
  db.query(
    `insert into mijozlar (name, balance, phone, address)
    values (?,?,?,?)`,
    [name, balance, phone, address],
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

exports.getMijozlar = (req, res) => {
  db.query(`select * from mijozlar`, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json(result);
  });
};

exports.getMijoz = (req, res) => {
  const myId = req.params.id;
  db.query(`select * from mijozlar where id = ?`, myId, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json(result);
  });
};

exports.updateMijoz = (req, res) => {
  const myId = req.params.id;
  const { name } = req.body;
  db.query(
    `update mijozlar set name = ? where id = ?`,
    [name, myId],
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

exports.deleteMijoz = (req, res) => {
  const myId = req.params.id;
  db.query(`delete from mijozlar where id = ?`, myId, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json({
      message: "successful",
    });
  });
};
