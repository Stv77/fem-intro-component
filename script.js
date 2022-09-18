const button = document.getElementById('claim');

function validity(){
    button.addEventListener('click', (event) =>{
        event.preventDefault();
        const user_input = document.getElementsByClassName('user-input');

        // Input Validity
        for(x=0; x < user_input.length; x++) {
            if(!user_input[x].checkValidity()){
                user_input[x].style.border = '2px solid var(--red)';
                user_input[x].style.backgroundImage = "url('./images/icon-error.svg')";
                user_input[x].style.backgroundRepeat = "no-repeat";
                user_input[x].style.backgroundPosition = "443px 1rem";
            } if(window.matchMedia('only screen and (min-width: 375px) and (max-width: 440px)').matches) {
                if(!user_input[x].checkValidity()){
                    user_input[x].style.border = '2px solid var(--red)';
                    user_input[x].style.backgroundImage = "url('./images/icon-error.svg')";
                    user_input[x].style.backgroundRepeat = "no-repeat";
                    user_input[x].style.backgroundPosition = "267px 1rem";
                }
            }
        }
        
        
        // Error Message
        const error_message = document.getElementsByClassName('error-message');

        for(y=0; y < error_message.length; y++) {
            if(!user_input[y].checkValidity()){
                error_message[y].style.visibility = 'visible';
            }
        }
    })
}

validity();