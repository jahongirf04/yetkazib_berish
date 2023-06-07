const db = require("../config/db_connection");

exports.createOvqat = (req, res) => {
  const { name } = req.body;
  db.query(
    `insert into ovqatlar (name)
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

exports.getOvqatlar = (req, res) => {
  db.query(`select * from ovqatlar`, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json(result);
  });
};

exports.getOvqat = (req, res) => {
  const myId = req.params.id;
  db.query(`select * from ovqatlar where id = ?`, myId, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json(result);
  });
};

exports.updateOvqat = (req, res) => {
  const myId = req.params.id;
  const { name } = req.body;
  db.query(
    `update ovqatlar set name = ? where id = ?`,
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

exports.deleteOvqat = (req, res) => {
  const myId = req.params.id;
  db.query(`delete from ovqatlar where id = ?`, myId, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json({
      message: "successful",
    });
  });
};
