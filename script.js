$(document).ready(function(){
console.log("gracias");

//Recorrer el DOM 1.

$("input").parent().addClass("searching");

//Recorrer el DOM 2.

var pos = $("#myList li.current.bar").index();

console.log(pos);

var liremo = $("#myList li.current.bar");
$(liremo).removeClass();

$("#myList li").eq(5).addClass("current bar");

//Recorrer el DOM 3.

$("#slideshow li:first").addClass("current");

$("#slideshow li.current").siblings().addClass("disabled");

//Manipulación 1.

for(var i = 0; i < 5; i++){
$("<li>List item</li>").appendTo("#myList");
};

//Manipulación 2.

$("#myList li:odd").remove();

//Manipulación 3.

$("div.module:last").append("<h2>Yo soy otro elemento h2 agregado en jQuery :)</h2>");

$("div.module:last").append("<p>Y yo soy un elemento p agregado en jQuery igualmente :D</p>");

//Manipulación 4.

$('<option value="Wednesday">Wednesday</option>').appendTo("select");


//Manipulación 5.

$('<div class="module"></div>').insertAfter("div.module:last");

$('img').eq(1).clone().appendTo("div.module:last");

});