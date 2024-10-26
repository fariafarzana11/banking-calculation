// document.getElementById('deposit').addEventListener('click', function () {
//     const depositInput = document.getElementById('depositIn');
//     const depositInputValue = depositInput.value;

//     // Validate the input value
//     if (depositInputValue === '' || isNaN(depositInputValue)) {
//         alert("Please enter a valid number");
//         depositInput.value = ''; // Clear the input field
//         return; // Stop the function if input is invalid
//     }

//     // Convert the input value to an integer
//     const convertedDeposit = parseInt(depositInputValue);
//     const depositBalance = document.getElementById('depositBalance');
//     const depositBalanceInner = depositBalance.innerText;

//     // Ensure deposit balance is a valid integer
//     const convertedDepositBalance = parseInt(depositBalanceInner) || 0; // Fallback to 0 if NaN

//     // Calculate the new deposit balance
//     const balance = convertedDeposit + convertedDepositBalance;
//     depositBalance.innerText = balance;
    
//     // Clear the input field after adding the balance
//     depositInput.value = '';

//     // Update the total balance
//     const totalBalance = document.getElementById('totalBalance');
//     const totalBalanceInner = totalBalance.innerText;
//     const convertedTotalBalance = parseInt(totalBalanceInner) || 0; // Fallback to 0 if NaN
//     const resultTotal = convertedTotalBalance + convertedDeposit;
//     totalBalance.innerText = resultTotal;
// });


document.getElementById('deposit').addEventListener('click', function () {
    const depositInput = document.getElementById('depositIn');
    const depositInputValue = depositInput.value;

    if (depositInputValue === '' || isNaN(depositInputValue)) {
        alert("Please enter a valid number");
        depositInput.value = ''; 
        return; 
    }

    const convertedDeposit = parseInt(depositInputValue);
    const depositBalance = document.getElementById('depositBalance');
    const depositBalanceInner = depositBalance.innerText;

    const convertedDepositBalance = parseInt(depositBalanceInner); 
    const balance = convertedDeposit + convertedDepositBalance;
    depositBalance.innerText = balance;
    depositInput.value = '';

    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceInner = totalBalance.innerText;
    const convertedTotalBalance = parseInt(totalBalanceInner) || 0; 
    const resultTotal = convertedTotalBalance + convertedDeposit;
    totalBalance.innerText = resultTotal;
});





// document.getElementById('withdraw').addEventListener('click',function(){
//     const withdrawInput = document.getElementById('withdrawIn');
//     const withdrawInputValue = withdrawInput.value;

//     if (withdrawInputValue === '' || isNaN(withdrawInputValue)) {
//         alert("Please enter a valid number");
//         withdrawInput.value = ''; 
//         return; 
//     }

//     const convertedWithdraw = parseInt(withdrawInputValue);
//     const withdrawBalance = document.getElementById('withdrawBalance');
//     const withdrawBalanceInner = withdrawBalance.innerText;
//     const convertedWithdrawBalance = parseInt(withdrawBalanceInner)
//     const result = convertedWithdraw + convertedWithdrawBalance;
//     withdrawBalance.innerText = result;
//     withdrawInput.value = ''

//     const totalBalance = document.getElementById('totalBalance');
//     const totalBalanceInner = totalBalance.innerText;
//     const convertedTotalBalance = parseInt(totalBalanceInner);
//     const resultTotal = convertedTotalBalance - convertedWithdraw;

//     if(withdrawInputValue > convertedTotalBalance){
//         withdrawInput.innerText = "00"
//     }
//     else{
//         withdrawBalance.innerText = result;
//     }

//     if(resultTotal <= 0){
//         alert("You don't have sufficient balance");
//     }

//     else{
//         totalBalance.innerText = resultTotal;
//     }
// })

document.getElementById('withdraw').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdrawIn');
    const withdrawInputValue = withdrawInput.value;

    // Check for valid input
    if (withdrawInputValue === '' || isNaN(withdrawInputValue)) {
        alert("Please enter a valid number");
        withdrawInput.value = ''; 
        return; 
    }

    // Parse withdrawal amount
    const convertedWithdraw = parseInt(withdrawInputValue);

    // Current withdraw balance
    const withdrawBalance = document.getElementById('withdrawBalance');
    const withdrawBalanceInner = withdrawBalance.innerText;
    const convertedWithdrawBalance = parseInt(withdrawBalanceInner) || 0;

    // Total balance
    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceInner = totalBalance.innerText;
    const convertedTotalBalance = parseInt(totalBalanceInner) || 0;

    // Check if withdrawal exceeds total balance
    if (convertedWithdraw > convertedTotalBalance) {
        alert("You don't have sufficient balance for this withdrawal");
        withdrawInput.value = '';
        return;
    }

    // Update withdraw balance
    const newWithdrawBalance = convertedWithdraw + convertedWithdrawBalance;
    withdrawBalance.innerText = newWithdrawBalance;
    
    // Update total balance
    const resultTotal = convertedTotalBalance - convertedWithdraw;
    totalBalance.innerText = resultTotal;

    // Clear input field
    withdrawInput.value = '';
});
