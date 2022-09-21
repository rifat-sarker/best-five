function addToPlayer(name, button){
    
    const playerList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = `${name}`;

    const playerListLeng = document.querySelectorAll('.selected');
     
    if(playerListLeng.length < 5){
        
        playerList.appendChild(li);
    }
    else{
        alert('You can not add more than 5 players');
        return;
    }
    
    button.setAttribute('disabled', true);
    
    
}
function calculate(){
    const perPlayer = document.getElementById('per-player').value;
    const playerListLeng = document.querySelectorAll('.selected');
    const total = document.getElementById('total')
    total.innerText = `${parseFloat(perPlayer) * playerListLeng.length}`;
    

}

function calculateTotal(){
    const managerCharge = document.getElementById('manager-charge').value;
    const coachCharge = document.getElementById('coach-charge').value;
    const total = document.getElementById('total').innerText;
    const subTotal = document.getElementById('subtotal');
    subTotal.innerText = `${parseFloat(total) + parseFloat(managerCharge) + parseFloat(coachCharge) }`;

}