// Generate a random pin 
function pinGenerator(){
const pin = Math.round(Math.random() *10000);
const mixPin = pin + '';
if(mixPin.length == 4){
    return pin
}else{
    return pinGenerator()
}
}
// Pin Output
function generatePin(){
const pinInput = document.getElementById('show-pin');
pinInput.value = pinGenerator();; 
}

//Output keypad Value
document.getElementById('key-pad').addEventListener('click',function(event){
    const keyPadValue = event.target.innerText;
    const outPutTheKeys = document.getElementById('show-keypad-value');
    const keyValue = outPutTheKeys.value
    if(!isNaN(keyPadValue) && keyPadValue.length == 1){
        outPutTheKeys.value= outPutTheKeys.value + keyPadValue;
    }else if(keyPadValue == "C"){
        outPutTheKeys.value = '';
    }
    else if(keyPadValue == "<"){
        const removeLast =  keyValue.slice(0,-1)
        outPutTheKeys.value = removeLast
    }
})

// verify the match 
document.getElementById('verify').addEventListener('click',function(){
    const pinInput = document.getElementById('show-pin').value;
    const outPutTheKeys = document.getElementById('show-keypad-value');
    const currentKey = outPutTheKeys.value;
    const matched = document.getElementById('matched');
    const unMatched = document.getElementById('not-matched');
    if(pinInput === currentKey){
        console.log('matched')
        matched.style.display='block';
        unMatched.style.display='none';
    }else{
        unMatched.style.display='block';
        matched.style.display='none'
    }
    outPutTheKeys.value = '';
})