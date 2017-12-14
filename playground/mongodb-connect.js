
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,db) => {
	if(err){
		return console.log('Unable to connect mongodb server.');
	}
	console.log('connected to mongodb server.');
	//insert new record to Todos table
	/*db.collection('Todos').insertOne({
		text: 'Nothing to do then node',
		completed:false
	},(err,result)=>{
		if(err){
			return console.log('Unable to insert todo',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));
	});
	*/
	//insert new record to User table
	db.collection('Users').insertOne({
		name:'Kitou',
		age:23,
		location:'Phnom Penh',
		completed: false
	},(err,result)=>{
		if(err){
			return console.log('Unable to insert..',err);
		}
		console.log(JSON.stringify(result.ops,undefined,2));	
	});



	db.close();
});