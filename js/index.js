const sele=document.getElementById('boton');
sele.addEventListener('click', ()=>
{
    random=Math.floor(Math.random() *2) +1;
    let selec =document.getElementById('caraosello').value
    let apuesta =document.getElementById('apuestav').value

    let acumulado = 0;
    let opcion;
    let contador = 0; 

    opcion=confirm("¿Desea empezar a jugar?")

    alert(`La moneda esta girado, espere un momento`)
    
    while(opcion == true)
{
        random=Math.floor(Math.random() *2) +1;
    if(selec==1 && random==1)
    {
        alert(`Esto es Cara`)
        alert(`Es correcto, usted gano`)
        acumulado=acumulado+(apuesta*2)
        alert(`Usted ha ganado, lleva acumulado: `+acumulado)
    }
    else if(selec==2 && random==2)
    {
        alert(`Esto es Sello`)
        alert(`Es correcto, usted gano`)
        acumulado=acumulado+(apuesta*2)
        alert(`Usted ha ganado, lleva acumulado: `+acumulado)
    }
    else
    {
        alert(`La moneda es diferente a su seleccion`)
        alert(`Usted ha perdido`)
        acumulado=acumulado-(apuesta)
        alert(`Usted ha perdido, acumulo: `+acumulado)
    }
    
    contador = contador+1;

    opcion=confirm("Desea seguir jugando?")
}
    
        alert(`Usted ha jugado `+contador+ " partidas y su dinero acumulado es: "+acumulado)

})
