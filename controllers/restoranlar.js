const db = require("../config/db_connection");

exports.createRestoran = (req, res) => {
  const { name } = req.body;
  db.query(
    `insert into restoranlar (name)
    values (?)`,
    [name],
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

exports.getRestoranlar = (req, res) => {
  db.query(`select * from restoranlar`, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json(result);
  });
};

exports.getRestoran = (req, res) => {
  const myId = req.params.id;
  db.query(`select * from restoranlar where id = ?`, myId, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json(result);
  });
};

exports.updateRestoran = (req, res) => {
  const myId = req.params.id;
  const { name } = req.body;
  db.query(
    `update restoranlar set name = ? where id = ?`,
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

exports.deleteRestoran = (req, res) => {
  const myId = req.params.id;
  db.query(`delete from restoranlar where id = ?`, myId, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json({
      message: "successful",
    });
  });
};
