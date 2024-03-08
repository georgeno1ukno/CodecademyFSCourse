

const numberDigits= newValue =>{
    if(newValue >= 0 && newValue <=9){
        return`One digit: ${newValue}`;
    }
    else if(newValue >= 10 && newValue <=99){
        return`Two digits: ${newValue}`;
    }
    else{
        return`The number is: ${newValue}`;
    }
}