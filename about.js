console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('ya did it boyo')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
let pic = document.querySelector('.cat-pic')
pic.addEventListener('mouseover', () => {
	alert('good job you person')
})