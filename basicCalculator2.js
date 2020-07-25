function basicCalc2() {
  let num = 0;
  let stack = [];
  let sign = '+';
  var s = '3+2*2'
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      num = num * 10 + Number(s[i]);
    } else if (s[i] != ' ') {
      signNum(sign, num);
      sign = s[i];
      num = 0;
    }
  }
  signNum(sign, num);
  return stack.reduce((a, b) => a + b);
  function signNum(sign, num) {
    if (sign == '*') {
      stack.push(stack.pop() * num);
    } else if (sign == '/') {
      stack.push((stack.pop() / num) | 0);
    } else if (sign == '-') {
      stack.push(-num);
    } else if ((sign = '+')) {
      stack.push(+num);
    }
  }
  //     var S = '0-2147483647';//'3/2 ';//'3+5 / 2 ';//'3+2*2';
  //     var op = ['/', '*', '+', '-'];
  //     S = S.replace(/\s/g, '');
  //     while (S.match(/^[0-9]+$/) == null) {
  //     if (S.includes('/')) {
  //       var idx = S.indexOf('/');
  //         var total = Math.floor(S[idx - 1] / S[idx + 1]);
  //         S = S.split('');
  //         S.splice(idx - 1, 3);
  //         S[idx - 1] = total.toString();
  //         S = S.join('');
  //     } else if (S.includes('*')) {
  //       var idx = S.indexOf('*');
  //         var total = S[idx - 1] * S[idx + 1];
  //         S = S.split('');
  //         S.splice(idx - 1, 3);
  //         S[idx - 1] = total.toString();
  //         S = S.join('');
  //     } else if (S.includes('+')) {
  //       var idx = S.indexOf('+');
  //         var total = BigInt(S[idx - 1]) + BigInt(S[idx + 1]);
  //         S = S.split('');
  //         S.splice(idx - 1, 3);
  //         S[idx - 1] = total.toString();
  //         S = S.join('');
  //     } else if (S.includes('-')) {
  //         var idx = S.indexOf('-');
  //         var total = BigInt(S[idx - 1]) - BigInt(S[idx + 1]);
  //         S = S.split('');
  //         S.splice(idx - 1, 3);
  //         S[idx - 1] = total.toString();
  //         S = S.join('');
  //     }
  //   }
  //   return S;
}

console.log(basicCalc2());
