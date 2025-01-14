let img_1 = 1;
let img_2 = 2;
let img_3 = 3;
let img_4 = 4;
let a, b, c, d;

function loadFinished() {
  // let a = document.getElementById("seihuku_1").innerHTML;
  // let b = document.getElementById("seihuku_2").innerHTML;
  // let c = document.getElementById("seihuku_3").innerHTML;
  // let d = document.getElementById("seihuku_4").innerHTML;
}
window.addEventListener("load", loadFinished);

function st_move_1() {
  img_1 += 1;
  if (img_1 == 5) {
    img_1 = 1;
  }
  img_2 += 1;
  if (img_2 == 5) {
    img_2 = 1;
  }
  img_3 += 1;
  if (img_3 == 5) {
    img_3 = 1;
  }
  img_4 += 1;
  if (img_4 == 5) {
    img_4 = 1;
  }

  if (img_1 == 1) {
    document.getElementById("move_1").innerHTML = '<img src="./images/d_1.png"  id="seihuku_1">';
    document.getElementById("move_2").innerHTML = '<img src="./images/d_2.png"  id="seihuku_2" onclick="st_move_1()">';
    document.getElementById("move_3").innerHTML = '<img src="./images/d_3.png"  id="seihuku_3" onclick="st_move_2()">';
    document.getElementById("move_4").innerHTML = '<img src="./images/d_4.png"  id="seihuku_4" onclick="st_move_3()">';
  } else if (img_1 == 2) {
    document.getElementById("move_1").innerHTML = '<img src="./images/d_2.png"  id="seihuku_1">';
    document.getElementById("move_2").innerHTML = '<img src="./images/d_3.png"  id="seihuku_2" onclick="st_move_1()">';
    document.getElementById("move_3").innerHTML = '<img src="./images/d_4.png"  id="seihuku_3" onclick="st_move_2()">';
    document.getElementById("move_4").innerHTML = '<img src="./images/d_1.png"  id="seihuku_4" onclick="st_move_3()">';
  } else if (img_1 == 3) {
    document.getElementById("move_1").innerHTML = '<img src="./images/d_3.png"  id="seihuku_1">';
    document.getElementById("move_2").innerHTML = '<img src="./images/d_4.png"  id="seihuku_2" onclick="st_move_1()">';
    document.getElementById("move_3").innerHTML = '<img src="./images/d_1.png"  id="seihuku_3" onclick="st_move_2()">';
    document.getElementById("move_4").innerHTML = '<img src="./images/d_2.png"  id="seihuku_4" onclick="st_move_3()">';
  } else if (img_1 == 4) {
    document.getElementById("move_1").innerHTML = '<img src="./images/d_4.png"  id="seihuku_1">';
    document.getElementById("move_2").innerHTML = '<img src="./images/d_1.png"  id="seihuku_2" onclick="st_move_1()">';
    document.getElementById("move_3").innerHTML = '<img src="./images/d_2.png"  id="seihuku_3" onclick="st_move_2()">';
    document.getElementById("move_4").innerHTML = '<img src="./images/d_3.png"  id="seihuku_4" onclick="st_move_3()">';
  }
}

function st_move_2() {
  img_1 += 2;
  if (img_1 == 5) {
    img_1 = 1;
  } else if (img_1 == 6) {
    img_1 = 2;
  }
  img_2 += 2;
  if (img_2 == 5) {
    img_2 = 1;
  } else if (img_2 == 6) {
    img_2 = 2;
  }
  img_3 += 2;
  if (img_3 == 5) {
    img_3 = 1;
  } else if (img_3 == 6) {
    img_3 = 2;
  }
  img_4 += 2;
  if (img_4 == 5) {
    img_4 = 1;
  } else if (img_4 == 6) {
    img_4 = 2;
  }

  if (img_1 == 1) {
    document.getElementById("move_1").innerHTML = '<img src="./images/d_1.png"  id="seihuku_1">';
    document.getElementById("move_2").innerHTML = '<img src="./images/d_2.png"  id="seihuku_2" onclick="st_move_1()">';
    document.getElementById("move_3").innerHTML = '<img src="./images/d_3.png"  id="seihuku_3" onclick="st_move_2()">';
    document.getElementById("move_4").innerHTML = '<img src="./images/d_4.png"  id="seihuku_4" onclick="st_move_3()">';
  } else if (img_1 == 2) {
    document.getElementById("move_1").innerHTML = '<img src="./images/d_2.png"  id="seihuku_1">';
    document.getElementById("move_2").innerHTML = '<img src="./images/d_3.png"  id="seihuku_2" onclick="st_move_1()">';
    document.getElementById("move_3").innerHTML = '<img src="./images/d_4.png"  id="seihuku_3" onclick="st_move_2()">';
    document.getElementById("move_4").innerHTML = '<img src="./images/d_1.png"  id="seihuku_4" onclick="st_move_3()">';
  } else if (img_1 == 3) {
    document.getElementById("move_1").innerHTML = '<img src="./images/d_3.png"  id="seihuku_1">';
    document.getElementById("move_2").innerHTML = '<img src="./images/d_4.png"  id="seihuku_2" onclick="st_move_1()">';
    document.getElementById("move_3").innerHTML = '<img src="./images/d_1.png"  id="seihuku_3" onclick="st_move_2()">';
    document.getElementById("move_4").innerHTML = '<img src="./images/d_2.png"  id="seihuku_4" onclick="st_move_3()">';
  } else if (img_1 == 4) {
    document.getElementById("move_1").innerHTML = '<img src="./images/d_4.png"  id="seihuku_1">';
    document.getElementById("move_2").innerHTML = '<img src="./images/d_1.png"  id="seihuku_2" onclick="st_move_1()">';
    document.getElementById("move_3").innerHTML = '<img src="./images/d_2.png"  id="seihuku_3" onclick="st_move_2()">';
    document.getElementById("move_4").innerHTML = '<img src="./images/d_3.png"  id="seihuku_4" onclick="st_move_3()">';
  }
}

function st_move_3() {
  img_1 += 3;
  if (img_1 == 7) {
    img_1 = 3;
  } else if (img_1 == 6) {
    img_1 = 2;
  } else if (img_1 == 5) {
    img_1 = 1;
  }
  img_2 += 3;
  if (img_2 == 5) {
    img_2 = 1;
  } else if (img_2 == 6) {
    img_2 = 2;
  } else if (img_2 == 7) {
    img_2 = 3;
  }
  img_3 += 3;
  if (img_3 == 5) {
    img_3 = 1;
  } else if (img_3 == 6) {
    img_3 = 2;
  } else if (img_3 == 7) {
    img_3 = 3;
  }
  img_4 += 3;
  if (img_4 == 5) {
    img_4 = 1;
  } else if (img_4 == 6) {
    img_4 = 2;
  } else if (img_4 == 7) {
    img_4 = 3;
  }

  if (img_1 == 1) {
    document.getElementById("move_1").innerHTML = '<img src="./images/d_1.png"  id="seihuku_1">';
    document.getElementById("move_2").innerHTML = '<img src="./images/d_2.png"  id="seihuku_2" onclick="st_move_1()">';
    document.getElementById("move_3").innerHTML = '<img src="./images/d_3.png"  id="seihuku_3" onclick="st_move_2()">';
    document.getElementById("move_4").innerHTML = '<img src="./images/d_4.png"  id="seihuku_4" onclick="st_move_3()">';
  } else if (img_1 == 2) {
    document.getElementById("move_1").innerHTML = '<img src="./images/d_2.png"  id="seihuku_1">';
    document.getElementById("move_2").innerHTML = '<img src="./images/d_3.png"  id="seihuku_2" onclick="st_move_1()">';
    document.getElementById("move_3").innerHTML = '<img src="./images/d_4.png"  id="seihuku_3" onclick="st_move_2()">';
    document.getElementById("move_4").innerHTML = '<img src="./images/d_1.png"  id="seihuku_4" onclick="st_move_3()">';
  } else if (img_1 == 3) {
    document.getElementById("move_1").innerHTML = '<img src="./images/d_3.png"  id="seihuku_1">';
    document.getElementById("move_2").innerHTML = '<img src="./images/d_4.png"  id="seihuku_2" onclick="st_move_1()">';
    document.getElementById("move_3").innerHTML = '<img src="./images/d_1.png"  id="seihuku_3" onclick="st_move_2()">';
    document.getElementById("move_4").innerHTML = '<img src="./images/d_2.png"  id="seihuku_4" onclick="st_move_3()">';
  } else if (img_1 == 4) {
    document.getElementById("move_1").innerHTML = '<img src="./images/d_4.png"  id="seihuku_1">';
    document.getElementById("move_2").innerHTML = '<img src="./images/d_1.png"  id="seihuku_2" onclick="st_move_1()">';
    document.getElementById("move_3").innerHTML = '<img src="./images/d_2.png"  id="seihuku_3" onclick="st_move_2()">';
    document.getElementById("move_4").innerHTML = '<img src="./images/d_3.png"  id="seihuku_4" onclick="st_move_3()">';
  }
}
