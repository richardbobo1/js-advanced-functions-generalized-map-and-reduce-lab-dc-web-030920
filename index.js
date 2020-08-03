// Add your functions here

function map(nums, func ){
 let x = []
 for(let i =0; i<nums.length; i++){
     x.push( func(nums[i]) )
 }
 return x 
}

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }