const doc = document;
const canvas = doc.querySelector ('#canv');
const ctx = canvas.getContext ('2d');

const system = {
	width: canvas.getAttribute ('width'),
	height: canvas.getAttribute ('height'),
	currentTool: '',
	currentColor: 'black',
	brushSize: 5
}

function reRenderSystem (obj, elem, action) {
	obj [elem] = action
}

function getCoords (evt) {
	doc.querySelector ('#xCoord').innerText = evt.offsetX
	doc.querySelector ('#yCoord').innerText = evt.offsetY
}

	function clicker (evt) {
		if (evt.target.tagName === 'I') {
			clearHover();
			evt.currentTarget.activeElement.classList.add('tool-button-active');
			reRenderSystem (system, 'currentTool', evt.currentTarget.activeElement.id);
		}
	if (evt.target.classList.contains ('tool-button')) {
		clearHover();
		evt.target.classList.add('tool-button-active');
		reRenderSystem (system, 'currentTool', evt.target.id);

	}

}
//убирает наведение
function clearHover() {
	let $buttons = document.querySelectorAll('.tool-button');
	for (let i = 0;i<$buttons.length;i++) {
		if ($buttons[i].classList.contains('tool-button-active')){
			$buttons[i].classList.toggle('tool-button-active');
		}
	}
}

function inputer (evt) {
	if (evt.target.id === 'size-select') {
		reRenderSystem (system, 'brushSize', evt.target.value)
	} else if (evt.target.id ==='color') {
		reRenderSystem (system, 'currentColor', evt.target.value)
	}
}

//выбирает рис. функцию, в зав от текущего инструмента
function startDraw (evt) {
	if (system.currentTool === 'pencil') drawLine (evt);
	if (system.currentTool === 'fill') fill(evt);
	if (system.currentTool === 'brush') drawBrush(evt);
	if (system.currentTool === 'spray') drawSpray(evt);
	if (system.currentTool === 'eraser') eraser(evt);

}

function endDraw () {
	canvas.onmousemove = null
}
//функция заливки
function fill(evt) {

	ctx.fillStyle = system.currentColor;
	ctx.fillRect (0, 0, system.width, system.height)

}
//рисовательные функции
function drawLine (evt) {
	canvas.onmousemove = (evt) => {
		ctx.fillStyle = system.currentColor;
			ctx.fillRect (+doc.querySelector ('#xCoord').innerText, +doc.querySelector ('#yCoord').innerText, system.brushSize, system.brushSize);
	}
}
//функция ластик
function eraser(evt) {
	canvas.onmousemove = (evt) => {
		ctx.fillStyle = 'white';
		ctx.fillRect (+doc.querySelector ('#xCoord').innerText, +doc.querySelector ('#yCoord').innerText, system.brushSize, system.brushSize);
	}
}
//функция кисти
function drawBrush(evt){
	canvas.onmousemove = (evt) => {
		ctx.fillStyle = system.currentColor;
		ctx.beginPath();
		ctx.arc(+doc.querySelector ('#xCoord').innerText, +doc.querySelector ('#yCoord').innerText, system.brushSize, 0, Math.PI*2, false);
		ctx.closePath();
		ctx.fill();
	}
}
//функция балончик
function drawSpray(evt){
	canvas.onmousemove = (evt) => {
		ctx.fillStyle = system.currentColor;
		for (let i = 0; i<5;i++ ){
			ctx.fillRect (+doc.querySelector ('#xCoord').innerText + (system.brushSize * i), +doc.querySelector ('#yCoord').innerText + (system.brushSize * i), system.brushSize, system.brushSize);
		}

	}
}
//вывод даты
let $date = document.querySelector('.date');
setInterval(() => {$date.innerHTML = new Date().toTimeString().slice(0,8);},1000);

doc.addEventListener ('input', inputer);
doc.addEventListener ('click', clicker);
canvas.addEventListener ('mousemove', getCoords);
canvas.addEventListener ('mousedown', startDraw);
canvas.addEventListener ('mouseup', endDraw);


