
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unble to connect to mongodb server.');
	}
	console.log('Connect to mongodb server.');
	// db.collection('Users').find().count().then((count)=> {
	// 	console.log(`Total Users:${count}`);
	// },(err)=>{
	// 	if(err){
	// 		console.log('Unble to count Users',err);
	// 	}
	// });
	db.collection('Users').find({age:23}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	});
});
