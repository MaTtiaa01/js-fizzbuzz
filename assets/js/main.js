//Scrivi un programma che stampi in console i numeri da 1 a 100,

//queryselector
//.innerHTML +=
// Will evaluate to true if the variable is divisible by 2
//variable % 2 === 0 

let row = document.querySelector(".row");


for (let i = 1; i <= 100; i++) {

    //ma che per i multipli di 3 stampi “Fizz” al posto del numero
   if (i % 3 === 0){
      const element = `<div class="col box box${i}"> Fizz </div>   `

      row.innerHTML += element;
      console.log(element);

    //e per i multipli di 5 stampi “Buzz”.
   } else if(i % 5 === 0){
    const element = `<div class="col box box${i}"> Buzz </div>   `

    row.innerHTML += element;
    console.log(element);
    //Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
   } else if (i % 3 === 0 & i % 5 === 0)  {
    const element = `<div class="col box box${i}"> FizzBuzz </div>   `

    row.innerHTML += element;
    console.log(element);
   }
   else{
    const element = `<div class="col box box${i}"> ${i}</div>   `

    row.innerHTML += element;
    console.log(element);
   }
    
}



