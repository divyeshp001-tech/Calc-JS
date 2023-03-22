let display = document.getElementById('dis_box');
buttons = document.querySelectorAll('button');

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);


        if (buttonText == 'X') {
            buttonText = '*';
            display.value += buttonText;
        }
        else if (buttonText == 'C') {
            display.value = "";
        }
        else if (buttonText == '=') {

            if (display.value == "") {
                alert("Please Enter Value")
            } else {
                // alert(typeof display.value)
                try {
                    
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Syntex Error";
                    setTimeout(()=>{
                        display.value = "";
                    },2000)
                   
                }
            }

        }
        else {
            display.value += buttonText;
        }

    })
}
