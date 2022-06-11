function validateForm(){

    const pwInput = document.getElementById('pwInput').value;
    const pwConf = document.getElementById('pwConf');
    const confCheck = pwConf.value
    

    if( pwInput != confCheck ){
        console.log('passwords need to match')
        //add the error class & message
        pwConf.classList.add('error')

    }else{
        //add the success class & message
        pwConf.classList.add('success')
    }
}
