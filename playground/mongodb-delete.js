
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unble to connect to mongodb server.');
	}
	console.log('Connect to mongodb server.');
	//deleteMany
	// db.collection('Todos').deleteMany({text:'iMax'}).then((result)=>{
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text:'Learning node'}).then((result)=>{
	// 	console.log(result);
	// });

	//findAndDelete
	db.collection('Users').findOneAndDelete({_id:new ObjectID('5a31ddeececcb707fd982a3b')}).then((result)=>{
		console.log(JSON.stringify(result,undefined,2));
	});
});
