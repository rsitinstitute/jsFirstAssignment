// feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(5280);
console.log(result)


//woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1; // 1=cubic feet wood.
    var tableCount = table * 3; // 3= cubic feet wood. 
    var bedCount = bed * 5;     // 5= cubic feet wood.
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var woodResult = woodCalculator(5, 7, 3);
console.log("Total", woodResult,  "cubic feet of wood");


//brickCalculator
function brickCalculator(brick){
    
    if( brick> 0 && brick <= 10){
        totalBrick = brick * 15 * 1000;
        return totalBrick;
    }
    else if(brick> 10 && brick <=20){
        totalBrick = (brick-10) *12 * 1000 ;
        return totalBrick + 150000;
    }
    else (brick> 20){
        totalBrick = 20 * 10 * 1000;
        return totalBrick + 150000 + 120000 ;
    }
}
var brickneeded = brickCalculator(40);
console.log(brickneeded);



//tinyFriend
function tinyFriend(friends){
    
    var sFriend = friends[0];
    for(var i=0 ; i<friends.length ; i++){
        currentElement = friends[i];
        if(currentElement.length < sFriend.length){
            sFriend = currentElement
        }
    }
    return sFriend;
}
var friendsName = ["Saiduzzaman", "Rana", "Nurul", "Jakir"];
var smallestFriend = tinyFriend(friendsName);
console.log(smallestFriend);

