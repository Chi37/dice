 "use strict";

function rollD4(){
	var d4 =Math.floor(Math.random()*4+1);
	var die4 = document.getElementById("die4");
	die4.innerHTML=d4;

	if (d4==1) {
		die4.innerHTML="You are a human.";
	}
	else if (d4==2){
		die4.innerHTML="You are an elf and your name is Buddy";
	}
	else if (d4==3){
		die4.innerHTML="You are an orc and a pretty ugly one, too";
	}
	else {

		die4.innerHTML="You are an dwarf...taller than average";
	}
	return d4;
}

function rollD8(){
	var d8 =Math.floor(Math.random()*8+1);
	var die8 = document.getElementById("die8");
	die8.innerHTML=d8;

if (d8==1) {
		die8.innerHTML="bard";
	}
	else if (d8==2){
		die8.innerHTML="barbarian";
	}
	else if (d8==3){
		die8.innerHTML="cleric";
	}
	else if (d8==4){
		die8.innerHTML="rogue";
	}
	else if (d8==5){
		die8.innerHTML="ranger";
	}
	else if (d8==6){
		die8.innerHTML="sorcerer";
	}
	else if (d8==7){
		die8.innerHTML="You're a wizard, Harry!";
	}
	else {

		die8.innerHTML="paladin";
	}
return d8;
}

//game//


function rollD6(){
	var d6 =Math.floor(Math.random()*6+1);
	var die6 = document.getElementById("die6");
	die6.innerHTML=d6;
	var HP = 100

	if (d6 <3) {
		die6.innerHTML="roll d10";
		// attack("d10");
		
			var attackd10 =rollD10();
			var displayHP=document.getElementById("displayHP");
			displayHP.innerHTML="HP is "+HP+".";
			HP= HP- attackd10;
	}
	else {
		die6.innerHTML="roll d20";
		// attack("d20");

			var attackd20= HP-=rollD20();
			var displayHP=document.getElementById("displayHP");
			displayHP.innerHTML="HP is "+attackd20+".";
		}
		//call function old - new//
	
}

function rollD10(){
	var d10 =Math.floor(Math.random()*10+1);
	var die10 = document.getElementById("die10");
	die10.innerHTML= "d10 "+d10+"";
	return d10;
}

function rollD20(){
	var d20 =Math.floor(Math.random()*20+1);
	var die20 = document.getElementById("die20");
	die20.innerHTML="d20 "+d20+"";
	
	if (d20< 18) {	
	}
	else {

		var d12 =Math.floor(Math.random()*12+1);
		die12.innerHTML="d12 "+d12+"";
		var totalcrit = d20+d12;
		var crit =document.getElementById("crit");
		crit.innerHTML="critial hit. d12 was added to your d20 roll. Total attack is "+totalcrit+".";
		return totalcrit;
	}
	return d20;
}


function master () {
	HP = 100;
while (HP>0) {
	
	rollD6();
	rollD10();
	rollD20();
}
return master(HP);// return HP;
}


master();



