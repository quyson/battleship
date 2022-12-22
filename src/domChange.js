function changeStatus(message){
    const informationTag = document.querySelector('.informationTag');
    informationTag.textContent = message;
}

function changeBoard(player, value, symbol, variableReference){
    if(player == variableReference.variable1){
        if(symbol == 'x'){
            let box = document.querySelector(`#p${value}`);
            box.textContent = 'x';
            box.style.fontWeight = '900';
            box.style.backgroundColor = '#808080';
        } else {
            let box = document.querySelector(`#p${value}`);
            box.textContent = '!';
            box.style.fontWeight = '900';
            box.style.backgroundColor = 'red';
        }
    } else if(player == variableReference.variable2) {
        if(symbol == 'x'){
            let box = document.querySelector(`#cpu${value}`);
            box.textContent = 'x';
            box.style.fontWeight = '900';
            box.style.backgroundColor = '#808080';
        } else {
            let box = document.querySelector(`#cpu${value}`);
            box.textContent = '!';
            box.style.fontWeight = '900';
            box.style.backgroundColor = 'green';
        }
    }
}

export {changeBoard, changeStatus}