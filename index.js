// Code your solutions in this file

function writeCards(names, event){
  let result = " ";
 for(let i=0;i<names.length;i++){
  
   result+= "["+ "Thank you, " + names[i] + " for the wonderful " + event+ " gift !"+"\n"+ "]";}
   return result;
  
}
writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], "surprise");


function countDown(number){
  while(number<=10 && number>=0){
    console.log(number--);
  }
}
countDown(10);