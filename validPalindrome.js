function validPalindrome()
{
    var s = 'abca';
    for (let i = 0; i < s.length/2; i++) {
        var j = s.length - 1 - i;
        if (s[i] != s[j])
        {
            return validPalin(s, i + 1, j) || validPalin(s, i, j - 1);
        }        
    }
    return true;
}

function validPalin(s, from, to)
{
    var i = from;
    var j = to;
    while (i < j) {
        if (s[i] != s[j]) return false;
        i++;
        j--;
    }
    return true;
}

console.log(validPalindrome());