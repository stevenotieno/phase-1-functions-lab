// Code your solution in this file
'-1 +1,50'
// Code your solution in this file!
const scubaHq = 42;

//here we calculate distance in blocks and calculated distance from 42nd street
function distanceFromHqInBlocks(pickUpLocation){

    //tenarary operator
    // let distanceInBlocks = pickUpLocation >  scubaHq ? pickUpLocation - scubaHq : scubaHq- pickUpLocation;
    if(pickUpLocation> scubaHq){
        return pickUpLocation - scubaHq;
    }else{
        return scubaHq-pickUpLocation
    }

}

//calculate distance in feet

function distanceFromHqInFeet(scubaHq){
    return distanceFromHqInBlocks(scubaHq) * 264;
}


// calculates distance travelled for a pasanger in feet
function distanceTravelledInFeet(startingBlock, endingBLock){
    if(endingBLock > startingBlock){
        return (endingBLock- startingBlock) * 264;
    } else {
        return (startingBlock- endingBLock) * 264;
    }

}

//calculates fare price

function calculatesFarePrice(start, destination){
    let distanceTravelled =     distanceTravelledInFeet(start, destination);

    if (distanceTravelled <= 400){
        return 0;
    }else if (distanceTravelled > 400 && distanceTravelled <= 2000){
        return (distanceTravelled - 400) * 0.02;
    }else if(distanceTravelled > 2000){
        if(distanceTravelled > 2500){
            return "cannot travel that far"
        } else {
            return 25;
        }
    }
}