let coin = document.querySelector(".coin");
let tirar = document.querySelector("#boton");
let apuesta = document.querySelector("#apuestav");
let opcion = document.querySelector("#caraosello");
let reiniciar = document.querySelector("#reinicio");
let acumulado=0;
let contador=0;

tirar.addEventListener("click", () => 
{
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";

    let opcionusu=parseInt(opcion.value)
    let apuestausu=parseInt(apuesta.value)
    contador = contador+1;

    if(i)
    {   
        setTimeout(function()
        {
            if(i===opcionusu)
            {
                acumulado=(parseInt(acumulado+(apuestausu*2)));
                alert("Usted ha ganado, ha caido cara, su acumulado es "+acumulado)

                opcion=confirm("Desea seguir jugando?")
                
            }else
            {
                acumulado=(parseInt(acumulado-(apuestausu*2)));
                alert("Usted ha perdido, ha caido cara, su acumulado es "+acumulado)

                opcion=confirm("Desea seguir jugando?")
                
            }
        }, 3000);
       
    }
    else
    {
        coin.style.animation = "spin-tails 3s forwards";
        setTimeout(function()
        {
            if(i==opcionusu)
            {
                acumulado=(parseInt(acumulado+(apuestausu*2)));
                alert("Usted ha ganado, ha caido sello, su acumulado es "+acumulado)

                opcion=confirm("Desea seguir jugando?")
            }else
            {
                acumulado=(parseInt(acumulado-(apuestausu*2)));
                alert("Usted ha perdido, ha caido sello, su acumulado es "+acumulado)

                opcion=confirm("Desea seguir jugando?")
            }
        }, 3000);
        
    }
    setTimeout(updateStats, 3000);
    disableButton();

    

    opcion=confirm("Desea seguir jugando?")
    alert(`Usted ha jugado `+contador+ " partidas y su dinero acumulado es: "+acumulado)
});


reiniciar.addEventListener("click",() => 
{
    opcion=confirm("Desea salir del juego?")
    alert(`Usted ha jugado `+contador+ " partidas y su dinero acumulado es: "+acumulado)
    
    .then((result) => 
    {    
            window.location.href = "./index.html";   
    })
});

