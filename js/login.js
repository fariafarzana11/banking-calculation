document.getElementById('submit').addEventListener('click',function(){
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    if(email === 'faria@gmail.com' && pass === 'faria12'){
        window.location.href = 'calculator.html'
    }
    else{
        alert("Doesn't exit")
    }

})