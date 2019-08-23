var todoList = {
	todos: [],
		addTodo: function(todoText) {
		this.todos.push({
		  todoText:todoText,
		  completed: false
		});
	this.displayTodo()
	},
	
	/*displayTodo: function() {
	  if (this.todos.length>0){
		this.todos.map(a=>{
		  if(a.completed===false){
		      console.log("( ) "+a.todoText)
		  }else{
		      console.log("(x) "+a.todoText)
		  }
		  
		});
	    
	  }else{
	    console.log("No todos for now")
	  }
	},
*/
	/*displayTodo: function() {
		console.log(this.todos);
	},
	*/
  	displayTodo: function() {
  	var todoUl=document.querySelector("ul");
	  todoUl.innerHTML="";
	  if (this.todos.length>0){
		this.todos.map((a,i)=>{
		var todoLi=document.createElement("LI");
		var dltbtn=document.createElement("button");
		dltbtn.textContent="DELETE";
		dltbtn.className="deleteclass"
		todoLi.id=i
		todoLi.textContent=a.todoText;
		todoLi.appendChild(dltbtn);
		//var textLi=document.createTextNode(a.todoText);
		/*todoLi.appendChild(textLi);*/
		if(a.completed===false){
		todoUl.appendChild(todoLi);
		}
		else{
		todoLi.classList.add("strikeOut")
		todoUl.appendChild(todoLi);}
		})
	  }else{
	    console.log("No todos for now")
	  }
	},
	changeTodo: function(pos, newTodoText) {
		this.todos[pos].todoText = newTodoText;
		this.displayTodo()
	},
	
	toggleCompleted: function(pos) {
		this.todos[pos].completed = !this.todos[pos].completed;
		this.displayTodo()
	},
	
	deleteTodo: function(pos) {
		this.todos.splice(pos, 1);
		this.displayTodo()
	},
	
	toggleAll: function() {
		if (this.todos.every(a=>a.completed===true)){
		  this.todos.map(a=>a.completed=false)
		}else{
		  this.todos.map(a=>a.completed=true)
		}
		this.displayTodo()
	}
}

/*var liChange=document.getElementById("notodo");
liChange.addEventListener("click", function(event) {
    //event.target.innerHTML=event.target.innerHTML.strike()
    event.target.toggleClass("strike")
});*/
var input = document.getElementById("input");
var todoUl=document.querySelector("ul");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13){
    todoList.addTodo(input.value);
/*    var todoLi=document.createElement("LI");
		var textLi=document.createTextNode(input.value);
		todoLi.appendChild(textLi);
		todoLi.textContent=input.value;
		todoUl.appendChild(todoLi);*/
    input.value="";
  }
});


todoUl.addEventListener("click", function(e) {
    if (e.target.tagName == 'BUTTON') {
    var num1=e.target.parentElement.id;
    todoList.deleteTodo(num1);}
    else if (e.target.tagName == 'LI'){
      var num2=e.target.id;
      todoList.toggleCompleted(num2)
     // e.target.tagName.setAttribute('strikeOut');
    }
});
/*
var displayButton=document.getElementById("display");
var toggleAllButton=document.getElementById("toggleAll");
displayButton.addEventListener("click", function(){
  todoList.displayTodo()});
toggleAllButton.addEventListener("click", function(){
  todoList.toggleAll()});*/
  
var handlers = {
/*	displayTodo: function(){
		todoList.displayTodo();
	},*/
	toggleAll: function(){
		todoList.toggleAll();
	},
/*		deleteTodo: function(){
		var deleteInput = document.getElementById("delete");
		todoList.deleteTodo(deleteInput.value);
		deleteInput.value=""
	},*/
	toggleCompleted: function(){
	  var togglecompletedInput = document.getElementById("togglecompleted");
		todoList.toggleCompleted(togglecompletedInput.value);
		togglecompletedInput.value="";
	},
	changeTodo: function(){
	  var changeNumber = document.getElementById("changenumber");
	  var changeInput = document.getElementById("changeinput");
	  todoList.changeTodo(changeNumber.value,changeInput.value);
	  changeNumber.value="";
	  changeInput.value="";
	}
	
  };
