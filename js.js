const Dete = document.getElementById("Dete");
const Clear = document.getElementById("Clear");
const ore = document.querySelector(".ys");
const shopping = document.getElementById("shopping");
const countine = document.querySelector(".countine");
const Submet = document.querySelector(".Submet");
const writenomper = document.querySelector(".conteun");
const dont = document.querySelector(".dont-have");
const buy = document.querySelector(".buy");
const prodact02 = document.querySelector(".prodact02");
const prodact03 = document.querySelector(".prodact03");
const prodact04 = document.querySelector(".prodact04");
console.log(shopping);

// حدف المنتوجات من سلة المنتوجات
const Clearprodact = () => {
  localStorage.clear();
  window.location.reload();
  alert(" Delete all product ");
};

Clear.addEventListener("click", Clearprodact);

// احضار البروداكت من لوكال ستوريج ووضعه في سلة مشتريات

if (localStorage.getItem("pro02")) {
  console.log("pro01");
  const pro02 = localStorage.getItem("pro02");
  ore.innerHTML += pro02;
}
if (localStorage.getItem("pro01")) {
  console.log("pro02");
  const pro01 = localStorage.getItem("pro01");
  ore.innerHTML += pro01;
}
if (localStorage.getItem("pro03")) {
  console.log("pro03");
  const pro03 = localStorage.getItem("pro03");
  ore.innerHTML += pro03;
}
if (localStorage.getItem("pro04")) {
  console.log("pro04");
  const pro04 = localStorage.getItem("pro04");
  ore.innerHTML += pro04;
}
if (localStorage.getItem("pro05")) {
  console.log("pro05");
  const pro05 = localStorage.getItem("pro05");
  ore.innerHTML += pro05;
}
if (localStorage.getItem("pro06")) {
  console.log("pro06");
  const pro06 = localStorage.getItem("pro06");
  ore.innerHTML += pro06;
}

// رسالة تحدير

const addmessage = (eo) => {
  countine.style.display = "block";
  dont.style.display = "none";
};
shopping.addEventListener("click", addmessage);

const submetnomper = (eo) => {
  writenomper.style.display = "none";
  dont.style.display = "block";
  setTimeout((eo) => {
    countine.style.display = "none";
    writenomper.style.display = "block";
  }, 1000);
};
Submet.addEventListener("click", submetnomper);
// sssssssss
ore.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "buy":
      localStorage.clear();
      break;
  }
});
