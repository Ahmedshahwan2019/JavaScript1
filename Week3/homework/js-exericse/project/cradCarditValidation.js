'use strict'

// -----------------------------------------CHECK THE LENGTH OF NUMBER--------------------------------------------
function numberOfdigit16(craditNumber){
    if (craditNumber.length === 16){
        return true;
    }else

        return false

}
// console.log(numberOfdigit16('1234567890123453'))//TEST


 //----------------------------------------------CHECK EVEN NUMBER-------------------------------------------------

 function checkEvenNum(craditNumber){
    if (craditNumber % 2 == 0 ){
        return true;
    }else{
        return false;
    }
}
// console.log(checkEvenNum('2221'))//TEST


//----------------------------------------------- CHECK IF IT IS A NUMBER--------------------------------------------
function CheckIfNumber(craditNumber){
    if(isNaN(craditNumber)){
        return false;
    }else{
        return true;
    }
}
// console.log(CheckIfNumber('889'));//test

//--------------------------------------------------- SUM DIGIT NUMBER ---------------------------------------------------
function sumDigitNum(craditNumber){
    let sum=0;
  for(let i=0; i<craditNumber.length; i++){

        sum+=Number.parseInt([i])
        // console.log(sum)
  }
  if(sum>16){
      return true;
  }else{
      return false
  }
  
}
// console.log(sumDigitNum('333333333'))
//----------------------------------------------check the number------------------------------------------------
// check if the number are the same
function checkDiffDigits(creditNumber) {
    let hasDiffDigits = false;
    // Make comparison between index positions
    for (let i = 0; i < creditNumber.length -1 ; i++) {
        // Check if index positions compare

        if (creditNumber[i] === creditNumber[i + 1]) {
            // console.log(creditNumber[i] ,creditNumber[i+1])
          hasDiffDigits = false;
        //   console.log(hasDiffDigits)
        } else {
          hasDiffDigits = true;
        //   console.log(hasDiffDigits)
          break;
        }
    }
    return hasDiffDigits;
  }
//   console.log(checkDiffDigits('99999999'));


   //-----------------------------------CHECK IF ALL THE CONDATION MATCH---------------------------- 
function creditCardValidation(craditNumber){
if (numberOfdigit16(craditNumber)){
    if(CheckIfNumber(craditNumber)){
        if(checkEvenNum(craditNumber)){
            if(sumDigitNum(craditNumber)){
                if(checkDiffDigits(craditNumber)){

                }else{
                    console.log('Invalid Number! your Cradit card should has at least one differet number')
                }

            }else{
                console.log('invalid card number! please insert your card')
            }

        }else{
            console.log('Invalid! Your cardit car must end with an even number')
        }

    }else{
        console.log('Invalid card number !, Your input must be contain only numbers')
    }
}else{
    console.log('Invalid card number !, Your input must be contain 16 digit numbers')
}
}
creditCardValidation('a92332119c011112')
creditCardValidation('4444444444444444')
creditCardValidation('1111111111111110')
creditCardValidation('6666666666666661')
creditCardValidation('666666666666666')
//c