import {con} from '../server';

export abstract class BaseCtrl {

    abstract model: any;
    abstract dummy : any;

    getsql = (req, res) => {
      con.query(this.dummy, (err, result) => {
        if (err) throw err;
        res.send('Posts table created...');
      });
    }

    insert =  (req, res) => {
        let sql = `INSERT INTO ${this.model} SET ?`;
        let query = con.query(sql, req.body, (err, result) => {
            if(err) throw err;
            res.json(result);
        });
    };

    insertId =  (req, res) => {
        let sql = `INSERT INTO ${this.model} SET id = '${req.params.id}'`;
        let query = con.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
        });
    };

    select = (req, res) => {
        let sql = `SELECT * FROM ${this.model}`;
        let query = con.query(sql, (err, results) => {
            if(err) throw err;
            res.json(results);
        });
    };

    getbyId =  (req, res) => {
        let sql = `SELECT * FROM ${this.model} WHERE id = '${req.params.id}'`;
        let query = con.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
        });
    };

    delete = (req, res) => {
        let sql = `DELETE FROM ${this.model} WHERE id = '${req.params.id}'`;
        let query = con.query(sql, (err, result) => {
            if(err) throw err;
            res.send('Post deleted...');
        });
    };

}

export default BaseCtrl;
