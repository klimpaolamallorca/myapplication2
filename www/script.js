function ewan(){
	var value= document.getElementById("input");
		value.setAttribute('class','showinput'); 

	var btn = document.getElementById('addbtn');
	btn.setAttribute('class','hideaddbtn');

	var save = document.getElementById('savebtn');
	save.setAttribute('class','showsavebtn');
}

function save(){
	var hugot = document.getElementById('input').value;

	var btn = document.getElementById('savebtn');
	btn.setAttribute('class','hidesavebtn');

	var input = document.getElementById('input');
	input.setAttribute('class','hideinput');
	var container = document.getElementById('initial');
	var item = document.createElement('p');
	item.innerText = hugot;
	item.setAttribute('class','item');

	container.appendChild(item);
}