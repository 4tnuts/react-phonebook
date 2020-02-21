const express = require('express');
const router = express.Router();
const PhoneBook = require('../models/phonebook');

router.get('/', (req, res, next) => {
 PhoneBook.find({}, (err, contacts) => {
   if(err) return res.status(500).send(err);
   res.status(201).json(contacts);
 })
})

router.post('/', (req, res, next) => {
  const { id, name, phonenumber } = req.body;
  PhoneBook.create({ id, name, phonenumber }, (err, contact) => {
    if(err) return res.status(500).send(err);
    res.status(200).json(contact)
  })
})

router.delete('/:id', (req, res, next) => {
  const id  = req.params.id;
  PhoneBook.findOneAndDelete(id, (err, contactId) => {
    if(err) return res.status(500).send(err)
    res.status(200).json(contactId);
  })
})

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  PhoneBook.findByIdAndUpdate(id, {$set: {name : req.body.name, phonenumber : req.body.phonenumber}}, function (err, contact) {
    if (err) return res.status(500).json(err);
    res.status(200).json(contact);
});
})


module.exports = router;
