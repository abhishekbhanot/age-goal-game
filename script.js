function clic(){
    let firstInput = parseInt(document.getElementById("first").value); 
    let secondInput = parseInt(document.getElementById("second").value); 
    let thirdInput = parseInt(document.getElementById("third").value);
    let show=document.getElementById("show")


  
    let date = new Date();  // Current date
    let date2 = new Date(firstInput, 0, 1); 
    let currentAge = date.getFullYear() - date2.getFullYear(); 

    let final=thirdInput/secondInput;
    
    let final3=Math.floor(final/365);
console.log(currentAge);
    console.log(final3);

    let res=currentAge+final3;
    show.innerText=`your goal should be complete at ${res}`
    

   
    
  
    
    console.log("hello");
  }




