const square=document.querySelectorAll('.square');
var loss=false;
for(var i =0;i<25;i++)
square[i].innerHTML="";
var time=1;
var xy=0;
const score=document.querySelector('span');
score.innerHTML=0;
startgame();
  function colour(i){
    var color='#A9A9A9';
    switch (i){
      case 2 : color = '#D2691E'; break;
      case 4 : color = '#FF7F50'; break;
      case 8 : color = '#ffbf00'; break;
      case 16 : color = '#bfff00'; break;
      case 32 : color = '#40ff00'; break;
      case 64 : color = '#00bfff'; break;
      case 128 : color = '#FF7F91'; break;
      case 256 : color = '#0040ff'; break;
      case 512 : color = '#ff0080'; break;
      case 1024 : color = '#D2691E'; break;
      case 2048 : color = '#FF7F50'; break;
      case 4096 : color = '#ffbf00'; break;
      default : color = '#A9A9A9';
    }
    return color;
  }
  function colourcell(){
    for(var i=0;i<25;i++){
            square[i].innerHTML="";
            square[i].style.backgroundColor=colour(0);
    }
  }
  function placevalue(){
    var i= 2 * Math.ceil(Math.random() * 2);
     
      while(true){
        j=Math.floor(Math.random() * 25);
        if(!(square[j].innerHTML >0)){
          square[j].innerHTML=i;
          square[j].style.backgroundColor=colour(i);  
          console.log(j); 
          break;
        }
      
      }
  }

function startgame(){
   colourcell();
   placevalue();
   placevalue();
   
}
document.onkeydown = function (event) {
  if (!loss) {
    if (event.keyCode === 38 ) {
      console.log(54);
      moveUp(); 
    } else if (event.keyCode === 39) {
      moveRight();
    } else if (event.keyCode === 40) {
      movedown(); 
    } else if (event.keyCode === 37) {
      moveLeft(); 
    }
  }
}
function down(i,limit){
  if(square[i].innerHTML >0){
                if(square[i].innerHTML==square[i+1].innerHTML){
                  var value=square[i].innerHTML*2;
                  square[i+1].innerHTML=value;
                  square[i].innerHTML="";
                  square[i+1].style.backgroundColor=colour(value);
                  square[i].style.backgroundColor=colour(0);
                  
                  var temp_value=score.innerHTML*1;
                  value+=temp_value;
                  score.innerHTML=value;
                }
                else{
                  while(square[i+1].innerHTML==0)
                  {
                    square[i+1].innerHTML=square[i].innerHTML;
                    square[i].innerHTML="";
                    var value=square[i+1].innerHTML;
                    square[i].style.backgroundColor=colour(0);
                    square[i+1].style.backgroundColor=colour(value*1);
                    if(i==limit-1)
                    break;
                    i++;
                  }
                  if(i>=limit)
                  return;
                 if(square[i].innerHTML!=square[i+1].innerHTML)
                 return;
                 else
                 down(i,limit);
                }
  }
}
function movedown(){
  setTimeout(() => {
    for(var i=3,j=4,k=1;k<=5;k++,i+=5,j+=5)
    down(i,j);
    setTimeout(() => {
      for(var i=2,j=4,k=1;k<=5;k++,i+=5,j+=5)
      down(i,j);
          setTimeout(() => {
            for(var i=1,j=4,k=1;k<=5;k++,i+=5,j+=5)
            down(i,j);
              setTimeout(() => {
                for(var i=0,j=4,k=1;k<=5;k++,i+=5,j+=5)
                down(i,j);            
        }, time);
      }, time);
    }, time);
  }, time);
  setTimeout(() => {
    placevalue();
  },10);
}


function up(i,limit){
  if(square[i].innerHTML >0){
    if(square[i].innerHTML==square[i-1].innerHTML){
      var value=square[i].innerHTML*2;
      square[i-1].innerHTML=value;
      square[i].innerHTML="";
      square[i-1].style.backgroundColor=colour(value);
      square[i].style.backgroundColor=colour(0);
      
      var temp_value=score.innerHTML*1;
      value+=temp_value;
      score.innerHTML=value;
    }
    else{
      while(square[i-1].innerHTML==0)
      {
        
        square[i-1].innerHTML=square[i].innerHTML;
        square[i].innerHTML="";
        var value=square[i-1].innerHTML;
        square[i].style.backgroundColor=colour(0);
        square[i-1].style.backgroundColor=colour(value*1);
        if(i==limit+1)
        break;
        i--;
      }
      if(i<=limit)
      return;
     if(square[i].innerHTML!=square[i-1].innerHTML)
     return;
     else
     up(i,limit);
    }
}
}
function moveUp(){
  setTimeout(() => {
    for(var i=1,j=0,k=1;k<=5;k++,i+=5,j+=5)
    up(i,j);
    setTimeout(() => {
      for(var i=2,j=0,k=1;k<=5;k++,i+=5,j+=5)
      up(i,j);
          setTimeout(() => {
            for(var i=3,j=0,k=1;k<=5;k++,i+=5,j+=5)
            up(i,j);
              setTimeout(() => {
                for(var i=4,j=0,k=1;k<=5;k++,i+=5,j+=5)
                up(i,j);            
        }, time);
      }, time);
    }, time);
  }, time);
  setTimeout(() => {
    placevalue();
  },10);
}

function left(i,limit){
  if(square[i].innerHTML >0){
    if(square[i].innerHTML==square[i-5].innerHTML){
      var value=square[i].innerHTML*2;
      square[i-5].innerHTML=value;
      square[i].innerHTML="";
      square[i-5].style.backgroundColor=colour(value);
      square[i].style.backgroundColor=colour(0);
      var temp_value=score.innerHTML*1;
      value+=temp_value;
      score.innerHTML=value;
    }
    else{
      while(square[i-5].innerHTML==0)
      {
        square[i-5].innerHTML=square[i].innerHTML;
        square[i].innerHTML="";
        var value=square[i-5].innerHTML;
        square[i].style.backgroundColor=colour(0);
        square[i-5].style.backgroundColor=colour(value*1);
        if(i<=limit+5)
        break;
        i-=5;
      }
      if(i<=limit)
      return;
     if(square[i].innerHTML!=square[i-5].innerHTML)
     return;
     else
    left(i,limit);
    }
}
}
function moveLeft(){
   setTimeout(() => {
    for(var i=5,j=0,k=1;k<=5;k++,i++,j++)
    left(i,j);
    setTimeout(() => {
      for(var i=10,j=0,k=1;k<=5;k++,i++,j++)
      left(i,j);
          setTimeout(() => {
            for(var i=15,j=0,k=1;k<=5;k++,i++,j++)
            left(i,j);
              setTimeout(() => {
                for(var i=20,j=0,k=1;k<=5;k++,i++,j++)
                left(i,j);            
        }, time);
      }, time);
    }, time);
  }, time);
  setTimeout(() => {
    placevalue();
  },10);
}

function right(i,limit){
  if(square[i].innerHTML >0){
                if(square[i].innerHTML==square[i+5].innerHTML){
                  var value=square[i].innerHTML*2;
                  square[i+5].innerHTML=value;
                  square[i].innerHTML="";
                  square[i+5].style.backgroundColor=colour(value);
                  square[i].style.backgroundColor=colour(0);
                  var temp_value=score.innerHTML*1;
                  value+=temp_value;
                  score.innerHTML=value;
                }
                else{
                  while(square[i+5].innerHTML==0)
                  {
                    
                    square[i+5].innerHTML=square[i].innerHTML;
                    square[i].innerHTML="";
                    var value=square[i+5].innerHTML;
                    square[i].style.backgroundColor=colour(0);
                    square[i+5].style.backgroundColor=colour(value*1);
                    if(i==limit-5)
                    break;
                    i+=5;
                  }
                  if(i>=limit)
                  return;
                 if(square[i].innerHTML!=square[i+5].innerHTML)
                 return;
                 else
                 right(i,limit);
                }
  }
}

function moveRight(){
  setTimeout(() => {
   for(var i=15,j=20,k=1;k<=5;k++,i++,j++)
   right(i,j);
   setTimeout(() => {
     for(var i=10,j=20,k=1;k<=5;k++,i++,j++)
       right(i,j);
         setTimeout(() => {
           for(var i=5,j=20,k=1;k<=5;k++,i++,j++)
           right(i,j);
             setTimeout(() => {
               for(var i=0,j=20,k=1;k<=5;k++,i++,j++)
               right(i,j);            
       }, time);
     }, time);
   }, time);
 }, time);
 setTimeout(() => {
   placevalue();
 },10);
}