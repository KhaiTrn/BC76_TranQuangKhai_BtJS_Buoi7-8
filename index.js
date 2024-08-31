let arrSoN = [];
document.getElementById("ketQua").innerHTML = `${arrSoN}`;

// bài đầu
document.getElementById("nhapSo").onsubmit = function (event) {
  event.preventDefault();
  let soN = document.getElementById("nhapSoN").value * 1;

  arrSoN.push(soN);
  document.getElementById("ketQua").innerHTML = arrSoN;
  event.target.reset();
};
// bài 1
document.getElementById("tinhTong").onclick = function () {
  let total = 0;
  for (let i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] >= 0) {
      total += arrSoN[i];
    }
  }
  document.getElementById("ketQua1").innerHTML = `Tổng số dương là : ${total} `;
};
//Bài 2
document.getElementById("demSo").onclick = function () {
  let total = 0;
  for (let i = 0; i <= arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      total++;
    }
  }
  document.getElementById("ketQua2").innerHTML = `Số dương : ${total} `;
};
// Bài 3
document.getElementById("timSoNhoNhat").onclick = function () {
  let total = 0;
  arrSoN.sort((a, b) => a - b);
  total = arrSoN[0];
  document.getElementById("ketQua3").innerHTML = `Số nhỏ nhất: ${total} `;
};
// bài 4
document.getElementById("timSoDuongNhoNhat").onclick = function () {
  let newArrSoN = [];
  for (let i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      newArrSoN.push(arrSoN[i]);
    }
  }

  if (newArrSoN == []) {
    document.getElementById(
      "ketQua4"
    ).innerHTML = `<p>Không có số dương trong mảng</p>`;
  } else {
    let total = 0;
    newArrSoN.sort((a, b) => a - b);
    total = newArrSoN[0];
    document.getElementById(
      "ketQua4"
    ).innerHTML = `<p>Số dương nhỏ nhất : ${total}</p>`;
  }
};
//Bài tập 5
document.getElementById("timSoChan").onclick = function () {
  let total = 0;
  for (let i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] % 2 === 0) {
      total = arrSoN[i];
    }
  }
  document.getElementById("ketQua5").innerHTML = `Số chẵn cuối cùng: ${total}`;
};
// bài tập 6
function doiViTri(arr, i, z) {
  let viTri1 = arr[i];
  arr[i] = arr[z];
  arr[z] = viTri1;
}
document.getElementById("doiCho").onclick = function () {
  let index = document.getElementById("viTri1").value * 1;
  let index2 = document.getElementById("viTri2").value * 1;
  doiViTri(arrSoN, index, index2);
  document.getElementById(
    "ketQua6"
  ).innerHTML = `<p> Mảng sau khi đổi là : ${arrSoN}</p>`;
};
//Bài tập 7
document.getElementById("sapXep").onclick = function () {
  arrSoN.sort((a, b) => a - b);
  document.getElementById(
    "ketQua7"
  ).innerHTML = `<p> Mảng sau khi sắp xếp : ${arrSoN}`;
};
//Bài tập 8
function kiemTraSoNguyenTo(Number) {
  if (Number <= 1) return false;
  if (Number === 2) return true;
  for (let index = 2; index <= Math.sqrt(Number); index++) {
    if (Number % index === 0) {
      return false;
    }
  }
  return true;
}
document.getElementById("timSoNguyenTo").onclick = function () {
  let total = [];
  for (let i = 0; i < arrSoN.length; i++) {
    if (kiemTraSoNguyenTo(arrSoN[i]) == true) {
      total.push(arrSoN[i]);
      break;
    }
  }
  document.getElementById(
    "ketQua8"
  ).innerHTML = `Số nguyên tố đầu tiên là :${total}`;
};
//Bài tập 9
let newArrSoThuc = [];
document.getElementById("themSoThuc").onclick = function () {
  let soThuc = document.getElementById("nhapSoThuc").value * 1;
  newArrSoThuc.push(soThuc);
  document.getElementById("soThuc").innerHTML = `<p>${newArrSoThuc}</p>`;
};
document.getElementById("demSoNguyen").onclick = function () {
  let total = 0;
  for (let i = 0; i < newArrSoThuc.length; i++) {
    if (Number.isInteger(newArrSoThuc[i]) == true) {
      total++;
    }
  }
  document.getElementById("ketQua9").innerHTML = `<p>Số nguyên: ${total}</p>`;
};
//Bài tập 10
document.getElementById("soSanh").onclick = function () {
  let soDuong = 0;
  let soAm = 0;
  let total = "";
  for (let i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] > 0) {
      soDuong++;
    } else if (arrSoN[i] < 0) {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    total += `<p>Số dương > Số âm</p>`;
  } else if (soDuong < soAm) {
    total += `<p>Số dương < Số âm</p>`;
  } else {
    total += `<p>Số dương = Số Âm</p>`;
  }
  document.getElementById("ketQua10").innerHTML = total;
};
