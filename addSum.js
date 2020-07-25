// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.
function addSum() {
  var num1 = '9333852702227987';
  var num2 = '85731737104263';
  var num1Num = BigInt(num1);
  var num2Num = BigInt(num2);

  var res = num1Num + num2Num;
  console.log(res);
  return res.toString();
}

console.log(addSum());
