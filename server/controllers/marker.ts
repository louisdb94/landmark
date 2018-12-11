import {con} from '../server';
import * as  mysql from 'mysql';
// import {BaseCtrl} from './base';


export default class MarkerCtrl  {

  model = 'marker';
  dummy = 'markers';

  select = (req, res) => {
      let sql = `SELECT * FROM ${this.model}`;
      let query = con.query(sql, (err, result) => {
          if(err) throw err;
          res.json(result);
      });
  };

  insert =  (req, res) => {

      let sql = `INSERT INTO ${this.model} SET ?`;
      let query = con.query(sql, req.body, (err, result) => {
          if(err) throw err;
          res.json(result);
      });
  };

  getbyId =  (req, res) => {
      let sql = `SELECT * FROM ${this.model} WHERE id = '${req.params.id}'`;
      let query = con.query(sql, (err, result) => {
          if(err) throw err;
          res.json(result);
      });
  };

  getbyName =  (req, res) => {
      let sql = `SELECT * FROM ${this.model} WHERE user = '${req.params.user}'`;
      let query = con.query(sql, (err, result) => {
          if(err) throw err;
          res.json(result);
      });
  };

}
