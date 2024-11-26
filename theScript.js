
var row = [], zero = [], r1 = [], r2 = [], r3 = [], r4 = [], p2 = [];

var stelen = 0, stdlen = 0, stclen = 0, st3len = 0;


//ray0 represents the numercial value 0-9 for 0|1|ray2 in-row patterns 
const ray0 = ["0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"]; //0-15 //13 options
	 
const ray1 = ["0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //0-26 //24 options <!--loop/times counter represented symbol -->

const ray2 = ["0", "1", "001101", "01011", "10100", "0110", "1001", "010", "101", "011", "100", "10", "01", "11", "00"]; //capped@13options
//patterns <!-- may be swapped for lowercase number + uppercase Loop-count  -->

var ray3 = []; //built dynamically later
//palandrones of ray2

var ray4 = []; //built dynamically later
//reversed ray2's

var ray5 = []; //built dynamically later
//ray3+ray3reversed

var ray6 = []; //built dynamically later
//reversed ray2 doubled + it's palaendrone side


//var ray7 = ["7", "6", "5", "3", "2", "1", "0"]; //this order is important  //[only 4 is missing]

//var ray8 = ["0", "1", "o", "p", "q", "r", "s"]; //0 & 1 are unused 


//generate patterns to replace for compression
var i = 0;
var bagged1 = 0;

do{
 var hit = ray2[i];
 var y = hit.length - 1;
 var hitfound = '';

for(let x = 0;x<hit.length;x++){
  hitfound += hit[y];
  
y = y - 1;
}
if(i<2){
  ray3.push(hit+""+hitfound);
  ray4.push(hitfound);
  ray6.push(hitfound+""+hitfound+""+hit+""+hit);
 }
else{
 if(ray3.length < 10 && ray2.includes(hit+""+hitfound) === false && ray3.includes(hit+""+hitfound) === false){
  ray3.push(hit+""+hitfound);
 }
 if(ray6.length < 10 && ray2.includes(hit+""+hitfound) === false && ray3.includes(hitfound+""+hitfound+""+hit+""+hit) === false && ray6.includes(hitfound+""+hitfound+""+hit+""+hit) === false){
  ray6.push(hitfound+""+hitfound+""+hit+""+hit);
 }
 if(ray4.length < 10 && ray2.includes(hitfound) === false && ray6.includes(hitfound) === false && ray3.includes(hitfound) === false && ray4.includes(hitfound) === false){
  ray4.push(hitfound);
 }
 else {
  var barry = 2, sarry = 2, harry = 2;
  
  do{
  var crew = ray2[barry];
  var zed = crew.length - 1;
  var shot = '';
   for(let few = 0;few<crew.length;few++){
    shot += crew[zed];
	
	zed = zed - 1;
   } 
   if(ray4.length < 8 && ray2.includes(shot+""+shot) === false && ray3.includes(shot+""+shot) === false){
    if(ray4.length < 8  && ray4.includes(shot+""+shot) === false && ray6.includes(shot+""+shot) === false){
     ray4.push(shot+""+shot);
	}
   }
   
   barry = barry + 1;
   
   if(barry > 9){
   var rebrach = ray2[harry];
   
    if(ray4.length < 10 && ray2.includes(shot+""+rebrach+""+rebrach+""+shot) === false && ray3.includes(shot+""+rebrach+""+rebrach+""+shot) === false){
     if(ray4.length < 10  && ray4.includes(shot+""+rebrach+""+rebrach+""+shot) === false && ray6.includes(shot+""+rebrach+""+rebrach+""+shot) === false){
      ray4.push(shot+""+rebrach+""+rebrach+""+shot);
	 }
    }
   
    harry = harry + 1;
	if(harry > ray2.length){
	 break;
	}
   
   }
  }while(ray4.length < 10);
 }

 if(ray3.length === 9 && ray4.length === 9 && ray6.length === 9){
  bagged1 = 2;
 }
 else{
  bagged1 = 0;
 }
}

i = i + 1;
}
while(i<ray2.length && bagged1<1);


var i2 = 0;
var e2 = 2;
var e3 = 2;
var bagged2 = 0;
do{
 var hit2 = ray3[i2];
 var y2 = hit2.length - 1;
 var hitfound2 = '';

for(let x2 = 0;x2<hit2.length;x2++){
  hitfound2 += hit2[y2];
  
y2 = y2 - 1;
}

if(i2<2){
 ray5.push(hit2+""+hitfound2);
 bagged2 = bagged2 + 1;
}
else{

 if(i2<ray3.length && ray6.includes(hit2+""+hitfound2) === false && ray5.length < 10){
  ray5.push(hit2+""+hitfound2);
  bagged2 = bagged2 + 1;
 }

else if(e2<ray3.length && i2>=ray3.length){
  
 if(ray6.includes(hit2+""+hitfound2+""+hit2) === false){
  ray5.push(hit2+""+hitfound2+""+hit2);
  bagged2 = bagged2 + 1;
 }

e2 = e2 + 1;
}
else{
 if(ray6.includes(hit2+""+hitfound2+""+hitfound2) === false){
  ray5.push(hit2+""+hitfound2+""+hitfound2);
  bagged2 = bagged2 + 1;
 }

e3 = e3 + 1;

}
 
 
 
 
 }

 i2 = i2 + 1;
 
 }
 while(bagged2<10);



//next will set smallest to the right
//then remove new slots of 0 & 1
//then reverse the array
//add on 1 & 0 
//finally reverse the array again

ray3.sort(function(a,b){return b-a}); //sort Biggest->Smallest

ray3.pop(); //remove last entry ("0" rep slot)
ray3.pop(); //remove last entry ("1" rep slot)
ray3.reverse(); //Smallest->Biggest 
ray3.push("1"); //Add "1" slot with a "1"
ray3.push("0"); //Add "0" slot with a "0"
ray3.reverse(); //sets 0, 1, biggest -> smallest

ray4.sort(function(a,b){return b-a});

ray4.pop();
ray4.pop();
ray4.reverse();
ray4.push("1");
ray4.push("0");
ray4.reverse();
//sets 0, 1, biggest -> smallest

ray5.sort(function(a,b){return b-a});

ray5.pop();
ray5.pop();
ray5.reverse();
ray5.push("1");
ray5.push("0");
ray5.reverse();
//sets 0, 1, biggest -> smallest

ray6.sort(function(a,b){return b-a});

ray6.pop();
ray6.pop();
ray6.reverse();
ray6.push("1");
ray6.push("0");
ray6.reverse();
//sets 0, 1, biggest -> smallest



//next sets are for michelle compression
const ray7 = ["0","1","7","6","5","3","2"]; //use to create same-in-row patterns 
//Mchelle patterns  <!-- replace with ray8 of equal position + Uppercase Loop-count -->

const ray8 = ["0","1","o","p","q","r","s"]; //use to determine where in ray7 we are referencing

//what is stopping us from using lowercase+lowercase to show two units from ray7 then using uppercase to show the number of times seen in a row? //q //Q //upgrade 


<!-- new ideal put all possible in rays t-w so output would be 2-9 + t-w + B-Z  so example 2tD would be the 3rd object in ray9 seen 4 times in a row  -->

//if t is seen once NO CAP LETT NEEDED

//ray9, 10 & 11 can be formed from the inital lookup table (the raw exchange of michelle code per character seen)  //NOTE NOTE NOTE UPGRADE upgrade 

const ray9 = ["0","1","0.001","-500.1","-505.11","-330.1","220.1"];  //t //limit is length of ray8
//Longest Michelle Codes + "0.3" & "0.5" [the 2 extra are very common Michelle Codes]


const ray10 = ["0","1","770","50.1","55.01","60.01","0.3"];  //u //limit is length of ray8
//Most Common Possible Michelle Codes + "2" [2 is an offset determiner cause it's used but not always picked up]


const ray11 = ["0","1","0.2","0.4","0.5","1100","111"]; //v //limit is length of ray8 
//Remaining Michelle Codes + "5" & "3" [5 & 3 are offset determiners to help hide trinary data] 


//after these rays (biggest ray to smallest ray by Number), do the same-in-pattern search for 1,0 & ray7 (2-6)


//next sets are for lane-confusion compression
const ray12 = ["===;","==;1;0;","==;0;1;","==;2;","=;1;0;","=;0;1;","=;2;",";2;",";1;",";0;"]; //a //up to 9 options
//inital mixing patterns

const ray13 = ["==","=",";1",";0","1;","0;",";.",";",".","2"]; //A //up to 9 options
//remainer mixing patterns

const ray14 = ["0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


<!-- above are the patterns for michelle between/front mixing -->
	 
	 

function work(){
var getit = document.getElementById('here').value;
var jim = '', dooby = ''; goody = '', gary = 0, carol = 1, otherjim = 0, notjim = '';


var fullstop = 0, d0 = [], d5 = [], d6 = [], d7 = [], d8 = [], d9 = [], d1 = [], d2 = [], d3 = [], d4 = [], p1 = [];
                                                             


	var st1 = [], st2 = [], st3 = [], st4 = [], st5 = [], st0 = [], st6 = [], st7 = [], st8 = [], st9 = [], st10 = [], note1 = 0, note2 = 0, note3 = 0, note4 = 0, note0 = 0, note5 = 0, note6 = 0, note7 = 0, note8 = 0, note9 = 0, note10 = 0, goober = 0;

    var	ad1 = [], ad2 = [], ad3 = [], ad4 = [], ad5 = [], ad6 = [], ad7 = [], ad8 = [], ad9 = [], ad10 = [], gg1 = [], gg2 = [], gg3 = [], gg4 = [], gg5 = [], gg6 = [], gg7 = [], gg8 = [], gg9 = [], gg10 = [], s1pos = [], s2pos = [], s3pos = [], s4pos = [], s5pos = [], s6pos = [], s7pos = [], s8pos = []; //, s9pos = [], s10pos = [];
	
	var oof = 0;
	
    var bear = 0; //goo = 0, gru = 0, goot = 0, gool = 0, goot2 = 0, gool2 = 0, gru2 = 0, goo2 = 0, rar1 = 0, rar2 = 0, rar3 = 0, rar4 = 0, 
	
	var smith = 4; //pull from the hash __x#_# <!-- before the "x" -->
    var	stan = Math.abs(smith*2);
    var	smith2 = smith, stan2 = stan;
	
	var jen = 0, jan = 3, sam = 1;
	
	var karran = 2; //for diagonal style 3 start pos
	
	var sarran = 2; //for diagonal style 4 starting row
		
  var kimmy = '',  dj = '', steph = '', michelle = '', heatmap = []; //steph tracks 
  var  z = 0, b = 0, zinc = 1, delta = [];
  
 
  
  //get's subgraph
  var graph = graphit(getit); 

  var regraph = graph.match(/(0|1)/g).toString().replace(/\,/g, '');
  
  

for (var i = 0; i < regraph.length; i++) {   //per click actions
      dooby = regraph[i].charCodeAt(0).toString(2);
      goody = parseInt(dooby, 2).toString().replace(/(\.|\+|\D)/g, ''); //decimal output
	
  jim = notjim + "" + jim + "" + Math.ceil(Math.trunc(Number(goody) * 3.14) + goody.length) % 2;
  
   notjim = ''; <!-- don't need to store this data anymore -->
   
   <!-- //may need to place exchange here -->
   
   
  
  if(jim.length >= 18){ <!-- handles 18 character limit -->
  
   if(Math.trunc((jim.toString().match(/1/gm))%2) > 0){ <!-- this injects in the next click the parity bit that is the equal to the previous inputs (as a whole) -->
    notjim = Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1) + 2 ) % 2; <!-- should offset when 1's are even -->
   }
   else{
    notjim = Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1) + 1 ) % 2; <!-- odd number of 1's -->
   }
   
   jim = jim.slice(0,0); <!-- resets jim for next click -->
  otherjim = otherjim + 1;
  
  }
  
  
  
<!-- below is testing accuracy of my 7,4 haming code implication in js -->

//getting repeating bits from the active changing of input even just upward (no removal)



	
} //end of for loop


	 <!-- ree === gewm (0)
	 <!-- ref === gew (1)
	 <!-- ret === gex (2)
	 <!-- reg === gez (3)
	 <!-- rey === gwet (7)
	 
	 var c = 0;
  
 <!-- find the state changes -->
	   stelen = Number(r1.length); <!--This is the real Row 1 -->
	   stdlen = Number(r2.length); <!--This is the real Row 2 -->
	   stclen = Number(r3.length); <!--This is the real Row 3 -->
	   st3len = Number(zero.length); <!-- this is the real Row 4 -->
	   
	 var target2 = 1; <!--target2 should never be 0 -->
	 var target = 0, guide = 0, currlen  = 0; 
	 
	 
	 <!-- next are head moving variables -->
	// var ree = 0, ref = 1, ret = 2, reg = 3, rey = 7;
	 var pd1 = '', pd2 = '', pd3 ='', pd4 = '',  gewm = 1, gex = 2,  xwem = 2; //gwom = 0, gew = 1, gez = 3, gwet = 7,
	 
	 <!-- ree === gewm (0) -->
	 <!-- ref === gew (1) -->
	 <!-- ret === gex (2) -->
	 <!-- reg === gez (3) -->
	 <!-- rey === gwet (7) -->
	 
	 
	 //I'm here im here Im here i'm here   Getting Extra data at end 
	 
	 
	  
	   if(target2 < stelen){
	  target2 = target + 1; <!-- To align for internal loops -->
	 
	  if(target === 0 && guide === 0){ <!-- if in "cleared" state -->
	    st1.push(r1[target]); <!-- set key bit -->
	   guide = 1;     <!--move guide for next operation -->
	  }
	do{ //flipped if and do statements
	   if(r1[target] ===  r1[target2]) { <!-- is this the correct ===|== method?--> // Q op q op Question 
	    st1.push(1);
	   }
	   else if(isFinite(r1[target2]) === false || isNaN(r1[target2]) === true){
	    c = c + 1;
		}
	   else {
	    st1.push(0);
       }

	  target = target + 1;
	  target2 = target + 1;
	  }
	   
	  
	  
	 //}
	  while(target2 < stelen); 
	target = 0, guide = 0, target2 = 1;
	  }//remove if flip if/do back 
	 
	 
	 
  
	  
	 if(target2 < stdlen){
	  target2 = target + 1;
	 
	  if(target === 0 && guide === 0){ <!-- if in "cleared" state -->
	    st2.push(r2[0]); <!-- set key bit -->
	   guide =  1;    <!--move guide for next operation -->
	  }
	  
	  do{
	   if(r2[target] === r2[target2]) { <!-- is this the correct ===|== method?-->
	    st2.push(1);
	   }
	   else if(isFinite(r2[target2]) === false || isNaN(r2[target2]) === true){
	    c = c + 1;
		}
       else {
	    st2.push(0);
       }  	 
	   
	  target = target + 1;
	  target2 = target + 1;
	  } 
	  
	 
	 
	// }
	 while(target2 < stdlen);
	target = 0, guide = 0, target2 = 1;
	 }//remove if flip if/do back 

	 
	 
	 
	 
	 if(target2 < stclen){
	  target2 = target + 1;
	 
	  if(target === 0 && guide === 0){ <!-- if in "cleared" state -->
	    st3.push(r3[0]); <!-- set key bit -->
	   guide =  1;    <!--move guide for next operation -->
	  }
	  
	  do{
	   if(r3[target] === r3[target2]) { <!-- is this the correct ===|== method?-->
	    st3.push(1);
	   }
	   else if(isFinite(r3[target2]) === false || isNaN(r3[target2]) === true){
	    c = c + 1;
		}
       else {
	    st3.push(0);
       }  	 
	   
	  target = target + 1;
	  target2 = target + 1;
	  } 
	  
	 
	 
	 //}
	 while(target2 < stclen);
	target = 0, guide = 0, target2 = 1;
	  }//remove if flip if/do back 
	 
	
	   
	 if(target2 < st3len){ 
	  target2 = target + 1;
	 
	  if(target === 0 && guide === 0){ <!-- if in "cleared" state -->
	    st0.push(zero[0]); <!-- set key bit -->
	   guide = 1;    <!--move guide for next operation -->
	  }
	  
	  do{
	   if(zero[target] === zero[target2]) { <!-- is this the correct ===|== method?-->
	    st0.push(1);
	   }
	   else if(isFinite(zero[target2]) === false || isNaN(zero[target2]) === true){
	    c = c + 1;
		}
       else {
	    st0.push(0);
       } 
	   
	  target = target + 1;
	  target2 = target + 1;
	  }  	
	  
	 
	 //}
	 while(target2 < st3len);
	target = 0, guide = 0, target2 = 1;

	  }//remove if flip if/do back 
  
  
	 
	 
     //sets system length for the graph
	 
	 var gewm2 = gewm*xwem;
	 var gex2 = gex*xwem;
	 
	   
	var garry = jim.length;
	var notjim = jim;
	
	
	//check A1 + A2 (A2 === B2)
	 for(var king = 1; king <= garry; king = king+2){ //Question 1
	  st1.push(jim[king]);
	  
	  if(jim[king] == 1){
	   s1pos.push(king); //live bits marker
	  }
	  //start @1, moves +2
	 }//1,3,5,7,9,...
	 
	 
	 //check B1 + B2 (B2 === A2)
	 for(var queen = 2; queen <= garry; queen = queen+1){ //Question 2
	  st2.push(jim[queen]);
	  
	  if(jim[queen] == 1){
	   s2pos.push(queen); //live bits marker
	  }
	  
	  if(queen%2 != 0){
	   queen = queen +2;
	  }
	  //start @2, moves +1 If queen is odd, moves +2
	 }//2,3,6,7,10,11,...
	 
	 //every other st1 & st2 should be same bits
	  
	  
	 //check C1 + C2 (C2 === D2)
	 for(var jack = 4; jack <= garry; jack = jack+1){ //Question 3
	 if(smith <= 1){
	   jack = jack + 4;
	   smith = 4;
	  }
	  
	  st3.push(jim[jack]);
	  smith = smith - 1;
	  
	  if(jim[jack] == 1){
	   s3pos.push(jack); //live bits marker
	  }
	  
	  //start @4, Moves along the row (4,5,6,7) then skips to next row
	 }//4,5,6,7,12,13,14,15,...
	 
	 
	 //check D1 + D2 (D2 === C2)
	 for(var rook = 8; rook <= garry; rook = rook+1){ //Question 4
	 if(stan <= 1){
	   rook = rook + 8;
	   stan = 8;
	  }
	  
	  st4.push(jim[rook]);
	  stan = stan - 1;
	  
	  if(jim[rook] == 1){
	   s4pos.push(rook); //live bits marker
	  }
	  
	  //start @8, moves along two rows (8,9,10,11,12,13,14,15) then skips ahead 2 rows
	 }//8,9,10,11,12,13,14,15,24,25,26,27,28,...
	 
	 
	 //check E1 + E2
	 for(var blossom = 0; blossom <= garry; blossom = blossom+2){ //Flower Q5
	 if(karran <= 1){
	   blossom = blossom + 1;
	   karran = 2;
	  }
	  
	  st5.push(jim[blossom]);
	  karran = karran - 1;
	  
	  if(jim[blossom] == 1){
	   s5pos.push(blossom); //live bits marker
	  }
	  
	  //start @0, moves diagonally to the right from top-left (2 then 3, then 2 then 3, ...)
	 }//0,2,5,7,10,12,15,17,...
	 
	 
	 //check E3 + E5
	 for(var bubbles = 1; bubbles <= garry; bubbles = bubbles+3){ //Flower Q6
	 if(sarran <= 1){
	   bubbles = bubbles + 2;
	   sarran = 2;
	  }
	  
	  st6.push(jim[bubbles]);
	  sarran = sarran - 1;
	  
	  if(jim[bubbles] == 1){
	   s6pos.push(bubbles); //live bits marker
	  }
	  
	  //start @1, moves diagonally to the right offset from previous (3 then 2, then 3 then 2, ...)
	 }//1,4,6,9,11,...
	 
	 
	 //check F1 + F2
	 for(var buttercup = 0; buttercup <= garry; buttercup = buttercup+3){ //Cross-Bread Q7
	  st7.push(jim[buttercup]);
	  
	  if(jim[buttercup] == 1){
	   s7pos.push(buttercup); //live bits marker
	  }
	  //start @0, moves diagonally to the left (+3 per)
	 }//0,3,6,9,12,15,...
	 
	 
	 //check F3 + F4
	 for(var bunny = 2; bunny <= garry; bunny = bunny+3){ //Cross-Bread Q8
	  st8.push(jim[bunny]);
	  
	  if(jim[bunny] == 1){
	   s8pos.push(bunny); //live bits marker
	  }
	//start @2, moves diagonally to the left offset from previous (+3 per) 
	 }//2,5,8,11,14,15,19,...
	 

	
	  <!-- find all the 1's for comparison -->
	 note1 = st1.toString().match(/1/g);
	 note2 = st2.toString().match(/1/g);
	 note3 = st3.toString().match(/1/g);
	 note0 = st4.toString().match(/1/g);
	 note5 = st5.toString().match(/1/g);
	 note6 = st6.toString().match(/1/g);
	 note7 = st7.toString().match(/1/g);
	 note8 = st8.toString().match(/1/g); 
	 note9 = note1+""+note2+""+note3+""+note4+""+note5+""+note6+""+note7+""+note8;
	 
//empty shell & infinate catch
	 if(note1 === null || isNaN(note1) === true || isFinite(note1) === false){
	  note1 = 0;
	 }
	 if(note2 === null || isNaN(note2) === true || isFinite(note2) === false){
	  note2 = 0;
	 }
	 if(note3 === null || isNaN(note3) === true || isFinite(note3) === false){
	  note3 = 0;
	 }
	 if(note0 === null || isNaN(note0) === true || isFinite(note4) === false){
	  note0 = 0;
	 } 
	 if(note5 === null || isNaN(note5) === true || isFinite(note5) === false){
	  note5 = 0;
	 }
	 if(note6 === null || isNaN(note6) === true || isFinite(note6) === false){
	  note6 = 0;
	 } 
	 if(note7 === null || isNaN(note7) === true || isFinite(note7) === false){
	  note7 = 0;
	 }
	 if(note8 === null || isNaN(note8) === true || isFinite(note8) === false){
	  note8 = 0;
	 } 
	 if(note9 === null || isNaN(note9) === true || isFinite(note9) === false){
	  note9 = 0;
	 }
	 
	  <!-- find the length of total 1's in string -->
	 note1 = Math.trunc(Number(note1.length)+1);
	 note2 = Math.trunc(Number(note2.length)+1);
	 note3 = Math.trunc(Number(note3.length)+1);
	 note0 = Math.trunc(Number(note0.length)+1);
	 note5 = Math.trunc(Number(note5.length)+1);
	 note6 = Math.trunc(Number(note6.length)+1);
	 note7 = Math.trunc(Number(note7.length)+1);
	 note8 = Math.trunc(Number(note8.length)+1);
	 note9 = Math.trunc(Number(note9.length)+1);
	 
//NaN & infinate catch
	 if(note1 === null || isNaN(note1) === true || isFinite(note1) === false){
	  note1 = 0;
	 }
	 if(note2 === null || isNaN(note2) === true || isFinite(note2) === false){
	  note2 = 0;
	 }
	 if(note3 === null || isNaN(note3) === true || isFinite(note3) === false){
	  note3 = 0;
	 }
	 if(note0 === null || isNaN(note0) === true || isFinite(note4) === false){
	  note0 = 0;
	 } 
	 if(note5 === null || isNaN(note5) === true || isFinite(note5) === false){
	  note5 = 0;
	 }
	 if(note6 === null || isNaN(note6) === true || isFinite(note6) === false){
	  note6 = 0;
	 } 
	 if(note7 === null || isNaN(note7) === true || isFinite(note7) === false){
	  note7 = 0;
	 }
	 if(note8 === null || isNaN(note8) === true || isFinite(note8) === false){
	  note8 = 0;
	 } 
	 if(note9 === null || isNaN(note9) === true || isFinite(note9) === false){
	  note9 = 0;
	 }
	 
	 if((note1%2) == 0){ <!-- if divisible by 2, it's even -->
	  d1.push(0);
	 } 
	 else{
	  d1.push(1);
	 }
	 
	 if((note2%2) == 0){ <!-- if divisible by 2, it's even -->
	  d2.push(0);
	 } 
	 else{
	  d2.push(1);
	 } 
	 
	 if((note3%2) == 0){ <!-- if divisible by 2, it's even -->
	  d3.push(0);
	 }  
	 else{
	  d3.push(1);
	 }
	 
	 if((note0%2) == 0){ <!-- if divisible by 2, it's even -->
	  d4.push(0);
	 } 
	 else{
	  d4.push(1);
	 } 
	 
	 if((note5%2) == 0){ <!-- if divisible by 2, it's even -->
	  d5.push(0);
	 }  
	 else{
	  d5.push(1);
	 }
	 
	 if((note6%2) == 0){ <!-- if divisible by 2, it's even -->
	  d6.push(0);
	 } 
	 else{
	  d6.push(1);
	 } 
	 
	 if((note7%2) == 0){ <!-- if divisible by 2, it's even -->
	  d7.push(0);
	 }  
	 else{
	  d7.push(1);
	 }
	 
	 if((note8%2) == 0){ <!-- if divisible by 2, it's even -->
	  d8.push(0);
	 } 
	 else{
	  d8.push(1);
	 } 
	 
	 if((note9%2) == 0){ <!-- if divisible by 2, it's even -->
	  d9.push(0);
	 } 
	 else{
	  d9.push(1);
	 } 
	 
	 <!-- begin testing advanced checks -->
	 
	var diana = 0;
	var diann = 0;
	
	if(st1.toString().search(/1/gm) >= 0){
	 diana = st1.toString().match(/1/gm);
	}
	
	if(st2.toString().search(/1/gm) >= 0){
     diann = st2.toString().match(/1/gm);
	}
	
	 
	ad1.push((Math.abs(diana ^ diann) >>> 0).toString(2));
	//ad1.push("&"+""+diana);
	//ad1.push("$"+""+diann); <!--debuggers-->
	
	if(ad1[0] !== 0){
	
	 if(ad1[0].toString().length > 1){
	  ad4[carol] = ad1[0]; 
	   carol = carol + 1; <!-- moves the next potential error to new slot in array -->
	 }
	 
	 if(ad1[0] == 1 && diana.length > 0){
	  ad4[0] = s1pos[0] ^ s1pos[1]; <!-- sets the first blob-drop -->
	  var ft = 2; <!-- looking for 3rd item in array -->
	 
	  for(var sarah = 0; sarah < s1pos.length; sarah++){ <!-- based on original s1pos length (should have 1 overlay maybe 2 with silence or null (this may cause data residue) ) -->
	   var swif = ad4[0]; <!-- sets blob-drop for next drop -->
	   ad4[0] = s1pos[ft] ^ swif; <!-- xor -->
	   ft = ft + 1; <!-- set for moving forward -->
	  }
	  
	ad4[carol] = Math.abs(ad4[0] >>> 0).toString(2); <!-- we only want to do this with the null'd object because ad4 also stores potential error locations  -->
	
	   carol = carol + 1; <!-- moves the next potential error to new slot in array -->
	
 	 }<!-- ad4 past the null object are the potential errors location(s) -->
	 
	} 
	
	var kjeet = 0;
	var jdeet = 0;
	
	if(st3.toString().search(/1/gm) >= 0){
	 kjeet = st3.toString().match(/1/gm);
	}
	if(st4.toString().search(/1/gm) >= 0){
     jdeet = st4.toString().match(/1/gm);
	}
	 
	 ad2.push((Math.abs(kjeet ^ jdeet) >>> 0).toString(2));
	 
	 
	if(ad2[0] !== 0){
	
	 if(ad2[0].toString().length > 1){
	  ad3[carol] = ad2[0]; 
	   carol = carol + 1; <!-- moves the next potential error to new slot in array -->
	
	 }
	 
	 if(ad2[0] == 1 && kjeet.length > 0){
	  ad3[0] = s2pos[0] ^ s2pos[1]; <!-- sets the first blob-drop -->
	  var ft = 2; <!-- looking for 3rd item in array -->
	 
	  for(var sarah = 0; sarah < s2pos.length; sarah++){ <!-- based on original s1pos length (should have 1 overlay maybe 2 with silence or null (this may cause data residue) ) -->
	   var swif = ad3[0]; <!-- sets blob-drop for next drop -->
	   ad3[0] = s2pos[ft] ^ swif; <!-- xor -->
	   ft = ft + 1; <!-- set for moving forward -->
	  }
	  
	ad3[carol] = Math.abs(ad3[0] >>> 0).toString(2); <!-- we only want to do this with the null'd object because ad3 also stores potential error locations  -->
	
	   carol = carol + 1; <!-- moves the next potential error to new slot in array -->
	
 	 }<!-- ad3 past the null object are the potential errors location(s) -->
	 
	} 
	
	var crystal = 0;
	var kris = 0;
	
	if(st5.toString().search(/1/gm) >= 0){
	 crystal = st5.toString().match(/1/gm);
	}
	if(st6.toString().search(/1/gm) >= 0){
     kris = st6.toString().match(/1/gm);
	}
	 
	 ad5.push((Math.abs(crystal ^ kris) >>> 0).toString(2));
	 
	 
	if(ad5[0] !== 0){
	
	 if(ad5[0].toString().length > 1){
	  ad6[carol] = ad5[0]; 
	carol = carol + 1; <!-- moves the next potential error to new slot in array -->
	
	 }
	 
	 if(ad5[0] == 1 && crystal.length > 0){
	  ad6[0] = s3pos[0] ^ s3pos[1]; <!-- sets the first blob-drop -->
	  var ft = 2; <!-- looking for 3rd item in array -->
	 
	  for(var sarah = 0; sarah < s3pos.length; sarah++){ <!-- based on original s3pos length (should have 1 overlay maybe 2 with silence or null (this may cause data residue) ) -->
	   var swif = ad6[0]; <!-- sets blob-drop for next drop -->
	   ad6[0] = s3pos[ft] ^ swif; <!-- xor -->
	   ft = ft + 1; <!-- set for moving forward -->
	  }
	  
	ad6[carol] = Math.abs(ad6[0] >>> 0).toString(2); <!-- we only want to do this with the null'd object because ad6 also stores potential error locations  -->
	
	   carol = carol + 1; <!-- moves the next potential error to new slot in array -->
	
 	 }<!-- ad6 past the null object are the potential errors location(s) -->
	 
	} 
	
	var tris = 0;
	var squee = 0;
	
	if(st7.toString().search(/1/gm) >= 0){
	 tris = st7.toString().match(/1/gm);
	}
	if(st8.toString().search(/1/gm) >= 0){
     squee = st8.toString().match(/1/gm);
	}
	 
	 ad7.push((Math.abs(tris ^ squee) >>> 0).toString(2));
	 
	 
	if(ad7[0] !== 0){
	
	 if(ad7[0].toString().length > 1){
	  ad8[carol] = ad7[0];
	   carol = carol + 1; <!-- moves the next potential error to new slot in array -->
	
	 }
	 
	 if(ad7[0] == 1 && tris.length > 0){
	  ad8[0] = s7pos[0] ^ s7pos[1]; <!-- sets the first blob-drop -->
	  var ft = 2; <!-- looking for 3rd item in array -->
	 
	  for(var sarah = 0; sarah < s7pos.length; sarah++){ <!-- based on original s7pos length (should have 1 overlay maybe 2 with silence (1) or null (0) (this may cause data residue) ) -->
	   var swif = ad8[0]; <!-- sets blob-drop for next drop -->
	   ad8[0] = s7pos[ft] ^ swif; <!-- xor -->
	   ft = ft + 1; <!-- set for moving forward -->
	  }
	  
	ad8[carol] = Math.abs(ad8[0] >>> 0).toString(2); <!-- we only want to do this with the null'd object because ad6 also stores potential error locations  -->
	
	   carol = carol + 1; <!-- moves the next potential error to new slot in array -->
	
 	 }<!-- ad8 past the null object are the potential errors location(s) -->
	 
	}
	
	 
	 if((note9^(Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))/(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length)-1)))+(Math.ceil(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length-1))%2)+(Math.ceil(Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))%2)))%2)%2 === 1){
	  gg6.push(0);
	 }
	 else{
	  gg6.push(1);
	 }
	 
	 if(((((((((((note1^d1)^(note2^d2))^(note3^d3))^(note0^d4))^(note5^d5))^(note6^d6))^(note7^d7))^(note8^d8))^(note9))^Math.ceil(Math.abs(Math.abs((Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))/(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length)-1)))+(Math.ceil(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length)-1))%2)+(Math.ceil(Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))%2)))%2)%2 === 1){ <!-- "Cross-Bread check" -->
	  gg7.push(0);
	 }
	 else{
	  gg7.push(1);
	 }
	
	 
	 if(((((note1^note2)^note3)^note0)^Math.ceil(Math.abs(Math.abs((Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))/(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length)-1)))+(Math.ceil(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length)-1))%2)+(Math.ceil(Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))%2)))%2)%2 === 1){ <!--mains parity check -->
	  gg1.push(0);
	 }
	 else{
	  gg1.push(1);
	 }
	 
	 if(((((d1^d2)^d3)^d4)^Math.ceil(Math.abs(Math.abs((Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))/(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length)-1)))+(Math.ceil(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length)-1))%2)+(Math.ceil(Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))%2)))%2)%2 === 1){ <!-- determiner's pairty check -->
	  gg2.push(0);
	 }
	 else{
	  gg2.push(1);
	 }
	 
	 if((((((note1^d1)^(note2^d2))^(note3^d3))^(note0^d4))^Math.ceil(Math.abs(Math.abs((Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))/(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length)-1)))+(Math.ceil(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length)-1))%2)+(Math.ceil(Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))%2)))%2)%2 === 1){ <!-- "full parity check" -->
	  gg3.push(0);
	 }
	 else{
	  gg3.push(1);
	 }
	 
	 if((((((((note1^d1)^(note2^d2))^(note3^d3))^(note0^d4))^(note5^d5))^(note6^d6))^Math.ceil(Math.abs(Math.abs((Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))/(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length)-1)))+(Math.ceil(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length)-1))%2)+(Math.ceil(Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))%2)))%2)%2 === 1){ <!-- "flower check" -->
	  gg4.push(0);
	 }
	 else{
	  gg4.push(1);
	 }
	 
	 if((((((((((note1^d1)^(note2^d2))^(note3^d3))^(note0^d4))^(note5^d5))^(note6^d6))^(note7^d7))^(note8^d8))^Math.ceil(Math.abs(Math.abs((Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))/(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length)-1)))+(Math.ceil(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + (Math.abs((otherjim*18)+jim.length)-1)) % 2)^Math.abs(3.14 + Number(jim)))/(Math.abs((otherjim*18)+jim.length)-1))%2)+(Math.ceil(Math.abs(Math.trunc(Number(jim)*3.14)%(Math.abs((otherjim*18)+jim.length)-1)))%2)))%2)%2 === 1){ <!-- "Cross-Bread check" -->
	  gg5.push(0);
	 }
	 else{
	  gg5.push(1);
	 }
	 
	 
	 
var a0 = (Math.abs((otherjim*18)+jim.length)-1);

if(isNaN(a0) === true || isFinite(a0) === false){
 a0 = 0;
}

var b0 = Math.round(Math.abs(a0/Math.sin((Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + a0) % 2)^Math.abs(3.14 + Number(jim)))/a0))));

if(isNaN(b0) === true || isFinite(b0) === false){
 b0 = 0;
}

var h0 = Math.round(a0*(Math.abs(a0/Math.sin((Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + a0) % 2)^Math.abs(3.14 + Number(jim)))/a0))))*(Math.sin(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + a0) % 2)^Math.abs(3.14 + Number(jim)))/a0))).toString().replace('-', '');

if(isNaN(h0) === true || isFinite(h0) === false){
 h0 = 0;
}

var radi = h0/2;

if(isNaN(radi) === true || isFinite(radi) === false){
 radi = 0;
}

var bigv = Math.round(Math.abs(4/3)*3.14*Math.pow(radi, 3));

if(isNaN(bigv) === true || isFinite(bigv) === false){
 bigv = 0;
}

var bigp = Math.round(Math.abs(a0*2)+Math.abs((Math.abs(a0/Math.sin((Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + a0) % 2)^Math.abs(3.14 + Number(jim)))/a0))))*2));

if(isNaN(bigp) === true || isFinite(bigp) === false){
 bigp = 0;
}

var bigarea = Math.round(Math.abs(1/2)*Math.abs(a0/Math.sin((Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + a0) % 2)^Math.abs(3.14 + Number(jim)))/a0)))*Math.abs(a0*(Math.abs(a0/Math.sin((Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + a0) % 2)^Math.abs(3.14 + Number(jim)))/a0))))*(Math.sin(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + a0) % 2)^Math.abs(3.14 + Number(jim)))/a0))));

if(isNaN(bigarea) === true || isFinite(bigarea) === false){
 bigarea = 0;
}

var ac1 = Math.round(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + a0) % 2)^Math.abs(3.14 + Number(jim)))/a0);

if(isNaN(ac1) === true || isFinite(ac1) === false){
 ac1 = 0;
}

var bd1 = Math.round(Math.abs(180-(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + a0) % 2)^Math.abs(3.14 + Number(jim)))/a0)));

if(isNaN(bd1) === true || isFinite(bd1) === false){
 bd1 = 0;
}


   var magi = Math.round(Math.abs(Math.abs(Number(bigv)*3.14)%(Math.abs(Math.abs(1/2)*Math.abs(Number(a0)/Math.sin((Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + Number(a0)) % 2)^Math.abs(3.14 + Number(jim)))/Number(a0))))*Math.abs(Number(a0)*(Math.abs(Number(a0)/Math.sin((Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + Number(a0)) % 2)^Math.abs(3.14 + Number(jim)))/Number(a0)))))*(Math.sin(Math.abs(Math.abs(Math.ceil(Math.trunc(Number(jim) * 3.14) + Number(a0)) % 2)^Math.abs(3.14 + Number(jim)))/Number(a0)))))))/(Number(radi))); 



	if(pd1.toString().search(/(\d+)x/gi) >= 0){
	  pd1 = '';
	 }
	
	
	 if(isNaN(magi) === true || isFinite(magi) === false){
	  magi = "00";	  
	 }
	 

	 
	 <!-- finish graphing -->
	 
	 
	 <!-- update bear -->
	 bear = fullstop + p2.length;    //fullstop + p2-length at this point is the same as the work done for finding the longest possible loop needed to decode
	 fullstop = bear; <!-- 1st full stop cant be done till end so we need to add to prev data here -->
	 //bear updated
	 
	 
	 if(pd1 === null){
	 c = c + 1; <!-- c = c, means do nothing -->
	 //this needs to be used to do some form of check here...to correct Potential errors ...
	}
	else{ 
	 pd1 = magi + "" + "x" + "" + otherjim + "" + 'e' + "" + fullstop;
	 
	 
	 if(p1.toString().search(/(\d+)x(\d+)(\w)(\d+)/gi) >= 0){
	  p1 = '';
	  p1 = [];
	 }
	 p1.push(pd1);
	}
	
	
	
	
	 var bgraphnow = '', stt1 = '', stt2 = '', stt3 = '', stt0 = '', pp2 = '';	

	 
	 
	 
	 
	 
	 
	
	for (let x in st1){
	 stt1 += st1[x] + "";
	 }
	 
	var sentdata1 = rowcomp(stt1);
	
	stt1 = sentdata1;
	 
	 
	 
	for (let x in st2){
	 stt2 += st2[x] + "";
	 }
   	 
	
	var sentdata2 = rowcomp(stt2);
	
	stt2 = sentdata2; 
	
	
	for (let x in st3){
	 stt3 += st3[x] + "";
	 }
   	 
	var sentdata3 = rowcomp(stt3);
	
	stt3 = sentdata3; 
	
	for (let x in st0){
	 stt0 += st0[x] + "";
	 }
   	 
	var sentdata0 = rowcomp(stt0);
	
	stt0 = sentdata0; 
	
	 
	for (let x in p2){
	 pp2 += p2[x] + "";
	 }
   	
	var sentp = p2comp(pp2);
	
	
	pp2 = sentp; 
	
	
	 
	 var qui = Number(ac1) - Number(radi);
	 
	 if(isNaN(qui) === true){
	  qui = "00";
	 }
	 
	 
	 
	
	
	 
	 
	 //I'm here i'm here im here Im here (seperating compression)
	if(goober < 1){  
	// bgraphnow = "ALGO-INJECT: " + qui + ";d1: " + d1 + ";d2: " + d2 + ";P1: " + p1 + ";D3: " + d3 + ";St1: " + st1 + ";d4: " + d4 + ";St2: " + st2 + ";P2: " + p2 + ";St3: " + st3 + ".St0: " + st0 + ";";    //Debug on

	// bgraphnow = window.btoa(qui) + ";" + d1 + ";" + d2 + ";" + p1 + ";" + d3 + ";" + st1 + ";" + d4 + ";" + st2 + ";" + p2 + ";" + st3 + "." + st0 + ";";    //compression off
	  bgraphnow = window.btoa(qui) + ";" + d1 + ";" + d2 + ";" + p1 + ";" + d3 + ";" + stt1 + ";" + d4 + ";" + stt2 + ";" + pp2 + ";" + stt3 + "." + stt0 + ";"; //compression on
    }
	else{
	//var reboog = document.getElementById(prevgraph).innerHTML; <!-- to compound a prevgraph, replace prevgraph with reboog and uncomment the front of this line -->
	  //bgraphnow = reboog + ";" + d1 + ";" + d2 + ";" + p1 + ";" + d3 + ";" + stt1 + ";" + d4 + ";" + stt2 + ";" + pp2 + ";" + stt3 + "." + stt0 + ";"; //reboog on  reboorg
	  
	  //bgraphnow = "Prev: " + prevgraph + ";d1: " + d1 + ";d2: " + d2 + ";P1: " + p1 + ";D3: " + d3 + ";St1: " + st1 + ";d4: " + d4 + ";St2: " + st2 + ";P2: " + p2 + ";St3: " + st3 + ".St0: " + st0 + ";";    //debug
	  
	// bgraphnow = window.btoa(prevgraph) + ";" + d1 + ";" + d2 + ";" + p1 + ";" + d3 + ";" + st1 + ";" + d4 + ";" + st2 + ";" + p2 + ";" + st3 + "." + st0 + ";";    //compression off
	 bgraphnow = prevgraph + ";" + d1 + ";" + d2 + ";" + p1 + ";" + d3 + ";" + stt1 + ";" + d4 + ";" + stt2 + ";" + pp2 + ";" + stt3 + "." + stt0 + ";"; //compression on 
	}
	
//	 xsgl = p1.slice(/[x]/)[0]; //xsgl should define the number of internal-loops are needed (try having a internal-loop template then change variables based on a variable)
// isgl = p1.slice(/[x]/)[1];   //isgl the total-byte-size should be used to check for length-check & early break
                                   
 // p1sgw = p1.split(/[e-g]/)[1];    //e === next->"recorded weight"; f === next->"compounding-index"; g === next->"Polymorphic-index" //upgrade //update 
  
	
	<!-- faux-hashing below -->
	var filler1 = '', filler0 = wrapper1(bgraphnow); 
	
	
	 
    filler1 = filler0; 

	
	 filler2 = wrapper1(filler1);
	 
	 
	filler3 = wrapper1(filler2); 
	 
	 
//	 bgraphnow = wrapper2(filler3);
	
	<!-- end faux-hashing -->
	
//	document.getElementById('output').innerHTML = filler3;   //debugger
	
     document.getElementById('output').innerHTML = "<h3><b>Your <i>Graphed-Package</i>:</b></h3></br><p title='click to view' id='"+p1+"' onclick='document.getElementById(&#039;subgraphs&#039;).innerHTML=document.getElementById(&#039;a"+p1+"data&#039;).innerHTML;' >" +window.btoa(p1) + " [" + fullstop + "] </p><span id='a"+p1+"data' style='display:none'></br><span title='the data-package' >" + filler3.replace(/\,/gm, "") + "</span></br><span title='click to close' style='align:right;text-align:right;right:0;color:red;' onclick='document.getElementById(&#039;subgraphs&#039;).innerHTML=&#039;&#039;' ><b><sub><sub>X</sub></sup></b></span></br></span><span id='subgraphs'></span>";  <!-- put subgraphs here -->
	 prevgraph = "["+p1+"]";
	
	goober = goober + 1;
	 
	 
	 
	 

//debug spot below this	 
 document.getElementById('output').innerHTML += "</br><hr><h3><b>Your <i>Graphed Data</i>:</b></h3></br></br><div style='align:center;text-align:center;'>Row1: " + r1 + "</br>Row2: " + r2 + "</br>Row3: " + r3 +  "</br>Zero Plane[under-table]: " + zero + "<hr><table  style='align:center;text-align:center;'><tr><h3><b>Securing <i>Data & Checks</i></b></h3><td>:<b>:<i>Parallelogram</i>:</b>:</br>A|C: " + ac1 + " &nbsp;B|D: " + bd1 + " &nbsp; a: " + a0 + " &nbsp; b: " + b0 + "</br>h: " + h0 + " &nbsp; P: " + bigp + " &nbsp; Area: " + bigarea + "</td><td>&nbsp;&nbsp;&nbsp;</td><td>:<b>:<i>Sphere</i>:</b>:</br>V: " + bigv + " &nbsp; r: " + radi + "</td></tr><tr><td>&nbsp;</td><td>:<b>:<i>Derivative data</i>::</b></br>Magic Number: " + magi + " &nbsp; Binary&nbsp;Rep&nbsp;Bit:&nbsp;" + Math.ceil(Math.trunc(Number(jim) * 3.14) + a0) % 2 + "</br>Decimal&nbsp;Input:&nbsp;<b style='word-break:break-word;'> >--(" + a0 + ")--{&nbsp;" + jim + "&nbsp;}--[" + otherjim + "]x18--></b></br>Mains's&nbsp;Pairty Bit:&nbsp;" + gg1 + " &nbsp; Determiner's&nbsp;Pairty Bit:&nbsp;" + gg2 + " &nbsp; Full&nbsp;Pairty&nbsp;Bit:&nbsp;" + gg3 + "</br>Flower's&nbsp;Parity Bit:&nbsp;" + gg4 + " &nbsp; Cross-Bread's&nbsp;Parity Bit:&nbsp;" + gg5 + " &nbsp; All Parity Bit:&nbsp;" + gg6 + " &nbsp; Cross-All Parity Bit:&nbsp;" + gg7 + "</td><td></td></tr></table><hr><h4><b>Double <i>Checker</i></b></h4></br>Check&nbsp;Mains:&nbsp;" + ad1 + "</br>Error&nbsp;(mains):&nbsp;" + ad4 + "</br></br>Check&nbsp;Subs:&nbsp;" + ad2 + "</br>Error&nbsp;(subs):&nbsp;" + ad3 + "</br></br>Check&nbsp;Flower:&nbsp;" + ad5 + "</br>Error&nbsp;(flower):&nbsp;" + ad6 + "</br></br>Check&nbsp;Cross-Bread:&nbsp;" + ad7 + "</br>Error&nbsp;(Cross-Bread):&nbsp;" + ad8 + "</br><hr></br>Check&nbsp;1:&nbsp;" + st1 + "&nbsp;[&nbsp;" + note1 + "&nbsp;&nbsp;|&nbsp;&nbsp;" + d1 + "]<-- Determiner</br><hr></br>Live&nbsp;Bits:&nbsp;" + s1pos + "</br><hr></br>Check&nbsp;2:&nbsp;" + st2 + "&nbsp;[&nbsp;" + note2 + "&nbsp;&nbsp;|&nbsp;&nbsp;" + d2 + "]<-- Determiner</br><hr></br>Live&nbsp;Bits:&nbsp;" + s2pos + "</br><hr></br>Check&nbsp;3:&nbsp;" + st3 + "&nbsp;[&nbsp;" + note3 + "&nbsp;&nbsp;|&nbsp;&nbsp;" + d3 + "]<-- Determiner</br><hr></br>Live&nbsp;Bits:&nbsp;" + s3pos + "</br><hr></br>Check&nbsp;4:&nbsp;" + st4 + "&nbsp;[&nbsp;" + note0 + "&nbsp;&nbsp;|&nbsp;&nbsp;" + d4 + "]<-- Determiner</br><hr></br>Live&nbsp;Bits:&nbsp;" + s4pos + "</br><hr></br>Check&nbsp;5:&nbsp;" + st5 + "&nbsp;[&nbsp;" + note5 + "&nbsp;&nbsp;|&nbsp;&nbsp;" + d5 + "]<-- Determiner</br><hr></br>Live&nbsp;Bits:&nbsp;" + s5pos + "</br><hr></br>Check&nbsp;6:&nbsp;" + st6 + "&nbsp;[&nbsp;" + note6 + "&nbsp;&nbsp;|&nbsp;&nbsp;" + d6 + "]<-- Determiner</br><hr></br>Live&nbsp;Bits:&nbsp;" + s6pos + "</br><hr></br>Check&nbsp;7:&nbsp;" + st7 + "&nbsp;[&nbsp;" + note7 + "&nbsp;&nbsp;|&nbsp;&nbsp;" + d7 + "]<-- Determiner</br><hr></br>Live&nbsp;Bits:&nbsp;" + s7pos + "</br><hr></br>Check&nbsp;8:&nbsp;" + st8 + "&nbsp;[&nbsp;" + note8 + "&nbsp;&nbsp;|&nbsp;&nbsp;" + d8 + "]<-- Determiner</br><hr></br>Live&nbsp;Bits:&nbsp;" + s8pos + "</br><hr></br></br></br></div>";
//debugger above this 


//document.getElementById('output').innerHTML = "<button id='btn' title='. . . . . Need to finish what you typed...click' style='visibility:show' onclick='tracker=&#039;1&#039;;work(1);this.visibility=&#039;hidden&#039;;'  >Finalize Graph</button></br>"; 


<!-- hidden checks? --> //upgrade? can we interlace these hidden check codes inbetween layers for the hash?




//below may be causing issues
	//below is input mixing to hide what's been inputted
// var air = Math.trunc(regraph.length*3.14);
// var mixture = window.btoa(air+2).replace(/(=|==)/g, '');

// a = regraph.length;
// b = a + 1;
 
 //if(!(document.getElementById('here').value !== '')){ 
 // jim = 1; //tracker = 0;    <!-- reset everything, this errors if someone is typing then they choose to delete what is there -->
 // document.getElementById('here').value = '';
//  document.getElementById('here').innerHTML = '';
  
  <!-- need here TO DO to do -->
  
  <!-- need a special worker to listen for delete button and backspace button --> //can we do this? Q op q op
  
  <!-- need here TO DO to do --> 
// }
 
//else{ 
// document.getElementById('here').value = '';
// document.getElementById('here').value = window.btoa(b + mixture + Math.trunc(a*3.14)).replace(/(=|==)/g, '');
// document.getElementById('here').innerHTML = window.btoa(b + mixture + Math.trunc(a*3.14)).replace(/(=|==)/g, '');
//}
}


function lut1(){
<!-- HAPI ;,character..dj..steph..michelle..heatmap,.character..dj..steph..michelle..heatmap,.[...].,instructable_total,; HAPI -->
  var HAPI = ";,/\s/..&#39;.&#39;..&#39;s&#39;..'0'..'D',.'A'..&#39;00&#39;..&#39;0&#39;..(0,'0.001'..'A','A','D',.'B'..&#39;20+31&#39;..&#39;0+1&#39;..'1100'..'A','A',.'C'..&#39;01&#39;..&#39;1&#39;..'0.1'..'D','D',.'D'..&#39;21+30&#39;..&#39;1+0&#39;..'1100'..'A','A',.'E'..&#39;20-30&#39;..&#39;0-0&#39;..'1100'..'A','A',.'F'..&#39;21-31&#39;..&#39;1-1&#39;..'1100'..'A','A',.'G'..&#39;03&#39;..&#39;0/1&#39;..'0.3'..'D','D',.'H'..&#39;02&#39;..&#39;1/0&#39;..'0.2'..'D','D',.'I'..&#39;A0:E1&#39;..&#39;1*0&#39;..'70'..'A','B',.'J'..&#39;A1:E0&#39;..&#39;0*1&#39;..'70'..'A','B',.'K'..&#39;A0:E0&#39;..&#39;1*1&#39;..'70'..'A','B',.'L'..&#39;A1:E1&#39;..&#39;0*0&#39;..'70'..'A','B',.'M'..&#39;A0:E1+B0:F1&#39;..&#39;1*0+1*0&#39;..'770'..'A','B','A','B',.'N'..&#39;A1:E0+B1:F0&#39;..&#39;0*1+0*1&#39;..'770'..'A','B','A','B',.'O'..&#39;A0:E0-B0:F0&#39;..&#39;1*1+1*1&#39;..'770'..'A','B','A','B',.'P'..&#39;A0:E0+B0:F1&#39;..&#39;1*1+1*0&#39;..'770'..'A','B','A','B',.'Q'..&#39;A1:E1-B1:F1&#39;..&#39;0*0+0*0&#39;..'770'..'A','B','A','B',.'R'..&#39;A0:E0+B1:F0&#39;..&#39;1*1+0*1&#39;..'770'..'A','B','A','B',.'S'..&#39;A0:E1+B1:F0&#39;..&#39;1*0+0*1&#39;..'770'..'A','B','A','B',.'T'..&#39;A1:E0+B0:F1&#39;..&#39;0*1+1*0&#39;..'770'..'A','B','A','B',.'U'..&#39;A0:E1+B0:F0&#39;..&#39;1*0+1*1&#39;..'770'..'A','B','A','B',.'V'..&#39;A1:E0+B0:F0&#39;..&#39;0*1+1*1&#39;..'770'..'A','B','A','B',.'W'..&#39;60:A0+01&#39;..&#39;0*0+1&#39;..'50.1'..'A','B','D',.'X'..&#39;61:A1-01&#39;..&#39;0*0-0&#39;..'50.1'..'A','B','D',.'Y'..&#39;00+71:B1&#39;..&#39;1+0*0&#39;..'-500.1'..'D','A','B',.'Z'..&#39;01-71:B1&#39;..&#39;0+0*0&#39;..'-500.1'..'D','A','B',.'0'..&#39;01+70:B0&#39;..&#39;0+1*1&#39;..'-500.1'..'D','A','B',.'1'..&#39;60:A0+01&#39;..&#39;1*1+0&#39;..'50.1'..'A','B','D',.'2'..&#39;61:A0+00&#39;..&#39;0*1+1&#39;..'50.1'..'A','B','D',.'3'..&#39;00+70:B1&#39;..&#39;1+1*0&#39;..'-500.1'..'D','A','B',.'4'..&#39;60:A1+00&#39;..&#39;1*0+1&#39;..'50.1'..'A','B','D',.'5'..&#39;00+71:B0&#39;..&#39;1+0*1&#39;..'-500.1'..'D','A','B',.'6'..&#39;61:A0+01&#39;..&#39;0*1+0&#39;..'50.1'..'A','B','D',.'7'..&#39;01+71:B0&#39;..&#39;0+0*1&#39;..'-500.1'..'D','A','B',.'8'..&#39;60:A0-00&#39;..&#39;1*1+1&#39;..'50.1'..'A','B','D',.'9'..&#39;00-70:B0&#39;..&#39;1-1*1&#39;..'-500.1'..'D','A','B',.'!'..&#39;61:71+00&#39;..&#39;0*0+1&#39;..'220.1'..'A','A','D',.'?'..&#39;00+A1:B1&#39;..&#39;1+0*0&#39;..'-330.1'..'D','A','A',.'&#39;'..&#39;60:70+01&#39;..&#39;1*1+0&#39;..'220.1'..'A','A','D',.&#39;'&#39;..&#39;60:71+01&#39;..&#39;1*0+0&#39;..'220.1'..'A','A','D',.'<'..&#39;01+A0:B1&#39;..&#39;0+1*0&#39;..'-330.1'..'D','A','A',.'>'..&#39;01+A1:B0&#39;..&#39;0+0*1&#39;..'-330.1'..'D','A','A',.'^'..&#39;00-A0:B0&#39;..&#39;1+1*1&#39;..'-330.1'..'D','A','A',.'_'..&#39;01+A0:B0&#39;..&#39;0+1*1&#39;..'-330.1'..'D','A','A',.'['..&#39;00+A1:B0&#39;..&#39;1+0*1&#39;..'-330.1'..'D','A','A',.']'..&#39;00+A0:B1&#39;..&#39;1+1*0&#39;..'-330.1'..'D','A','A',.'#'..&#39;60:70+00&#39;..&#39;1*1+1&#39;..'220.1'..'A','A','D',.'&'..&#39;61:71+01&#39;..&#39;0*0+0&#39;..'220.1'..'A','A','D',.'*'..&#39;61:70+01&#39;..&#39;0*1+0&#39;..'220.1'..'A','A','D',.'('..&#39;61:70+00&#39;..&#39;0*1+1&#39;..'220.1'..'A','A','D',.')'..&#39;60:71+01&#39;..&#39;1*0+1&#39;..'220.1'..'A','A','D',.'a'..&#39;11+20+31&#39;..&#39;0+1+0&#39;..'111'..'A','A','A',.'b'..&#39;10+20+31&#39;..&#39;1+1+0&#39;..'111'..'A','A','A',.'c'..&#39;11+20+31&#39;..&#39;1+0+1&#39;..'111'..'A','A','A',.'d'..&#39;11+20+30&#39;..&#39;0+1+1&#39;..'111'..'A','A','A',.'e'..&#39;10+20+30&#39;..&#39;1+1+1&#39;..'111'..,.'f'..&#39;11+21+31&#39;..&#39;0+0+0&#39;..'111'..'A','A','A',.'g'..&#39;10+21+31&#39;..&#39;1+0+0&#39;..'111'..'A','A','A',.'h'..&#39;11+21+30&#39;..&#39;0+0+1&#39;..'111'..'A','A','A',.'i'..&#39;10:51:91&#39;..&#39;1*0*0&#39;..'6'..'A','B','C',.'j'..&#39;11:51:90&#39;..&#39;0*0*1&#39;..'6'..'A','B','C',.'l'..&#39;11:51:91&#39;..&#39;0*0*0&#39;..'6'..'A','B','C',.'k'..&#39;10:50:90&#39;..&#39;1*1*1&#39;..'6'..'A','B','C',.'$'..&#39;11:50:91&#39;..&#39;1*0*1&#39;..'6'..'A','B','C',.'%'..&#39;10:51:90&#39;..&#39;0*1*0&#39;..'6'..'A','B','C',.':'..&#39;10:51:91&#39;..&#39;0*1*1&#39;..'6'..'A','B','C',.'..'..&#39;11:51:90&#39;..&#39;1*1*0&#39;..'6'..'A','B','C',.'@'..&#39;04&#39;..&#39;0\1&#39;..'0.4'..'D','D',.'|'..&#39;05&#39;..&#39;1\0&#39;..'0.5'..'D','D',.'m'..&#39;61:A0+01+71:B0&#39;..&#39;1*0+1+1*0&#39;..'55.01'..'A','B','D','A','B',.'n'..&#39;60:A1+01+70:B1&#39;..&#39;0*1+1+0*1&#39;..'55.01'..'A','B','D','A','B',.'o'..&#39;61:A1+00+71:B1&#39;..&#39;1*1+0+1*1&#39;..'55.01'..'A','B','D','A','B',.'p'..&#39;61:A1+00+71:B0&#39;..&#39;1*1+0+1*0&#39;..'55.01'..'A','B','D','A','B',.'q'..&#39;61:A1+01+71:B1&#39;..&#39;0*0+0+0*0&#39;..'55.01'..'A','B','D','A','B',.'r'..&#39;60:A0+01+71:B0&#39;..&#39;1*1+0+0*1&#39;..'55.01'..'A','B','D','A','B',.'s'..&#39;60:A1+00+71:B0&#39;..&#39;1*0+1+0*1&#39;..'55.01'..'A','B','D','A','B',.'t'..&#39;61:A0+00+70:B1&#39;..&#39;0*1+1+1*0&#39;..'55.01'..'A','B','D','A','B',.'u'..&#39;60:A1+00+70:B0&#39;..&#39;1*0+1+1*1&#39;..'55.01'..'A','B','D','A','B',.'v'..&#39;61:A0+00+70:B0&#39;..&#39;0*1+1+1*1&#39;..'55.01'..'A','B','D','A','B',.'w'..&#39;61:A1+00+71:B1&#39;..&#39;0*0+1+0*0&#39;..'55.01'..'A','B','D','A','B',.'x'..&#39;61:A0+01+70:B1&#39;..&#39;0*1+0+1*0&#39;..'55.01'..'A','B','D','A','B',.'y'..&#39;61:A0+00+71:B1&#39;..&#39;0*1+1+0*0&#39;..'55.01'..'A','B','D','A','B',.'z'..&#39;60:A1+01+71:B0&#39;..&#39;1*0+0+0*1&#39;..'55.01'..'A','B','D','A','B',.'{'..&#39;60:A0+00+71:B1&#39;..&#39;1*1+1+0*0&#39;..'55.01'..'A','B','D','A','B',.',.'..&#39;61:A1+00+70:B0&#39;..&#39;0*0+1+1*1&#39;..'55.01'..'A','B','D','A','B',.&#39;\\&#39;..&#39;61:A1+00+70:B0&#39;..&#39;0*1+0+1*1&#39;..'55.01'..'A','B','D','A','B',.'/'..&#39;60:A0+01+71:B0&#39;..&#39;1*0+0+1*1&#39;..'55.01'..'A','B','D','A','B',.'.'..&#39;60:A0+00+70:B1&#39;..&#39;1*1+1+1*0&#39;..'55.01'..'A','B','D','A','B',.'`'..&#39;60:A0+00+71:B0&#39;..&#39;1*1+1+0*1&#39;..'55.01'..'A','B','D','A','B',.'+'..&#39;60:A1+00+71:B1&#39;..&#39;1*0+1+0*0&#39;..'55.01'..'A','B','D','A','B',.','..&#39;61:A1+00+70:B1&#39;..&#39;0*0+1+1*0&#39;..'55.01'..'A','B','D','A','B',.'-'..&#39;61:A1+00+71:B0&#39;..&#39;0*0+1+0*0&#39;..'55.01'..'A','B','D','A','B',.'='..&#39;60:A0+00+70:B0&#39;..&#39;1*1+1+1*1&#39;..'55.01'..'A','B','D','A','B',.'~'..&#39;61:A1+01+70:B1&#39;..&#39;0*0+0+1*0&#39;..'55.01'..'A','B','D','A','B',.,--,;";
  //-- means unmeasured HAPI
  
  return(HAPI);
  
  
}



function graphit(getit){
var lettercounter = Number(getit.length) - 1, discussion = Number(getit.length);
var kimmy = '', dj = '', steph = '', michelle = '';

  if(lettercounter < 0){   //just in case of underflow attacks
   lettercounter = 0;
  }
  
  kimmy = getit[lettercounter];
  
 
 
 if(discussion <= 0) { //no visible input 
  kimmy = ""; 
  getit = "";   //???? //upgrade?
  lettercounter = 0;
 }
  
  //if you find "maininp" aka 'Main-Input', it is now " here " so here === here !!!!
 if(getit === '' || getit === null) {
  document.getElementById('here').style = 'width:96.5%;align:center;text-align:center;padding:3.31vw 1.5vw 0.1vw 1.5vw;font-size:31px;font-family: "CourierNew", "Monospaced Slab-Serif", serif;';
  document.getElementById('output').innerHTML = '';
  document.getElementById('here').value = '';
  document.getElementById('here').innerHTML = '';
  row = [];
  z = 0;
  b = 0;
  r1 = [];
  r2 = [];
  r3 = [];
  r4 = [];
  p1 = [];
  p2 = [];
  zero = [];
  stelen = 0;
  stdlen = 0;
  stclen = 0;
  st3len = 0;
  kimmy = '';
 }
  
  //below is the exchange -->
	<!-- HAPI ;,character..dj..steph..michelle..heatmap,.character..dj..steph..michelle..heatmap,.[...].,instructable_total,; HAPI -->
  if(kimmy.match(/\s/) >= 0) {
   dj = ".";
   steph += "s"; //space doesn't exist
   michelle = '0';
   heatmap = [];
  heatmap.push('D');
  }
  if(kimmy === 'A') {
   dj = "00";
   steph += "0"; //this relies on some error point...may need to swap used & unused ('A') discovery from DD to DAA  //n is null (0)
   michelle = '0.001';
   heatmap = [];
  heatmap.push('A'); //0  //if this ('A') === 00 || 0 then this should error out at the Most Recent Save 3 ('A') DD point in unwrapping
  heatmap.push('A'); //0
  heatmap.push('D'); //1
  }   
  if(kimmy === 'B') {
   dj = "20+31";
   steph += "0+1";  
   michelle = '1100';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  }   
  if(kimmy === 'C') {
   dj = "01";
   steph += "1";
   michelle = '0.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('D');
  }   
  if(kimmy === 'D') {
   dj = "21+30";
   steph += "1+0";
   michelle = '1100';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  }   
  if(kimmy === 'E') {
   dj = "20-30";
   steph += "0-0";
   michelle = '1100';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  }   
  if(kimmy === 'F') {
   dj = "21-31";
   steph += "1-1";
   michelle = '1100';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  }   
  if(kimmy === 'G') {
   dj = "03";
   steph += "0/1"; //n/1 is (top [black/white] bottom)
   michelle = '0.3';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('D');
  }   
  if(kimmy === 'H') {
   dj = "02";
   steph += "1/0";  //n/0 is (top [white/black] bottom)
   michelle = '0.2';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('D');
  }  
  if(kimmy === 'I') {
   dj = "A0:E1";
   steph += "1*0";
   michelle = '70';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  }       
  if(kimmy === 'J') {
   dj = "A1:E0";
   steph += "0*1";
   michelle = '70';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  }       
  if(kimmy === 'K') {
   dj = "A0:E0";
   steph += "1*1";
   michelle = '70';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  }       
  if(kimmy === 'L') {
   dj = "A1:E1";
   steph += "0*0";
   michelle = '70';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  }       
  if(kimmy === 'M') {
   dj = "A0:E1+B0:F1";
   steph += "1*0+1*0";
   michelle = '770';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('A');
  heatmap.push('B');
  }       
  if(kimmy === 'N') {
   dj = "A1:E0+B1:F0";
   steph += "0*1+0*1";
   michelle = '770';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === 'O') {
   dj = "A0:E0-B0:F0";
   steph += "1*1+1*1";
   michelle = '770';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === 'P') {
   dj = "A0:E0+B0:F1";
   steph += "1*1+1*0";
   michelle = '770';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === 'Q') {
   dj = "A1:E1-B1:F1";
   steph += "0*0+0*0";
   michelle = '770';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === 'R') {
   dj = "A0:E0+B1:F0";
   steph += "1*1+0*1";
   michelle = '770';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === 'S') {
   dj = "A0:E1+B1:F0";
   steph += "1*0+0*1";
   michelle = '770';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === 'T') {
   dj = "A1:E0+B0:F1";
   steph += "0*1+1*0";
   michelle = '770';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === 'U') {
   dj = "A0:E1+B0:F0";
   steph += "1*0+1*1";
   michelle = '770';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === 'V') {
   dj = "A1:E0+B0:F0";
   steph += "0*1+1*1";
   michelle = '770';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === 'W') {
   dj = "60:A0+01";
   steph += "0*0+1";
   michelle = '50.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  }      
  if(kimmy === 'X') {
   dj = "61:A1-01";
   steph += "0*0-0"; //offset equations show offset output ie: this is a dual left single right object   //these types of objects the single offset is at n <!-- zero
   michelle = '50.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  }      
  if(kimmy === 'Y') {
   dj = "00+71:B1";
   steph += "1+0*0";
   michelle = '-500.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === 'Z') {
   dj = "01-71:B1";
   steph += "0+0*0";
   michelle = '-500.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === '0') {
   dj = "01+70:B0";
   steph += "0+1*1";
   michelle = '-500.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === '1') {
   dj = "60:A0+01";
   steph += "1*1+0";
   michelle = '50.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  }      
  if(kimmy === '2') {
   dj = "61:A0+00";
   steph += "0*1+1";
   michelle = '50.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  }      
  if(kimmy === '3') {
   dj = "00+70:B1";
   steph += "1+1*0";
   michelle = '-500.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === '4') {
   dj = "60:A1+00";
   steph += "1*0+1";
   michelle = '50.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  }      
  if(kimmy === '5') {
   dj = "00+71:B0";
   steph += "1+0*1";
   michelle = '-500.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === '6') {
   dj = "61:A0+01";
   steph += "0*1+0";
   michelle = '50.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  }      
  if(kimmy === '7') {
   dj = "01+71:B0";
   steph += "0+0*1";
   michelle = '-500.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === '8') {
   dj = "60:A0-00";
   steph += "1*1+1";
   michelle = '50.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  }      
  if(kimmy === '9') { //collission with '3'  michelle = '-500.1'
   dj = "00-70:B0";
   steph += "1-1*1";
   michelle = '-500.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }      
  if(kimmy === '!') {
   dj = "61:71+00";
   steph += "0*0+1";
   michelle = '220.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('D');
  }      
  if(kimmy === '?') {
   dj = "00+A1:B1";
   steph += "1+0*0";
   michelle = '-330.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('A');
  }      
  if(kimmy === '"') {
   dj = "60:70+01";
   steph += "1*1+0";
   michelle = '220.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('D');
  }      
  if(kimmy === "'") {
   dj = "60:71+01";
   steph += "1*0+0";
   michelle = '220.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('D');
  }      
  if(kimmy === '<') {
   dj = "01+A0:B1";
   steph += "0+1*0";
   michelle = '-330.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('A');
  }      
  if(kimmy === '>') {
   dj = "01+A1:B0";
   steph += "0+0*1";
   michelle = '-330.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('A');
  }        
  if(kimmy === '^') {
   dj = "00-A0:B0";
   steph += "1+1*1";
   michelle = '-330.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('A');
  }      
  if(kimmy === '_') {
   dj = "01+A0:B0";
   steph += "0+1*1";
   michelle = '-330.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('A');
  }     
  if(kimmy === '[') {
   dj = "00+A1:B0";
   steph += "1+0*1";
   michelle = '-330.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('A');
  }     
  if(kimmy === ']') {
   dj = "00+A0:B1";
   steph += "1+1*0";
   michelle = '-330.1';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('A');
  }     
  if(kimmy === '#') {
   dj = "60:70+00";
   steph += "1*1+1";
   michelle = '220.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('D');
  }     
  if(kimmy === '&') {
   dj = "61:71+01";
   steph += "0*0+0";
   michelle = '220.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('D');
  }     
  if(kimmy === '*') {
   dj = "61:70+01";
   steph += "0*1+0";
   michelle = '220.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('D');
  }     
  if(kimmy === '(') {
   dj = "61:70+00";
   steph += "0*1+1";
   michelle = '220.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('D');
  }     
  if(kimmy === ')') {
   dj = "60:71+01";
   steph += "1*0+1";
   michelle = '220.1';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('D');
  }     
  if(kimmy === 'a') {
   dj = "11+20+31";
   steph += "0+1+0";
   michelle = '111';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('A');
  }     
  if(kimmy === 'b') {
   dj = "10+20+31";
   steph += "1+1+0";
   michelle = '111';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('A');
  }     
  if(kimmy === 'c') {
   dj = "11+20+31";
   steph += "1+0+1";
   michelle = '111';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('A');
  }     
  if(kimmy === 'd') {
   dj = "11+20+30";
   steph += "0+1+1";
   michelle = '111';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('A');
  }     
  if(kimmy === 'e') {
   dj = "10+20+30";
   steph += "1+1+1";
   michelle = '111';
  }     
  if(kimmy === 'f') {
   dj = "11+21+31";
   steph += "0+0+0";
   michelle = '111';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('A');
  }     
  if(kimmy === 'g') {
   dj = "10+21+31";
   steph += "1+0+0";
   michelle = '111';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('A');
  }     
  if(kimmy === 'h') {
   dj = "11+21+30";
   steph += "0+0+1";
   michelle = '111';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('A');
  heatmap.push('A');
  }     
  if(kimmy === 'i') {
   dj = "10:51:91";
   steph += "1*0*0";
   michelle = '6';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('C');
  }     
  if(kimmy === 'j') {
   dj = "11:51:90";
   steph += "0*0*1";
   michelle = '6';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('C');
  }     
  if(kimmy === 'l') {
   dj = "11:51:91";
   steph += "0*0*0";
   michelle = '6';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('C');
  }     
  if(kimmy === 'k') {
   dj = "10:50:90";
   steph += "1*1*1";
   michelle = '6';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('C');
  }     
  if(kimmy === '$') {
   dj = "11:50:91";
   steph += "1*0*1";
   michelle = '6';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('C');
  }     
  if(kimmy === '%') {
   dj = "10:51:90";
   steph += "0*1*0";
   michelle = '6';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('C');
  }     
  if(kimmy === ':') {
   dj = "10:51:91";
   steph += "0*1*1";
   michelle = '6';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('C');
  }     
  if(kimmy === ';') {
   dj = "11:51:90";
   steph += "1*1*0";
   michelle = '6';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('C');
  }     
  if(kimmy === '@') {
   dj = "04";
   steph += "0\1";
   michelle = '0.4';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('D');
  }     
  if(kimmy === '|') {
   dj = "05";
   steph += "1\0";
   michelle = '0.5';
   heatmap = [];
  heatmap.push('D');
  heatmap.push('D');
  }     
  if(kimmy === 'm') {
   dj = "61:A0+01+71:B0";
   steph += "1*0+1+1*0"; //a fifth-split equation is a 5-grid placement (5-side of dice)
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === 'n') {
   dj = "60:A1+01+70:B1";
   steph += "0*1+1+0*1";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === 'o') {
   dj = "61:A1+00+71:B1";
   steph += "1*1+0+1*1";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === 'p') {
   dj = "61:A1+00+71:B0";
   steph += "1*1+0+1*0";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === 'q') {
   dj = "61:A1+01+71:B1";
   steph += "0*0+0+0*0";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === 'r') {
   dj = "60:A0+01+71:B0";
   steph += "1*1+0+0*1";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === 's') {
   dj = "60:A1+00+71:B0";
   steph += "1*0+1+0*1";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === 't') {
   dj = "61:A0+00+70:B1";
   steph += "0*1+1+1*0";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === 'u') {
   dj = "60:A1+00+70:B0";
   steph += "1*0+1+1*1";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === 'v') {
   dj = "61:A0+00+70:B0";
   steph += "0*1+1+1*1";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === 'w') {
   dj = "61:A1+00+71:B1";
   steph += "0*0+1+0*0";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === 'x') {
   dj = "61:A0+01+70:B1";
   steph += "0*1+0+1*0";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === 'y') {
   dj = "61:A0+00+71:B1";
   steph += "0*1+1+0*0";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === 'z') {
   dj = "60:A1+01+71:B0";
   steph += "1*0+0+0*1";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === '{') {
   dj = "60:A0+00+71:B1";
   steph += "1*1+1+0*0";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === '}') {
   dj = "61:A1+00+70:B0";
   steph += "0*0+1+1*1";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === "\\") {
   dj = "61:A1+00+70:B0";
   steph += "0*1+0+1*1";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === '/') {
   dj = "60:A0+01+71:B0";
   steph += "1*0+0+1*1";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === '.') {
   dj = "60:A0+00+70:B1";
   steph += "1*1+1+1*0";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === '`') {
   dj = "60:A0+00+71:B0";
   steph += "1*1+1+0*1";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === '+') {
   dj = "60:A1+00+71:B1";
   steph += "1*0+1+0*0";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }    
  if(kimmy === ',') {
   dj = "61:A1+00+70:B1";
   steph += "0*0+1+1*0";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === '-') {
   dj = "61:A1+00+71:B0";
   steph += "0*0+1+0*0";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === '=') {
   dj = "60:A0+00+70:B0";
   steph += "1*1+1+1*1";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }     
  if(kimmy === '~') {
   dj = "61:A1+01+70:B1";
   steph += "0*0+0+1*0";
   michelle = '55.01';
   heatmap = [];
  heatmap.push('A');
  heatmap.push('B');
  heatmap.push('D');
  heatmap.push('A');
  heatmap.push('B');
  }   
  
  
 //dj needs to transmute what kimmy says for her parents to understand
 
 //steph needs to track the progress of setups that worked for finding data
 
 //michelle tracks the shape order (base reference)

 row.push(steph); 
 p2.push(michelle);

	 
//above is the exchange -->



 //build the subgraph
 var bondlength = steph.length;
 var blen = bondlength - 1;
  
	 var cobolt = 0;
	 <!-- cobolt is the reading head -->
	   
     var slen = steph.length, breol = 0, debol = 1, tns = 2, qns = 3, bns = 4, mns = 5, vns = 6, rns = 7, yns = 8, pns = 9, oi = heatmap, yo = 0;
		 <!-- slen is full loop length -->
	
		 
		 //dynamic picking
   var mufwarmba = steph.toString();       <!-- find what we are handling -->
   var mufba = mufwarmba.match(/(0|1)/gm); <!-- what we are dealing with -->
	 
   do{
	debol = Number(cobolt) + 1;
	  tns = Number(cobolt) + 2;
	  qns = Number(cobolt) + 3;
	  bns = Number(cobolt) + 4;
	  mns = Number(cobolt) + 5;
	  vns = Number(cobolt) + 6;
	  rns = Number(cobolt) + 7;
	  yns = Number(cobolt) + 8;
	  pns = Number(cobolt) + 9;
	  bondlength = steph.length;
		
   
   <!-- kinda works, still can't map a single letter correctly -->
	
	 yo = oi.length;
	 
	 if(oi[0] === 'undefined' || oi[0] === null || isNaN(oi[0]) === true || isFinite(oi[0]) === false){ <!-- error catch -->
	  r1 = r1;
	  r2 = r2;
	  r3 = r3;
	  zero = zero;
	 }
	 
	 if(oi[0] === "A"){
	 r1.push(mufba[0]);
	  cobolt = cobolt + 1;
	  yo = oi.length;
	  oi = oi.slice(1,yo);
	  oo = mufba.length;
	  mufba = mufba.slice(1,oo);
	 oo = mufba.length;
	 
	 }
	
	if(oi[0] === "B"){
	r2.push(mufba[0]);
	  cobolt = cobolt + 1;
	  yo = oi.length;
	  oi = oi.slice(1,yo);
	  oo = mufba.length;
	  mufba = mufba.slice(1,oo);
	 oo = mufba.length;
	  
	 }
	 
	 if(oi[0] === "C"){
	  r3.push(mufba[0]);
	  cobolt = cobolt + 1;
	  yo = oi.length;
	  oi = oi.slice(1,yo);
	  oo = mufba.length;
	  mufba = mufba.slice(1,oo);
	 oo = mufba.length;
	  
	 }
	
	if(oi[0] === "D"){
	 if(michelle === "0" || michelle === 0){
	  zero.push(0);yo = oi.length;
	  oi = oi.slice(1,yo);
	  
	}
	else{
	   zero.push(mufba[0]);
	  cobolt = cobolt + 1;
	  yo = oi.length;
	  oi = oi.slice(1,yo);
	  oo = mufba.length;
	  mufba = mufba.slice(1,oo);
	 oo = mufba.length;
	  
	 }
	 }
	 
	 if(steph.slice(cobolt,debol).search(/(\\|\/)/) >= 0){
	  if(steph[cobolt].search(0) >= 0 || steph[cobolt].search("0") >= 0){
	  zero.push(0);
	  }
	  if(steph[cobolt].search(1) >= 0 || steph[cobolt].search("1") >= 0){
	  zero.push(1);
	  }
	  if(steph[tns].search(0) >= 0 || steph[tns].search("0") >= 0){
	  zero.push(0);
	  }
	  if(steph[tns].search(1) >= 0 || steph[tns].search("1") >= 0){
	  zero.push(1);
	  }
	  zero.push(steph[cobolt]);
	  zero.push(steph[tns]);
	  cobolt = tns + 1; 
	  }
	
   //document.getElementById('output').innerHTML += "<hr>" + p2 + "<hr></br>Row1: " + r1 + "</br>Row2: " + r2 + "</br>Row3: " + r3 + "</br>zero: " + zero + "<hr></br>Debug: " + cobolt + "  &&  " + steph.slice(cobolt) + "</br></br>";  <!-- debug spot -->
	
	
	 cobolt = cobolt + 1;
	 
   }
	while(yo > 0 && cobolt <= bondlength);
	
	
	
	var endout = r1+"&"+r2+"&"+r3+"&"+zero+";";
return(endout);
}








function rowcomp(stt){

    var string = stt;
	var stlen = string.toString().length;
	
	
	var eye = 0;
	 
	 do{
	  if(eye <= ray6.length && eye > 1){
	   var t1 = ray6[eye];
	   var t2 = eye+"z";
	   do{
	    string = string.replace(t1, t2);
	   }while(string.includes(t1) === true);
	  }
	   
	  if(eye <= ray5.length && eye > 1){ 
	   var t3 = ray5[eye];
	   var t4 = eye+"y";
	   do{
	    string = string.replace(t3, t4);
	   }while(string.includes(t3) === true);
	  }
	   
	  if(eye <= ray4.length && eye > 1){ 
	   var t5 = ray4[eye];
	   var t6 = eye+"x";
	   do{
	    string = string.replace(t5, t6);
	   }while(string.includes(t5) === true);
	  }
	   
	  if(eye <= ray3.length && eye > 1){ 
	   var t8 = ray3[eye];
	   var t7 = eye+"w";
	   
	   do{
	    string = string.replace(t8, t7);
	   }while(string.includes(t8) === true);
	  }
	  
	   if(eye <= ray2.length && eye >= 0){
	   
	   
	  var n1 = Number(string.length);
	   if(n1 > Number(ray1.length)){
	    n1 = Number(ray1.length);
	   }
	   do{
		 var swim0001 = 0;
		 
	    var imlooped = '';
	    for(var ge1 = 0; ge1<=n1; ge1++){
	     imlooped += ray2[eye] + ""; //builds pattern out
		 swim0001 = Number(swim0001) + 1;
	    }
		
		if(swim0001 >= 1){
	     var gesh1 = ray0[eye]+ray1[swim0001];  //lowercase to match position on ray2 for pattern to reinsert (+) Uppercase times this pattern was repeated
		}
		else{
		 var gesh1 = ray0[eye]+"!";  //this should never be used 
		}
		 
		if(string.includes(imlooped) === true){
	     do{
	      string = string.replace(imlooped, gesh1);
	     }while(string.includes(imlooped) === true);
	    }
	   n1 = Number(n1) - 1;
	   }while(n1 >= 2);
	 
	   }
	   
	   
	  
	 //next should find all possibles with each eye position 
	 for(var huhu1 = 1; huhu1 <= ray2.length; huhu1++){
	 //2.5 layer patterns 
	  var n2 = Number(string.length);
	   if(n2 > Number(ray1.length)){
	    n2 = Number(ray1.length);
	   }
	   var gi = eye + huhu1;
	   do{
		 var swim001 = 0;
		 
	   var check1a = ray2[eye] + "" + ray2[gi] + "" + ray2[eye];
	   var clen1a = Math.abs(Number(check1a.toString().length) * Number(n2));
	   
	   
	   if(Number(gi) <= Number(ray2.length) && Number(eye) >= 2 && Number(clen1a) < Number(string.toString().length)){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	    var imlooped2 = '';
	    for(var ge2 = 0; ge2<=n2; ge2++){
	     imlooped2 += ray2[eye] + "" + ray2[gi] + "" + ray2[eye]; //builds pattern out
		 swim001 = Number(swim001) + 1;
	    }
		
		if(swim001 >= 2){
	     var gesh2 = ray0[eye]+""+ray0[gi]+""+ray0[eye]+""+ray1[swim001];  //lowercase to match position on ray2 for pattern to reinsert (+) Uppercase times this pattern was repeated
		}
		else{
		 var gesh2 = ray0[eye]+""+ray0[gi]+""+ray0[eye];
		}
		 
		if(string.includes(imlooped2) === true){
	     do{
	      string = string.replace(imlooped2, gesh2);
	     }while(string.includes(imlooped2) === true);
		}
		
	   }
	   n2 = Number(n2) - 1;
	   }while(n2 >= 1);
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(n2 === 0){
	    n2 = Number(string.length);
	   }
	  }//end huhu1 loop 
	  
	  
	 //next should find all possibles with each eye position 
	 for(var huhu2 = 1; huhu2 <= ray2.length; huhu2++){
	 //2cd layer patterns 
	  var n3 = Number(string.length);
	   if(n3 > Number(ray1.length)){
	    n3 = Number(ray1.length);
	   }
	   var gi = eye + huhu2;
	   do{
		 var swim003 = 0;
		 
	   var check1b = ray2[eye] + "" + ray2[gi];
	   var clen1b = Math.abs(Number(check1b.toString().length) * Number(n3));
	   
	   
	   if(Number(gi) <= Number(ray2.length) && Number(eye) >= 2 && Number(clen1b) < Number(string.toString().length)){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	    var imlooped3 = '';
	    for(var ge3 = 0; ge3<=n3; ge3++){
	     imlooped3 += ray2[eye] + "" + ray2[gi]; //builds pattern out
		 swim003 = Number(swim003) + 1;
	    }
		
		if(swim003 >= 2){
	     var gesh3 = ray0[eye]+""+ray0[gi]+""+ray1[swim003];  //lowercase to match position on ray2 for pattern to reinsert (+) Uppercase times this pattern was repeated
		}
		else {
		 var gesh3 = ray0[eye]+""+ray0[gi];
		}
		
		
		if(string.includes(imlooped3) === true){
	     do{
	      string = string.replace(imlooped3, gesh3);
	     }while(string.includes(imlooped3) === true);
	    }
	  
	   }
	   n3 = Number(n3) - 1;
	   }while(n3 >= 1);
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(n3 === 0){
	    n3 = Number(string.length);
	   }
	  }//end huhu2 loop 
	  
	   
	  
//	  var eye2 = Number(string.length);
	  
//	  do{
	  //0+ BUILDER
//	    var imaloop1 = '';
//	    for(var g3 = 0; g3<eye2; g3++){
//	     imaloop1 += "0" + "";
//	    }
	 
//	   if(string.includes(imaloop1) === true && eye > 2){
//	    var gesh1 = "0"+ray1[eye2];
//		do{
//	     string = string.replace(imaloop1, gesh1);
//	   }while(string.includes(imaloop1) === true);
//	   }
	  
	  
	  //1+ BUILDER
//	   var notaloop1 = '';
//	   for(var gg1 = 0; gg1<eye2; gg1++){
//	    notaloop1 += "1"+"";
//	   }
	  
//	   if(string.includes(notaloop1) === true && eye > 2){
//	    var gesh2 = "1"+ray1[eye2];
//		do{
//		 string = string.replace(notaloop1, gesh2);
//	   }while(string.includes(notaloop1) === true);
//	   }
//	   eye2 = Number(eye2) - 1;
//	   if(isNaN(eye2) === true || eye2 < 0){
//	    eye2 = 0;
//	   }
//	   }
//	   while(eye2 >= 3);
	   
	 eye = eye + 1;
	 }
	 while(eye < string.length);
	 
	 
	 

	   return(string);
}




function p2comp(pstrungp){

    var strungp = pstrungp;
	var splen = strungp.toString().length;
	
	
	var ii1 = 0;
	 
	 
	 //this area needs to be updated to cycle ray9-11 with highest replace possible first then down to single replacement
	 
	 do{
	 
	 
	 <!-- line chunk 3077.txt missing from here -->
	 
	 
	   <!-- below are triples complex -->
	 
	 //next should find all possibles with each ii1 position 
	 for(var huhu1 = 1; huhu1 <= ray8.length; huhu1++){
	 //2.5 layer patterns 
	  var n2 = Number(strungp.length);
	   if(n2 > Number(ray1.length)){
	    n2 = Number(ray1.length);
	   }
	   var gi = ii1 + huhu1;
	   do{
		 var swim101 = 0;
		 
	   var check1a = ray9[ii1] + "" + ray10[ii1] + "" + ray11[ii1];
	   var clen1a = Math.abs(Number(check1a.toString().length) * Number(n2));
	   
	   
	   if(Number(gi) <= Number(ray8.length) && Number(ii1) >= 2 && Number(clen1a) < Number(strungp.toString().length) && Number(n2) >= 1){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	    var imlooped2 = '';
	    for(var ge2 = 0; ge2<=n2; ge2++){
	     imlooped2 += ray9[ii1] + "" + ray10[ii1] + "" + ray11[ii1]; //builds pattern out
		 swim101 = Number(swim101) + 1;
	    }
		
		if(swim101 >= 2){
	     var gesh2 = ray8[ii1]+"t"+"u"+"v"+ray1[swim101];  //lowercase to match position on ray8 for pattern to reinsert (+) Uppercase times this pattern was repeated
		}
		else{
		 var gesh2 = ray8[ii1]+"t"+"u"+"v";
		}
		
		 //identifier id is _tuvCAP && _tuv 
		 
		 
		if(strungp.includes(imlooped2) === true){
	     do{
	      strungp = strungp.replace(imlooped2, gesh2);
	     }while(strungp.includes(imlooped2) === true);
		}
		
	   }
	   n2 = Number(n2) - 1;
	   }while(n2 >= 1);
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(n2 === 0){
	    n2 = Number(strungp.length);
	   }
	  }//end huhu1 loop 
	  
	   <!-- above are triples complex -->
	   <!-- below are doubles complex -->
	   
	   
	 //next should find all possibles with each ii1 position 
	 for(var huhu22 = 1; huhu22 <= ray8.length; huhu22++){
	 //2cd layer patterns 
	  var n33 = Number(strungp.length);
	   if(n33 > Number(ray1.length)){
	    n33 = Number(ray1.length);
	   }
	   var gi3 = ii1 + huhu22;
	   do{
		 var swim22 = 0;
		 
	   var check12b = ray7[ii1] + "" + ray9[ii1];
	   var clen12b = Math.abs(Number(check12b.toString().length) * Number(n33));
	   
	   
	   if(Number(gi3) <= Number(ray8.length) && Number(ii1) >= 2 && Number(clen12b) < Number(strungp.toString().length) && Number(n33) >= 1){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	    var imlooped33 = '';
	    for(var ge33 = 0; ge33<=n33; ge33++){
	     imlooped33 += ray7[ii1] + "" + ray9[ii1]; //builds pattern out
		 swim22 = Number(swim22) + 1;
	    }
		
		if(swim22 >= 2){
	     var gesh33 = ray8[ii1]+""+"7t"+ray1[swim22];  //7t represents ray7 was first 
		}
		else{
		 var gesh33 = ray8[ii1]+""+"7t";
		}
		
		 //identifier id is _7tCAP && _7t
		 
		if(strungp.includes(imlooped33) === true){
	     do{
	      strungp = strungp.replace(imlooped33, gesh33);
	     }while(strungp.includes(imlooped33) === true);
	    }
	  
	   }
	   n33 = Number(n33) - 1;
	   }while(n33 >= 1);
	   
	   
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(n33 === 0){
	    n33 = Number(strungp.length);
	   }
	  }//end huhu22 loop 
	  
	  
	 //next should find all possibles with each ii1 position 
	 for(var huhu17 = 1; huhu17 <= ray8.length; huhu17++){
	 //2cd layer patterns 
	  var n17 = Number(strungp.length);
	   if(n17 > Number(ray1.length)){
	    n17 = Number(ray1.length);
	   }
	   var gi17 = ii1 + huhu17;
	   do{
		 var swim17 = 0;
		 
	   var check17b = ray7[ii1] + "" + ray10[ii1];
	   var clen17b = Math.abs(Number(check17b.toString().length) * Number(n17));
	   
	   
	   if(Number(gi17) <= Number(ray8.length) && Number(ii1) >= 2 && Number(clen17b) < Number(strungp.toString().length) && Number(n17) >= 1){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	    var imlooped17 = '';
	    for(var ge17 = 0; ge17<=n17; ge17++){
	     imlooped17 += ray7[ii1] + "" + ray10[ii1]; //builds pattern out
		 swim17 = Number(swim17) + 1;
	    }
		
		if(swim17 >= 2){
	     var gesh17 = ray8[ii1]+""+"7u"+ray1[swim17];  //7u represents ray7 was first  
		}
		else{
		  var gesh17 = ray8[ii1]+""+"7u";
		}
		
		 //identifier id is _7uCAP  && _7u
		 
		if(strungp.includes(imlooped17) === true){
	     do{
	      strungp = strungp.replace(imlooped17, gesh17);
	     }while(strungp.includes(imlooped17) === true);
	    }
	  
	   }
	   n17 = Number(n17) - 1;
	   }while(n17 >= 1);
	   
	   
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(n17 === 0){
	    n17 = Number(strungp.length);
	   }
	  }//end huhu17 loop 
	  
	  
	 //next should find all possibles with each ii1 position 
	 for(var huhu16 = 1; huhu16 <= ray8.length; huhu16++){
	 //2cd layer patterns 
	  var n16 = Number(strungp.length);
	   if(n16 > Number(ray1.length)){
	    n16 = Number(ray1.length);
	   }
	   var gi16 = ii1 + huhu16;
	   do{
		 var swim16 = 0;
		 
	   var check16b = ray7[ii1] + "" + ray11[ii1];
	   var clen16b = Math.abs(Number(check16b.toString().length) * Number(n16));
	   
	   
	   if(Number(gi16) <= Number(ray8.length) && Number(ii1) >= 2 && Number(clen16b) < Number(strungp.toString().length) && Number(n16) >= 1){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	    var imlooped16 = '';
	    for(var ge16 = 0; ge16<=n16; ge16++){
	     imlooped16 += ray7[ii1] + "" + ray11[ii1]; //builds pattern out
		 swim16 = Number(swim16) + 1;
	    }
		
		if(swim16 >= 2){
	     var gesh16 = ray8[ii1]+""+"7v"+ray1[swim16];  //7v represents ray7 was first  
		}
		else{
		 var gesh16 = ray8[ii1]+""+"7v";
		}
		
		 //identifier id is _7vCAP && _7v
		 
		if(strungp.includes(imlooped16) === true){
	     do{
	      strungp = strungp.replace(imlooped16, gesh16);
	     }while(strungp.includes(imlooped16) === true);
	    }
	  
	   }
	   n16 = Number(n16) - 1;
	   }while(n16 >= 1);
	   
	   
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(n16 === 0){
	    n16 = Number(strungp.length);
	   }
	  }//end huhu16 loop 
	  
	  
	 //next should find all possibles with each ii1 position 
	 for(var huhu41 = 1; huhu41 <= ray8.length; huhu41++){
	 //2cd layer patterns 
	  var n41 = Number(strungp.length);
	   if(n41 > Number(ray1.length)){
	    n41 = Number(ray1.length);
	   }
	   var gi41 = ii1 + huhu41;
	   do{
	   var swim01 = 0;
		
	   var check41b = ray9[ii1] + "" + ray9[gi41];
	   var clen41b = Math.abs(Number(check41b.toString().length) * Number(n41));
	   
	   
	   if(Number(gi41) <= Number(ray8.length) && Number(ii1) >= 2 && Number(clen41b) < Number(strungp.toString().length) && Number(n41) >= 1){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	    var imlooped41 = '';
	    for(var ge41 = 0; ge41<=n41; ge41++){
	     imlooped41 += ray9[ii1] + "" + ray9[gi41]; //builds pattern out
		 swim01 = Number(swim01) + 1;
	    }
		
		if(swim01 >= 2){
	     var gesh41 = ray8[ii1]+""+ray8[gi41]+"t"+ray1[swim01];  //lowercase to match position on ray8 for pattern to reinsert (+) Uppercase times this pattern was repeated 
		}
		else{
		 var gesh41 = ray8[ii1]+""+ray8[gi41]+"t";
		}
		
		 //identifier id is _ _tCAP && _ _ t
		 
		if(strungp.includes(imlooped41) === true){
	     do{
	      strungp = strungp.replace(imlooped41, gesh41);
	     }while(strungp.includes(imlooped41) === true);
	    }
	  
	   }
	   n41 = Number(n41) - 1;
	   }while(n41 >= 1);
	   
	   
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(n41 === 0){
	    n41 = Number(strungp.length);
	   }
	  }//end huhu41 loop 
	  
	  
	 //next should find all possibles with each ii1 position 
	 for(var huhu21 = 1; huhu21 <= ray8.length; huhu21++){
	 //2cd layer patterns 
	  var n32 = Number(strungp.length);
	   if(n32 > Number(ray1.length)){
	    n32 = Number(ray1.length);
	   }
	   var gi32 = ii1 + huhu21;
	   do{
	   var swim02 = 0;
		
	   var check11b = ray10[ii1] + "" + ray10[gi32];
	   var clen11b = Math.abs(Number(check11b.toString().length) * Number(n32));
	   
	   
	   if(Number(gi32) <= Number(ray8.length) && Number(ii1) >= 2 && Number(clen11b) < Number(strungp.toString().length) && Number(n32) >= 1){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	    var imlooped32 = '';
	    for(var ge32 = 0; ge32<=n32; ge32++){
	     imlooped32 += ray10[ii1] + "" + ray10[gi32]; //builds pattern out
		 swim02 = Number(swim02) + 1;
	    }
		
		if(swim02 >= 2){
	     var gesh33 = ray8[ii1]+""+ray8[gi32]+"u"+ray1[swim02];  //lowercase to match position on ray8 for pattern to reinsert (+) Uppercase times this pattern was repeated
		}
		else{
		 var gesh33 = ray8[ii1]+""+ray8[gi32]+"u";
		}
		
		 //identifier id is _ _uCAP && _ _ u
		 
		if(strungp.includes(imlooped32) === true){
	     do{
	      strungp = strungp.replace(imlooped32, gesh33);
	     }while(strungp.includes(imlooped32) === true);
	    }
	  
	   }
	   n32 = Number(n32) - 1;
	   }while(n32 >= 1);
	   
	   
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(n32 === 0){
	    n32 = Number(strungp.length);
	   }
	  }//end huhu21 loop 
	  
	 
	 //next should find all possibles with each ii1 position 
	 for(var huhu2 = 1; huhu2 <= ray8.length; huhu2++){
	 //2cd layer patterns 
	  var n3 = Number(strungp.length);
	   if(n3 > Number(ray1.length)){
	    n3 = Number(ray1.length);
	   }
	   var gi = ii1 + huhu2;
	   do{
	   var swim03 = 0;
		
	   var check1b = ray11[ii1] + "" + ray11[gi];
	   var clen1b = Math.abs(Number(check1b.toString().length) * Number(n3));
	   
	   
	   if(Number(gi) <= Number(ray8.length) && Number(ii1) >= 2 && Number(clen1b) < Number(strungp.toString().length) && Number(n3) >= 1){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	    var imlooped3 = '';
	    for(var ge3 = 0; ge3<=n3; ge3++){
	     imlooped3 += ray11[ii1] + "" + ray11[gi]; //builds pattern out
		 swim03 = Number(swim03) + 1;
	    }
		
		if(swim03 >= 2){
	     var gesh3 = ray8[ii1]+""+ray8[gi]+"v"+ray1[swim03];  //lowercase to match position on ray8 for pattern to reinsert (+) Uppercase times this pattern was repeated
		}
		else{
		 var gesh3 = ray8[ii1]+""+ray8[gi]+"v";
		}
		
		 //identifier id is _ _vCAP && _ _ v
		 
		if(strungp.includes(imlooped3) === true){
	     do{
	      strungp = strungp.replace(imlooped3, gesh3);
	     }while(strungp.includes(imlooped3) === true);
	    }
	  
	   }
	   n3 = Number(n3) - 1;
	   }while(n3 >= 1);
	   
	   
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(n3 === 0){
	    n3 = Number(strungp.length);
	   }
	  }//end huhu2 loop 
	  
	   
	   
	   <!-- above are doubles complex -->
	   <!-- below are singles complex -->
	  
	 //next should find all possibles with each ii1 position 
	 for(var hudu1 = 1; hudu1 <= ray8.length; hudu1++){
	 //2.5 layer patterns 
	  var nd1 = Number(strungp.length);
	   if(nd1 > Number(ray1.length)){
	    nd1 = Number(ray1.length);
	   }
	   var gid1 = ii1 + hudu1;
	   do{
	   
	   var swim1 = 0;
		
	   var check1da = ray9[ii1];
	   var clen1da = Math.abs(Number(check1da.toString().length) * Number(nd1));
	   
	   
	   if(Number(gid1) <= Number(ray8.length) && Number(ii1) >= 2 && Number(clen1da) < Number(strungp.toString().length) && Number(nd1) >= 1){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	   
		var imlooped1d = '';
	   for(var gee1d = 0; gee1d<=nd1; gee1d++){
	     imlooped1d += ray9[ii1] + ""; //builds pattern out
		 swim1 = Number(swim1) + 1;
	    }
		
		if(swim1 >= 2){
	     var gesh1d = ray8[ii1]+"t"+ray1[swim1];  //lowercase to match position on ray8 for pattern to reinsert (+) Uppercase times this pattern was repeated
		}
		else{
		 var gesh1d = ray8[ii1]+"t";
		}
		
		 //identifier id is _tCAP && _t
		 
		 
		if(strungp.includes(imlooped1d) === true){
	     do{
	      strungp = strungp.replace(imlooped1d, gesh1d);
	     }while(strungp.includes(imlooped1d) === true);
		}
		
	   }
	   nd1 = Number(nd1) - 1;
	   }while(nd1 >= 1);
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(nd1 === 0){
	    nd1 = Number(strungp.length);
	   }
	  }//end hudu1 loop 
	  
	  
	 //next should find all possibles with each ii1 position 
	 for(var hudu2 = 1; hudu2 <= ray8.length; hudu2++){
	 //2.5 layer patterns 
	  var nd2 = Number(strungp.length);
	   if(nd2 > Number(ray1.length)){
	    nd2 = Number(ray1.length);
	   }
	   var gid2 = ii1 + hudu2;
	   do{
	   
	   var swim2 = 0;
		
	   var check2da = ray10[ii1];
	   var clen2da = Math.abs(Number(check2da.toString().length) * Number(nd2));
	   
	   
	   if(Number(gid2) <= Number(ray8.length) && Number(ii1) >= 2 && Number(clen2da) < Number(strungp.toString().length) && Number(nd2) >= 1){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	   
		var imlooped2d = '';
	   for(var gee2d = 0; gee2d<=nd2; gee2d++){
	     imlooped2d += ray10[ii1] + ""; //builds pattern out
		 swim2 = Number(swim2) + 1;
	    }
		
		if(swim2 >= 2){
	     var gesh2d = ray8[ii1]+"u"+ray1[swim2];  //lowercase to match position on ray8 for pattern to reinsert (+) Uppercase times this pattern was repeated
		 }
		else{
		 var gesh2d = ray8[ii1]+"u";
		}
		 
		 //identifier id is _uCAP && _u
		 
		 
		if(strungp.includes(imlooped2d) === true){
	     do{
	      strungp = strungp.replace(imlooped2d, gesh2d);
	     }while(strungp.includes(imlooped2d) === true);
		}
		
	   }
	   nd2 = Number(nd2) - 1;
	   }while(nd2 >= 1);
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(nd2 === 0){
	    nd2 = Number(strungp.length);
	   }
	  }//end hudu2 loop 
	  
	  
	  
	 //next should find all possibles with each ii1 position 
	 for(var hudu3 = 1; hudu3 <= ray8.length; hudu3++){
	 //2.5 layer patterns 
	  var nd3 = Number(strungp.length);
	   if(nd3 > Number(ray1.length)){
	    nd3 = Number(ray1.length);
	   }
	   var gid3 = ii1 + hudu3;
	   do{
	   
	   var swim3 = 0;
		
	   var check3da = ray11[ii1];
	   var clen3da = Math.abs(Number(check3da.toString().length) * Number(nd3));
	   
	   
	   if(Number(gid3) <= Number(ray8.length) && Number(ii1) >= 2 && Number(clen3da) < Number(strungp.toString().length) && Number(nd3) >= 1){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	   
		var imlooped3d = '';
	   for(var gee3d = 0; gee3d<=nd3; gee3d++){
	     imlooped3d += ray11[ii1] + ""; //builds pattern out
		 swim3 = Number(swim3) + 1;
	    }
		
		
		if(swim3 >= 2){
	     var gesh3d = ray8[ii1]+"v"+ray1[swim3];  //lowercase to match position on ray8 for pattern to reinsert (+) Uppercase times this pattern was repeated
		 }
		else{
		 var gesh3d = ray8[ii1]+"v";
		}
		 
		 //identifier id is _vCAP && _v
		 
		 
		if(strungp.includes(imlooped3d) === true){
	     do{
	      strungp = strungp.replace(imlooped3d, gesh3d);
	     }while(strungp.includes(imlooped3d) === true);
		}
		
	   }
	   nd3 = Number(nd3) - 1;
	   }while(nd3 >= 1);
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(nd3 === 0){
	    nd3 = Number(strungp.length);
	   }
	  }//end hudu3 loop 
	  
	  
	  
	   <!-- above are singles complex -->
	   <!-- below are singles simple -->
	  
	 
	//  if(ii1 <= ray9.length && ii1 > 1){
	//   var t0 = ray9[ii1];
	//   var t1 = ii1+"t";
	//   do{
	//    strungp = strungp.replace(t0, t1);
//	   }while(strungp.includes(t0) === true);
//	  }
	   
	//  if(ii1 <= ray10.length && ii1 > 1){ 
//	   var t2 = ray10[ii1];
//	   var t3 = ii1+"u";
//	   do{
//	    strungp = strungp.replace(t2, t3);
//	   }while(strungp.includes(t2) === true);
//	  }
	   
//	  if(ii1 <= ray11.length && ii1 > 1){ 
//	   var t4 = ray11[ii1];
	//   var t5 = ii1+"v";
//	   do{
	//    strungp = strungp.replace(t4, t5);
	//   }while(strungp.includes(t4) === true);
//	  }
	  
	  
	   
	  
//	  var ii12 = Number(strungp.length);
	  
//	  do{
	  //0+ BUILDER
//	    var imaloop1 = '';
//	    for(var g3 = 0; g3<ii12; g3++){
//	     imaloop1 += "0" + "";
//	    }
	 
//	   if(strungp.includes(imaloop1) === true && ii1 > 2){
//	    var gesh1 = "0"+ray1[ii12];
//		do{
//	     strungp = strungp.replace(imaloop1, gesh1);
//	   }while(strungp.includes(imaloop1) === true);
//	   }
	  
	  
	  //1+ BUILDER
//	   var notaloop1 = '';
//	   for(var gg1 = 0; gg1<ii12; gg1++){
//	    notaloop1 += "1"+"";
//	   }
	  
//	   if(strungp.includes(notaloop1) === true && ii1 > 2){
//	    var gesh2 = "1"+ray1[ii12];
//		do{
//		 strungp = strungp.replace(notaloop1, gesh2);
//	   }while(strungp.includes(notaloop1) === true);
//	   }
//	   ii12 = Number(ii12) - 1;
//	   if(isNaN(ii12) === true || ii12 < 0){
//	    ii12 = 0;
//	   }
//	   }
//	   while(ii12 >= 3);
	   
	 ii1 = ii1 + 1;
	 }
	 while(ii1 < 6); //6 is limit set by ray8
	 
	 
	 

	   return(strungp);
}






function wrapper1(fill){

    var graphline = fill;
	var gllen = graphline.toString().length;
	
	
	var ai1 = 0;
	 
	 do{
	  if(ai1 <= ray12.length && ai1 >= 0){ //runs ray12 (first wrapper set) by self
	   var mo1 = ray12[ai1];
	   var mo2 = ai1+"a";
	   do{
	    graphline = graphline.replace(mo1, mo2);
	   }while(graphline.includes(mo1) === true);
	  }
	  
	 //muext should fimud all possibles with each ai1 positiomu 
	 for(var humu1 = 1; humu1 <= ray13.length; humu1++){
	 //2.5 layer pattermus 
	  var mu2 = Number(graphline.length);
	   if(mu2 > Number(ray1.length)){
	    mu2 = Number(ray1.length);
	   }
	   var mi = ai1 + humu1;
	   do{
	   var check99a = ray13[ai1] + "" + ray13[mi] + "" + ray13[ai1];
	   var clen99a = Math.abs(Number(check99a.toString().length) * Number(mu2));
	   
	   
	   if(Number(mi) <= Number(ray13.length) && Number(ai1) >= 0 && Number(clen99a) < Number(graphline.toString().length)){ //we domu't wamut to use positiomus 0 muor 1 imu the rays for they are just 0 & 1 imu all of them!
	    var looper01 = '';
	    for(var hm2 = 0; hm2<=mu2; hm2++){
	     looper01 += ray13[ai1] + "" + ray13[mi] + "" + ray13[ai1]; //builds pattermu out
	    }
		
	     var gh2 = ray0[ai1]+""+ray0[mi]+""+ray0[ai1]+""+ray1[mu2];  //lowercase to match positiomu omu ray13 for pattermu to reimusert (+) Uppercase times this pattermu was repeated
		 
		 var looper11 = '';
	    for(var hm22 = 0; hm22<mu2; hm22++){
	     looper11 += ray13[mi] + "" + ray13[ai1] + "" + ray13[mi]; //builds pattermu out
	    }
	     var gh22 = ray0[mi]+""+ray0[ai1]+""+ray0[mi]+""+ray1[mu2];  //lowercase to match positiomu omu ray13 for pattermu to reimusert (+) Uppercase times this pattermu was repeated
		 
		
		 
		if(graphline.includes(looper01) === true){
	     do{
	      graphline = graphline.replace(looper01, gh2);
	     }while(graphline.includes(looper01) === true);
		}
		
		if(graphline.includes(looper11) === true){
	     do{
	      graphline = graphline.replace(looper11, gh22);
	     }while(graphline.includes(looper11) === true);
		}
		
		
	   }
	   mu2 = Number(mu2) - 1;
	   }while(mu2 >= 1);
	   
	   //this should prevemut umuessasarry error from the multi-loop
	   if(mu2 === 0){
	    mu2 = Number(graphline.length);
	   }
	  }//emud humu1 loop 
	  
	  
	 //next should find all possibles with each ai1 position 
	 for(var humu2 = 1; humu2 <= ray13.length; humu2++){
	 //2cd layer patterns 
	  var mu3 = Number(graphline.length);
	   if(mu3 > Number(ray1.length)){
	    mu3 = Number(ray1.length);
	   }
	   var hm3 = ai1 + humu2;
	   do{
	   var check99b = ray13[ai1] + "" + ray13[hm3];
	   var clen99b = Math.abs(Number(check99b.toString().length) * Number(mu3));
	   
	   
	   if(Number(hm3) <= Number(ray13.length) && Number(ai1) >= 0 && Number(clen99b) < Number(graphline.toString().length)){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	    var looper02 = '';
	    for(var mg3 = 0; mg3<mu3; mg3++){
	     looper02 += ray13[ai1] + "" + ray13[hm3]; //builds pattern out
	    }
		
	     var ghm3 = ray0[ai1]+""+ray0[hm3]+""+ray1[mu3];  //lowercase to match position on ray13 for pattern to reinsert (+) Uppercase times this pattern was repeated
		 
		  var looper22 = '';
	    for(var mg33 = 0; mg33<=mu3; mg33++){
	     looper22 += ray13[hm3] + "" + ray13[ai1]; //builds pattern out
	    }
		
	     var ghm33 = ray0[hm3]+""+ray0[ai1]+""+ray1[mu3];  //lowercase to match position on ray13 for pattern to reinsert (+) Uppercase times this pattern was repeated
		 
		 
		if(graphline.includes(looper02) === true){
	     do{
	      graphline = graphline.replace(looper02, ghm3);
	     }while(graphline.includes(looper02) === true);
	    }
	  
		 
		if(graphline.includes(looper22) === true){
	     do{
	      graphline = graphline.replace(looper22, ghm33);
	     }while(graphline.includes(looper22) === true);
	    }
	  
	  
	   }
	   mu3 = Number(mu3) - 1;
	   }while(mu3 >= 1);
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(mu3 === 0){
	    mu3 = Number(graphline.length);
	   }
	  }//end humu2 loop 
	  
	 
	 
	 //next should find all possibles with each ai1 position 
	 for(var humu3 = 1; humu3 <= ray13.length; humu3++){
	 //2cd layer patterns 
	  var mu4 = Number(graphline.length);
	   if(mu4 > Number(ray1.length)){
	    mu4 = Number(ray1.length);
	   }
	   var hm4 = ai1 + humu3;
	   do{
	   var check99c = ray13[ai1] + "" + ray13[ai1];
	   var clen99c = Math.abs(Number(check99c.toString().length) * Number(mu4));
	   
	   
	   if(Number(hm4) <= Number(ray13.length) && Number(ai1) >= 0 && Number(clen99c) < Number(graphline.toString().length)){ //we don't want to use positions 0 nor 1 in the rays for they are just 0 & 1 in all of them!
	    var looper03 = '';
	    for(var mg4 = 0; mg4<=mu4; mg4++){
	     looper03 += ray13[ai1] + ""; //builds pattern out
	    }
		
	     var ghm4 = Number(mu4)+""+"a"+""+ray1[mu4];  //lowercase to match position on ray13 for pattern to reinsert (+) Uppercase times this pattern was repeated
		 
		 
		if(graphline.includes(looper03) === true){
	     do{
	      graphline = graphline.replace(looper03, ghm4);
	     }while(graphline.includes(looper03) === true);
	    }
	  
	   }
	   mu4 = Number(mu4) - 1;
	   }while(mu4 >= 1);
	   
	   //this should prevent unessasarry error from the multi-loop
	   if(mu4 === 0){
	    mu4 = Number(graphline.length);
	   }
	  }//end humu3 loop 
	  
	  
	  
	   do{
	   
	   if(ai1 <= ray7.length && ai1 >= 0){ //should do entire array 0,1,{special patterns}
	    var looper19 = '';
	    for(var gf2 = 0; gf2<=mu4; gf2++){
	     looper19 += ray7[ai1] + ""; //builds pattern out
	    }
		
	     var gsh1 = ray8[ai1]+ray1[mu4];  //lowercase to match position on ray7 for pattern to reinsert (+) Uppercase times this pattern was repeated
	     
		if(graphline.includes(looper19) === true){
		 do{
	      graphline = graphline.replace(looper19, gsh1);
	     }while(graphline.includes(looper19) === true);
	    }
	 
	   }
	   mu4 = Number(mu4) - 1;
	   }while(mu4 >= 2);
	   
	   
	  if(ai1 <= ray13.length && ai1 >= 0){ //runs ray13 (first wrapper set) by self
	   var mo11 = ray13[ai1];
	   var mo22 = ai1+"A";
	   do{
	    graphline = graphline.replace(mo11, mo22);
	   }while(graphline.includes(mo11) === true);
	  }
	  
	   
	 ai1 = ai1 + 1;
	 }
	 while(ai1 < graphline.length);
	 
	 
	 

	   return(graphline);
}




function wrapper2(collection){  //lowCAPlow   //starts at 4
var group  = 1;
var thisstring = collection;
var tstringlen = thisstring.length;
var offset = Number(tstringlen) - 26;
var first = 0;
var second = 0;
var rec1 = 1;

if(offset.toString().search(/\-/) >= 0){
 offset = offset.replace(/\-/, '');
}

// if tstringlen = 33; offset = 7;
// if tstringlen = 19; offset = 7;
 
 
  var baseline1 = tstringlen - offset;
  
   if(baseline1.toString().search(/\-/) >= 0){
    baseline1 = baseline1.replace(/\-/, '');
   }
   
  var notstring = '';
  
  var stringcoll = [];
  
  //loop through all possible dups 
 var counter = 4;
 var allarr = [];
 var fullcount = 0;
 var fullarr = [];
 
 
 for(var notc = counter; notc < 26; notc++){
  var all = document.createElement("p");
  all.innerText = "/(\w+|\W+|\d+|\D+){"+counter+"}/g";
  var quick = "/(\w+|\W+|\d+|\D+){"+counter+"}/g";
  var test = all.innerText;
  all.innerHTML = thisstring.replace(quick, test); //shows the row
  all.style = "display:none";
  all.id = "all"+""+counter;
  document.body.appendChild(all);
 //}   <!-- this is the one that we are placing and taking -->
   
 //getting strange results but if we move the current } to above this line, we get more predictable results but still confusing output compared to what we are expecting to see.]
 
 
 //try closing the top off and doing the bottom part in a different section cause all the parts indipendently work, just not together
 //for(var thisis = 0; thisis < 26; thisis++){ <!-- this opener not working -->
  allarr.push(document.getElementById("all"+counter).innerHTML);
  var nc1 = fullcount, c1 = counter;
  do{
  fullarr.push(allarr.toString().slice(nc1,c1));
  nc1 = Number(nc1) + 1;
  c1 = Number(c1) + 1;
  }while(c1 < document.getElementById("all"+counter).length);
  document.getElementById('ami').innerHTML = fullarr[1];
  
  var curr = fullarr[fullcount];
  var currwhere = thisstring.search(curr);
  var swapmagnet = ray14[currwhere]+"?"+ray1[group]+"?"+ray14[counter];
 fullcount = Number(fullcount)+1;
 
 notstring = thisstring.slice(0,counter) + "" + thisstring.slice(Number(counter+1),).replace(curr, swapmagnet);
  thisstring = notstring;
  counter = Number(counter)+1;
 }
 group = Number(group) + 1;
 var thiscount = 4;
 var thatcount = Math.abs(Number(thiscount)*2);
 
// do{
//var swappee = document.getElementById("all"+thiscount).innerHTML;
//  thisstring = thisstring.slice(0,thiscount) + "" + thisstring.slice(thatcount,).replace(swa
 
 
 //}while(thiscount<=counter);
 
 
  
 // allarr = thisstring.match(all[thiscount]);
 //  var q1 = document.getElementById('ami').innerHTML;
 //  document.getElementById('ami').innerHTML = q1 + "" + thisstring.match(all[thiscount]);
   
 // var curr = allarr; //[thiscount];
 // var currwhere = thisstring.slice(0,counter).search(curr);
 // var swapmagnet = ray14[currwhere]+"!"+ray1[group]+"?"+ray14[thiscount];
  
 // notstring = thisstring.slice(0,counter) + "" + thisstring.slice(Number(counter+1),).replace(curr, swapmagnet);
 
//  counter = Number(counter)+1;
//  thisstring = notstring;
 // thiscount = Number(thiscount) + 1;
 // thatcount = Math.abs(Number(thiscount)+Number(thiscount));
  
 //}
 
  
 
// for(var allc = 0; allc < all.length; allc++){ //make arr of combos
 
//   allarr.push(thisstring.match(all[allc])); //should snag all combos with all all[NUM] regexp object(s)
//  }
  
 
 
//  for(var numhere = 0; numhere < allarr.length; numhere++){
//  var curr = allarr[numhere];
 // var currwhere = thisstring.slice(0,thiscount).search(curr);
//  var swapmagnet = ray14[currwhere]+""+ray1[group]+""+ray14[thiscount];
  
//  notstring = thisstring.slice(0,thiscount) + "" + thisstring.slice(thiscount,).replace(curr, swapmagnet);
 
//  thisstring = notstring;
//  thiscount = Number(thiscount) + 1;
//  thatcount = Math.abs(Number(thiscount)+Number(thiscount));
// }
 
// document.getElementById('ami').innerHTML = allarr;
 
 
 
   return(thisstring);
}



function toggle2(){
 document.getElementById('togg2').style.display="none";
 document.getElementById('togg3').style.display="block";
 
 document.getElementById('subout').innerHTML = "<h1 style='text-align:center;align:center;'>Recgonized Patterns<hr style='width:60vw'></h1></br></br>Ray0: "+ray0.toString().replace(/\,/g, " &nbsp; ").replace("0", "").replace("1", "")+"</br></br>Ray1: "+ray1.toString().replace(/\,/g, " &nbsp; ").replace("0", "").replace("1", "")+"</br></br>Ray2: "+ray2.toString().replace(/\,/g, " &nbsp; ").replace("0", "").replace("1", "") + "</br></br>Ray3: " +  ray3.toString().replace(/\,/g, " &nbsp; ").replace("0", "").replace("1", "") + "</br></br>Ray4: " +  ray4.toString().replace(/\,/g, " &nbsp; ").replace("0", "").replace("1", "") + "</br></br>Ray5: " +  ray5.toString().replace(/\,/g, " &nbsp; ").replace("0", "").replace("1", "") + "</br></br>Ray6: " +  ray6.toString().replace(/\,/g, " &nbsp; ").replace("0", "").replace("1", "") + "</br></br>Ray7: "+ray7.toString().replace(/\,/g, " &nbsp; ") + "</br></br>Ray8: " +  ray8.toString().replace(/\,/g, " &nbsp; ").replace("0", "").replace("1", "") + "</br></br>Ray9: " +  ray9.toString().replace(/\,/g, " &nbsp; ").replace("0", "").replace("1", "") + "</br></br>Ray10: " +  ray10.toString().replace(/\,/g, " &nbsp; ").replace("0", "").replace("1", "") + "</br></br>Ray11: " +  ray11.toString().replace(/\,/g, " &nbsp; ").replace("0", "").replace("1", "") + "</br></br>Ray12: "+ray12.toString().replace(/\,/g, " &nbsp; ")+"</br></br>Ray13: "+ray13.toString().replace(/\,/g, " &nbsp; ")+"</br></br></br><hr></br>";


}


function toggle3(){
 document.getElementById('togg3').style.display="none";
 document.getElementById('togg2').style.display="block";
 
 document.getElementById('subout').innerHTML = "";


}




