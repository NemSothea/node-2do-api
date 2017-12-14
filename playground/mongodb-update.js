const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unble to connect to mongodb server.');
	}
	console.log('Connect to mongodb server.');
	//findOneAndDelete
	db.collection('Users').findOneAndUpdate({
		_id:new ObjectID('5a31e9482d67240824942766')},
		{
		$set:{
			name:'Chan Odom'
		},
		$inc:{
			age:2
		}
	}
	,{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	});
	
});