import { Request, Response } from 'express';
import UserModel from '../models/UserModel';

export default {
  create: (req: Request, res: Response) => {
    const user = new UserModel({
      age: req.body.age,
      email: req.body.email,
      forename: req.body.forename,
      password: req.body.password,
      surname: req.body.surname,
      team: req.body.team,
    });

    user.save()
      .then(result => {
        return res.json({ success: true, result });
      })
      .catch(err => {
        return res.json({ success: false, result: err });
      });
  },
  delete: (req: Request, res: Response) => {
    UserModel.remove({ _id: req.params.userId })
      .then(result => {
        if (!result) {
          return res.json({
            result: 'No user found',
            success: false,
          });
        }
        return res.json({ success: true, result });
      })
      .catch(err => res.json({ success: false, result: err }));
  },
  retrieve: (req: Request, res: Response) => {
    UserModel.find()
      .then(result => {
        if (!result) {
          return res.json({
            result: 'No results found',
            success: false,
          });
        }
        return res.json({ result, success: true });
      })
      .catch(err => res.json({ success: false, result: err }));
  },
  retrieveOne: (req: Request, res: Response) => {
    UserModel.findById(req.params.userId)
      .then(result => {
        if (!result) {
          return res.json({
            result: 'No user with that ID found',
            success: false,
          });
        }
        return res.json({ result, success: true });
      })
      .catch(err => res.json({result: err, success: false }));
  },
  update: (req: Request, res: Response) => {
    UserModel.updateOne(
      { _id: req.params.userId },
      req.body,
      (err, result: { ok: number, n: number, nModified: number }) => {
        if (err) {
          return res.json({ success: false, result: err });
        }
        return res.json({ success: true, result: result.ok });
      });
  },
};
