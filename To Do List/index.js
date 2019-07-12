var input = document.getElementById("myText");
var item = document.getElementById("myList");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   showVal();
  }
});
item.addEventListener("click", function(e) {
  e.target.parentElement.removeChild(e.target);
});

function showVal(){
  var node = document.createElement("LI");
  var textnode = document.createTextNode(input.value);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
  input.value='';
};

