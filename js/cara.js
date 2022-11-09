let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#boton");
let resetBtn = document.querySelector("#reset-button");
let reinicioBtn = document.querySelector("#reinicio");

let heads = 0;
let tails = 0;

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats()
{
    document.querySelector("#heads-count").textContent = `Cara: ${heads}`;
    document.querySelector("#tails-count").textContent = `Sello: ${tails}`;
}

function disableButton()
{
    flipBtn.disabled = true;
    setTimeout(function()
    {
        flipBtn.disabled = false;
    },3000);
}

reinicioBtn.addEventListener("click",() => 
{
    alert(`Resumen de la partida: cantidad de partidas: ${cont}, dinero acumulado por apuestas: ${totalapuesta} monto final: ${total}`)
    .then((result) => 
    {    
            window.location.href = "./index.html";   
    })
});

