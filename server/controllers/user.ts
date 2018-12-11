import {con} from '../server';
import * as  mysql from 'mysql';
// import {BaseCtrl} from './base';


export default class UserCtrl  {

  model = 'user';
  dummy = 'users';

  select = (req, res) => {
      let sql = `SELECT * FROM ${this.model}`;
      let query = con.query(sql, (err, result) => {
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
      let sql = `SELECT * FROM ${this.model} WHERE username = '${req.params.username}'`;
      let query = con.query(sql, (err, result) => {
          if(err) throw err;
          res.json(result);
      });
  };

  updateAll = (req, res) => {
    let sql = `UPDATE ${this.model} SET username = '${req.body.username}', password = '${req.body.password}' WHERE id = ${req.body.id}`;
    let query = con.query(sql, (err, result) => {
        if(err) throw err;
        res.send('Post updated...');
    });
  };
}
