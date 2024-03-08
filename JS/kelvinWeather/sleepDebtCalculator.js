function getSleepHours(day){
    switch(day){
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 6;
        break;
      case 'wedesnday':
        return 9;
        break;
      case 'thursday':
        return 4;
        break;
      case 'friday':
        return 6;
        break;
      case 'saturday':
        return 7;
        break;
      case 'sunday':
        return 8;
        break;
    }
  }
  
  const getActualSleepHours = () => 8+6+9+4+6+7+8;
  
  const getIdealSleepHours = idealHours =>{
    return idealHours * 7;
  }
  
  console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
   
  console.log(getIdealSleepHours(8)); // if idealHours is 8, should print 56
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(6);
  
    if(actualSleepHours === idealSleepHours){
      console.log('Perfect amount sleep');
    }
    else if(actualSleepHours > idealSleepHours){
      console.log('You got more sleep than needed,' + (idealSleepHours - actualSleepHours));
    }
      else if(actualSleepHours < idealSleepHours){
      console.log('You should get some rest,' + (idealSleepHours - actualSleepHours));
    }
  }
  
  calculateSleepDebt();
  