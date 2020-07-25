function productSelf()
{
    var nums = [1, 2, 3, 4];
    var op = [];
    for (let i = 0; i < nums.length; i++) {
        op[i] = prod(i, nums);        
    }
    return op;
}

function prod(i, nums)
{
    var res = 1;
    for (let j = 0; j < nums.length; j++) {
        if (i == j) continue;
        else res = res * nums[j];
    }
    //console.log(res);
    return res;
    
}

console.log(productSelf());