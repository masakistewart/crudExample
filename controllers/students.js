var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
require('locus');

// For index
router.get('/',function(req,res) {
	knex('students').then(function(data) {
		res.locals.things = data;
		console.log(data);
		res.render('pages/index');
	})
});

// For new User
router.get('/new',function(req,res) {
  res.render('pages/new');
});

//for editing user
router.get('/:id/edit',function(req,res) {
	knex('students').where({id: req.params.id}).then(function(data) {
		res.locals.things = data;
		res.render('pages/edit');
	})
 });

router.put('/:id',function(req,res) { 
	var name = req.body.userName
  knex('students').where('id', req.params.id).update({name: name}).then(function() {
  	console.log('done!')
  	res.redirect('/students');
  })
 });

// For New User
router.post('/',function(req,res) {
	var name = req.body.userName;
	console.log(name);
	knex('students').insert({name: name}).then(function(data){
		res.redirect('/students');
	}).catch(function(err){
		console.log(err);
	});
});

// for delete
router.get('/:id/delete',function(req,res) { 
  knex('students').where({id: req.params.id}).then(function(data) {
		res.locals.things = data;
		res.render('pages/delete');
	})
});

// for Delete
router.delete('/:id',function(req,res) { 
  knex('students').where('id', req.params.id).del().then(function() {
  	res.redirect('/students');
  })
 });

module.exports = router;