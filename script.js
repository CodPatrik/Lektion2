
//Här är exempel på variabler som tilldelas olika datatyper.

let myFirstName = "Patrik";  // String

let number = 1;  // Integer ,dvs ett heltal

let decimalNumber = 1.3; //Float  ,decimaltal

let isTrue = true;  // Boolean

isTrue = false;

let number=5;   //Variabeln tilldelas värdet 5
number = null;  //Variabeln är efter denna rad tom innehåller ingenting.

let kalle = undefined; // Odefinierad variabel ,den vet inte vad den är riktigt.



// Att öka värdet på en variabel som innehåller datatypen integer med 1
// kan göras på två sätt varav det sista inte fungerar i alla programspråk.

let numberA = 1;

//Alternativ 1:
numberA = numberA +1;

//Alternativ 2:
numberA++;

// Det går även att dra bort 1 med två minustecken , numberA--;

console.log(numberA);



/* Jämföra två olika saker med varandra
   = betyder i javscript tilldela
   == används om man vill kontrollera om två saker ser lika ut.
   === Används om man vill kontrollera att det är samma saker 
       Samma värde och samma datatyp.
*/


let siffraA = "20"; // Detta är en textsträng med tecknen 2 och tecknet 0
let siffraB = 20; // Detta är en integer dvs ett heltal


let test = siffraA === 20;  // Variabeln test tilldelas resultatet av uttrycket (siffraA === 20)
                            // Resultatet är sant eller falskt.

console.log(test);

/* En if sats där man inom parentes skall ange ett påstående som kan vara sant "truthy" eller falskt "falsy"
   Det går att använda en variabel som har tilldelats ett boolean värde innan i programmet.
   tex variabeln test som jag använde här tidigare.
   if(test){};
*/
if(siffraA === 20){
    // Om uttrycket är truthy hamnar vi här i koden.
    console.log("Är sant ,truthy");
}else{
    // OM uttrycket är falsy så hamnar vi här istället.
    console.log("Är falskt ,falsy");
}


/*
  Variabler går att bunta ihop under ett o samma namn vilket kan vara praktiskt 
  om man ska beskriva en sak i programmering kallas detta ett objekt.
  
  Ska man beskriva en bil så går det åt många variabler för att kunna göra det och man måste
  hitta på en massa olika namn på alla dessa vilket inte alltid är enkelt.

  Senare i kursen kommer vi gå igenom detta ordentligt.
  Att det kommer upp här och nu är för att jag vill att
  ni ska förstå att nästan allt är objekt och att när man börja 
  skriva koder som bil.color så är det ett objekt.

*/

// Härt deklarerar jag ett objekt som får namnet bil
let car = {
    // Här får objektet olika parametrar.
    color : "Red",
    make : "Volvo",
    width : 2.1
} 


console.log(car.color);

/*
När man skall komma åt saker på sin webbsida så är allt objekt

tex raden nedan
console.log(document.getElementById("nameText").innerText);

*/


/*

Nästa lektion kommer handla om operander.

När jag säger välkomna nästa lektion vill jag att ni svarar

tackar tackar ! 

Då kommer det bli tydligt vem som kollar på det som läggs ut och inte.

*/