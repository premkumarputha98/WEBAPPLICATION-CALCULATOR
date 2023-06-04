//Global variables
var prevCalc = 0;
var calc = "";

function showNum(value) {
  document.frmCalc.txtNumber.value += value;
}

function dec_pp() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    num--;
    document.frmCalc.txtNumber.value = num;
  }
}

function inc_pp() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    num++;
    document.frmCalc.txtNumber.value = num;
  }
}

function Add_pp() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Add_pp";
  }
}

function sub_pp() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "sub_pp";
  }
}

function mul_pp() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "mul_pp";
  }
}

function div_pp() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "div_pp";
  }
}

function pow_pp() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "pow_pp";
  }
}

function squ_pp() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    var result = num * num;
    document.frmCalc.txtNumber.value = result;
  }
}

function squR_pp() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    var result = Math.sqrt(num);
    document.frmCalc.txtNumber.value = result;
  }
}
function floor_pp() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    var result = Math.floor(num);
    document.frmCalc.txtNumber.value = result;
  }
}
function round_pp() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    var result = Math.round(num);
    document.frmCalc.txtNumber.value = result;
  }
}

function calculate() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    if (calc == "Add_pp") {
      var total = prevCalc + num;
      document.frmCalc.txtNumber.value = total;
    } else if (calc == "mul_pp") {
      var total = prevCalc * num;
      document.frmCalc.txtNumber.value = total;
    } else if (calc == "div_pp") {
      var total = prevCalc / num;
      document.frmCalc.txtNumber.value = total;
    } else if (calc == "sub_pp") {
      var total = prevCalc - num;
      document.frmCalc.txtNumber.value = total;
    }else if (calc == "pow_pp") {
      var total = prevCalc ** num;
      document.frmCalc.txtNumber.value = total;
    }
    // Add other calculations here
  }
}

function clear() {
  document.frmCalc.txtNumber.value = "";
  prevCalc = 0;
  calc = "";
}
