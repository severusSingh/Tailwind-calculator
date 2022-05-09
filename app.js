let display = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = " ";

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText= e.target.innerText;
        if(buttonText=='AC'){
            screenvalue=' ';
            display.value = screenvalue;
        }

        else if(buttonText=='del'){
            
            screenvalue = display.value.slice(0,-1);
            display.value = screenvalue;

        }

        else if(buttonText=='='){
            try{
                display.value= eval(screenvalue);
            }
            catch{
                display.value='Error!';
            }
            
        }
        else{
            screenvalue += buttonText;
            display.value = screenvalue;
        }
    });
}