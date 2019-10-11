let conversions = parseInt(localStorage.setItem('conversions', '0'));
if (isNaN(conversions)){
    conversions = 0;
    console.log("in if statement");
    localStorage.setItem('conversions', conversions);
}
function updateConversion() {
  conversions = parseInt(conversions) + 1;
  console.log(conversions);
  localStorage.setItem('conversions', conversions);
  document.querySelector('#times').innerHTML = conversions;
}
function calculations() {
    
  //Passes string and returns float
  const cel = parseInt(document.querySelector('#weight-field').value)
  
  
  
  //Doing all the simple8 calculations
  const CG = (cel-32)*5/9
  updateConversion()
  

  //Modifying HTML page with the calculations output
  document.querySelector('#total-amount').innerHTML = `${CG}`
  

}




//On click perform the calculation function
document.querySelector('#calculate').addEventListener('click', calculations)


