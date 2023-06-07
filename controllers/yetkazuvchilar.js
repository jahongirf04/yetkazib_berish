const db = require("../config/db_connection");

exports.createYetkazuvchi = (req, res) => {
  const { name } = req.body;
  db.query(
    `insert into yetkazuvchilar (name)
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

exports.getYetkazuvchilar = (req, res) => {
  db.query(`select * from mijozlar`, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json(result);
  });
};

exports.getYetkazuvchi = (req, res) => {
  const myId = req.params.id;
  db.query(`select * from mijozlar where id = ?`, myId, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json(result);
  });
};

exports.updateYetkazuvchi = (req, res) => {
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

exports.deleteYetkazuvchi = (req, res) => {
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
