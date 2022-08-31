import Staff from '../models/staff.js';
import express from 'express';
const router = express.Router();

router.get('/staff', (req, res, next) => {
  Staff.find().then(staff => {
    return res.json(staff);
  }).catch(next);
});

router.get('/staff/:id', (req, res, next) => {
  Staff.findById(req.params.id).then(staff => {
    return res.json(staff);
  }).catch(next);
});

router.post('/staff', function (req, res, next) {
  let staff = new Staff(req.body);
  staff.save().then(staff => {
    return res.json(staff);
  }).catch(next);
});

router.delete('/staff/:id', (req, res, next) => {
  Staff.deleteOne({ _id: req.params.id }).then(result => {
    return res.json(result);
  }).catch(next);
});

router.put('/staff/:id', (req, res, next) => {
  Staff.findByIdAndUpdate(req.params.id, req.body).then(staff => {
    return res.json(staff);
  }).catch(next);
});

export default router;