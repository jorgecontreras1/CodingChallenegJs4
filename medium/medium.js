let nums = [4,5,6,7,0,1,2]

function Find(array,target){
    for(let i=0;i <array.length;i++){
        if (array.includes(target)){
            let index = array.indexOf(target);
            return index;
        }
    }}