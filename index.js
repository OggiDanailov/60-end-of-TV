var root = document.getElementById('root')

for(i = 0;i<64;i++){
	var div = document.createElement('DIV')
	div.style.width = '75px'
	div.style.height = '75px'
	div.style.display = 'inline-block'
	// div.style.border = '1px solid'
	root.appendChild(div)
	if(i % 2 === 0 && i%4 === 0){
		div.style.backgroundColor = 'white'
	}else if(i % 2 === 0){
		div.style.backgroundColor = 'black'
	} else {
		div.style.backgroundColor = 'grey'
	}
	
	

}






	





















