const test = document.getElementById("add");
const options = document.getElementById("options");
const contener = document.querySelector(".continer");
const prodact01 = document.querySelector(".prodact01");
const prodact02 = document.querySelector(".prodact02");
const prodact03 = document.querySelector(".prodact03");
const prodact04 = document.querySelector(".prodact04");

contener.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "prodact01":
      localStorage.setItem("pro01", pro01);
      alert("Product Added");

      break;

    case "prodact02":
      const titel = localStorage.setItem("pro02", pro02);
      alert("Product Added");
      break;

    case "prodact03":
      localStorage.setItem("pro03", pro03);
      alert("Product Added");
      break;

    case "prodact04":
      localStorage.setItem("pro04", pro04);
      alert("Product Added");
      break;

    default:
      break;
  }
});
const pro01 = `<div class="contener">
<div><img class="jordn" src="image/laptop.jpg" alt="" /></div>
<div><h1>laptop</h1></div>
<div><h2>50 $</h2></div>
<div><a class="buy" href="#">buy</a></div></div>`;

const pro02 = `<div class="contener">
<div><img class="jordn" src="image/ipad.jpg" alt="" /></div>
<div><h1>prodact02</h1></div>
<div><h2>50 $</h2></div>
<div><a class="buy" href="#">buy</a></div></div>`;

const pro03 = `<div class="contener">
<div><img class="jordn" src="image/iphone.jpg" alt="" /></div>
<div><h1>prodact03</h1></div>
<div><h2>50 $</h2></div>
<div><a class="buy" href="#">buy</a></div></div>`;

const pro04 = `<div class="contener">
<div><img class="jordn" src="image/phone.jpg" alt="" /></div>
<div><h1>prodact04</h1></div>
<div><h2>50 $</h2></div>
<div><a class="buy" href="#">buy</a></div></div>`;

const pro05 = `<div class="contener">
<div><img class="jordn" src="image/iphone.jpg" alt="" /></div>
<div><h1>prodact03</h1></div>
<div><h2>50 $</h2></div>
<div><a class="buy" href="#">buy</a></div></div>`;
