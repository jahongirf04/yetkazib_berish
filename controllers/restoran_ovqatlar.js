const db = require("../config/db_connection");

exports.createRestoran_ovqat = (req, res) => {
  const { ovqat_id, restoran_id, quantitiy, price } = req.body;
  db.query(
    `insert into restoran_ovqatlar (ovqat_id,restoran_id,quantitiy,price)
    values (?,?,?,?)`,
    [ovqat_id, restoran_id, quantitiy, price],
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

exports.getRestoran_ovqatlar = (req, res) => {
  db.query(`select * from restoran_ovqatlar`, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error" });
    }
    res.json(result);
  });
};

exports.getRestoran_ovqat = (req, res) => {
  const myId = req.params.id;
  db.query(
    `select * from restoran_ovqatlar where id = ?`,
    myId,
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Error" });
      }
      res.json(result);
    }
  );
};

exports.updateRestoran_ovqat = (req, res) => {
  const myId = req.params.id;
  const { ovqat_id } = req.body;
  db.query(
    `update restoran_ovqatlar set ovqat_id = ? where id = ?`,
    [ovqat_id, myId],
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

exports.deleteRestoran_ovqat = (req, res) => {
  const myId = req.params.id;
  db.query(
    `delete from restoran_ovqatlar where id = ?`,
    myId,
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Error" });
      }
      res.json({
        message: "successful",
      });
    }
  );
};
