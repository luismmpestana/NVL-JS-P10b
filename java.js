var lista=[]
var par=[]
var impar=[]

  for (var i = 0; i < 50; i++) 
  {
  var numeros= Math.floor((Math.random() * 100) + 1);
  lista[i]=numeros;

if (numeros %2 == 0) {
    par.push(numeros);
      }

else {
    impar.push(numeros);
      }
}

document.write(lista + "<br>");
document.write(par + "<br>");
document.write(impar);