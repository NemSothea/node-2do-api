var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todos',{
// 	text:{
// 		type: String
// 	},
// 	completed:{
// 		type:Boolean
// 	},
// 	completedAt:{
// 		type:Number
// 	}
// });

var Todo = mongoose.model('Todos',{
	name:{
		type: String,
		required:true,
		minlength:1,
		trim:true
	},
	age:{
		type:Number,
		default:null
	},
	location:{
		type: String,
		minlength:1,
		trim:true
	},
	completed:{
		type:Boolean,
		default:false
	},
	completedAt:{
		type:Number,
		default:null
	}
});
var newTodo = new Todo({
	name: 'Mana',
	age:23,
	location:'Phnom Penh',
});

newTodo.save().then((doc)=>{
	console.log('Save todo',doc);
},(e)=>{
	console.log('Unable to save todo');
});