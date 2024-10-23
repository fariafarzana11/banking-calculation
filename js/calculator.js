document.getElementById('deposit').addEventListener('click',function(){
    const depositInput = document.getElementById('depositIn').value;
    const convertedDeposit = parseInt(depositInput);
    const depositBalance = document.getElementById('depositBalance');
    const depositBalanceInner = depositBalance.innerText;
    const convertedDepositBalance = parseInt(depositBalanceInner); 
    const balance = convertedDeposit + convertedDepositBalance;
    depositBalance.innerText = balance;  
     
    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceInner = totalBalance.innerText;
    const convertedTotalBalance = parseInt(totalBalanceInner);
    const resultTotal = convertedTotalBalance + convertedDeposit;
    totalBalance.innerText = resultTotal;


})


document.getElementById('withdraw').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdrawIn').value;
    const convertedWithdraw = parseInt(withdrawInput);
    const withdrawBalance = document.getElementById('withdrawBalance');
    const withdrawBalanceInner = withdrawBalance.innerText;
    const convertedWithdrawBalance = parseInt(withdrawBalanceInner)
    const result = convertedWithdraw + convertedWithdrawBalance;
    withdrawBalance.innerText = result;

    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceInner = totalBalance.innerText;
    const convertedTotalBalance = parseInt(totalBalanceInner);
    const resultTotal = convertedTotalBalance - convertedWithdrawBalance;
    totalBalance.innerText = resultTotal;
})