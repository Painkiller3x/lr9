var name = prompt("Введіть ваше ім'я");
if(name==""){name="NoName";}
const deck ={"img//2-Foglet.png":2,
              "img//3-MMaker.png":3,
			  "img//4-Pellar.png":4,
			  "img//5-Mahakam.png":5,
			  "img//6-Roderick.png":6,
			  "img//7-Palmerin.png":7,
			  "img//8-Hillock.png":8,
			  "img//9-Vigo.png":9,
			  "img//10-Dettlaff.png":10,
			  "img//11-Dagon.png":11
			  };
var player=0, comp=0,count = 0;
btn.addEventListener('click', () => {
	var p1 = Math.floor(Math.random() * 10);
	var c1 = Math.floor(Math.random() * 10);
	document.getElementById('c1').setAttribute("src", Object.keys(deck)[p1]);
    document.getElementById('c2').setAttribute("src", Object.keys(deck)[c1]);
    player += Object.values(deck)[p1];
    comp += Object.values(deck)[c1];
	count++;
	if(count==3)
	{
        if(((player<=21)&&(player>comp))||((comp>21)&&(player<=21))){alert("Виграв:"+name)}
	      if(((comp<=21)&&(comp>player))||((player>21)&&(comp<=21))){alert("Виграв:бот")}
			if(((comp>21)&&(player>21))||(player==comp)){alert("Нічия")}
	}
	if(count>=3){document.getElementById("btn").disabled = true;}
	score.textContent = name +":"+player+" Comp:"+comp;
});
btn2.addEventListener('click', () => {
	document.getElementById("btn").disabled = false;
    player = 0;
	comp = 0;
	count = 0;
	score.textContent = name +":"+player+" Comp:"+comp;
});