const arrowHover = document.querySelector('#search_select');
const arrowImg	= document.querySelector('.block_arrow');

arrowHover.addEventListener('click', function(){
	arrowImg.classList.toggle('block_arrow_hover');
});

let searchInput = document.querySelector('.search');
const metaT = document.querySelector('.meta_tags');

metaT.addEventListener('click', function(e){
	
	i = e.target.innerText;
	if (i.length <= 20){
		searchInput.value = e.target.innerText;	
	}
	
});

const imgSearch = document.querySelector('.img_search');
const selectSearch = document.querySelectorAll('.search_select option');

imgSearch.addEventListener('click', function(){
	console.log(searchInput.value);

});
const body = document.querySelector('body');
let sel = document.querySelector("select").addEventListener('change', function (e) {
  if (e.target.value == '1'){
  	console.log("Button clicked: leave" + e.target.value);
  	console.log(searchInput.value);
  }
  else if (e.target.value == '2'){
  	console.log("Button clicked: leave" + e.target.value);
  }
  else if (e.target.value == '3'){
  	console.log("Button clicked: leave" + e.target.value);
  }

});
console.log('ssssssaaa');
