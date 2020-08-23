function calculate(input) {
  // Create array for Order of Operation and precedence
  ooo = [[['*'], ['/']], [['+'], ['-']]];
  // ooo = ['*', '/','+' , '-' ];

  input = input.replace(/[^0-9%^*\/()\-+.]/g, '');           // clean up unnecessary characters

  var output;
  for (var i = 0, n = ooo.length; i < n; i++) {

    // Regular Expression to look for operators between floating numbers or integers
    var re = new RegExp('(\\d+\\.?\\d*)([\\' + ooo[i].join('\\') + '])(\\d+\\.?\\d*)');

    // var re = new RegExp(`(\\d+\\.?\\d*)([\\${ooo[i].join('\\')}])(\\d+\\.?\\d*)`);
    re.lastIndex = 0;                                     // be cautious and reset re start pos

    // Loop while there is still calculation for level of precedence
    while (re.test(input)) {
      //document.write('<div>' + input + '</div>');
      output = calc_internal(RegExp.$1, RegExp.$2, RegExp.$3);

      if (isNaN(output) || !isFinite(output)) return output;   // exit early if not a number
      input = input.replace(re, output);
    }
  }

  return output;

  function calc_internal(a, op, b) {
    a = a * 1; b = b * 1;
    switch (op) {
      case '+': return a + b; break;
      case '-': return a - b; break;
      case '/': return a / b; break;
      case '*': return a * b; break;

      default: null;
    }
  }
}
calculate("2+18/10*2")