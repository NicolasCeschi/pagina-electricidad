let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

// menu de navecacion
btnMenu.addEventListener('click', ()=> {

	document.querySelector('.btn-menu i').classList.toggle('fa-times');

	if(activador){
		menu.style.left= "0";
		menu.style.transition ="0.5s";
		activador=false;
	}else{
		menu.style.left= "-100%";
		menu.style.transition ="0.5s";
		activador=true;
	}

});

//intercalar clase active
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element)=>{

	element.addEventListener('click', (event)=>{

		enlaces.forEach((link)=>{
			link.classList.remove('activo');
		});

		event.target.classList.add('activo');
	});
});

//efectos scroll
let prevScrollPost = window.pageYOffset;
let goTop =document.querySelector('.go-top');

window.onscroll = ()=>{

	let currenScrollPos = window.pageYOffset;

	//mostrar y ocultarmenu
	if(prevScrollPost > currenScrollPos){
		containerMenu.style.top = "0";
		containerMenu.style.transition = "0.5s";
	}else{
		containerMenu.style.top = "-60px";
		containerMenu.style.transition = "0.5s";
	}

	prevScrollPost=currenScrollPos;

	//mostrar y ocultar scroll estilos

	let arriba = window.pageYOffset;

	if(arriba <= 600){
		containerMenu.style.borderBottom = "none";
		goTop.style.right = "-100%";		
	}else{
		containerMenu.style.borderBottom = "3px solid #2271b3";
		goTop.style.right = "0";
		goTop.style.transition = "0.5s";
	}
}

goTop.addEventListener('click', ()=>{

		document.body.scrollTop = 0;    			//mozilla
		document.documentElement.scrollTop = 0;		//chorme y demas
});

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', ()=>{

		document.body.scrollTop = 800;				//mozila
		document.documentElement.scrollTop = 800;	//chorme y demas
});