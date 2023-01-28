
//? API'den veri çekme işlemi 
const getColors=(hex)=>{
  const url=` https://www.thecolorapi.com/id?hex=${hex}`
      fetch(url).then((res)=>res.json())
      .then((data)=>showColorInfos(data))
      .catch((err)=>console.log(err));
  }
  


//? Çekilen veriyi düzenleyip DOM'a basma
showColorInfos=(colorsData)=>{
const {name, hex:{value},rgb, hsl,hsv,cmyk,XYZ, image:{named,bare},}=colorsData;
const resultDiv=document.querySelector(".result");

if (name.exact_match_name) {
  resultDiv.innerHTML=`
<div class="card" mx-auto m-3 shadow-lg style="width: 18rem;">
  <img src="${named}" class="card-img-top" alt="${name.value}">
  <div class="card-body">
    <h5 class="card-title">${name.value} Renginin Bilgileri</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">HEX KODU: ${value}</li>
    <li class="list-group-item">RGB KODU: ${rgb.value}</li>
    <li class="list-group-item">HSL KODU: ${hsl.value}</li>
    <li class="list-group-item">HSV KODU: ${hsv.value}</li>
    <li class="list-group-item">CMYK KODU: ${cmyk.value}</li>
    <li class="list-group-item">XYZ KODU: ${XYZ.value}</li>
  </ul>
  </div>
</div>
`
}
else  {
  resultDiv.innerHTML=`
  <div class="card" mx-auto m-3 shadow-lg style="width: 18rem;">
  <img src="${named}" class="card-img-top" alt="${name.value}">
  <div class="card-body">
    <h5 class="card-title">${value} Renginin Bilgileri</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item text-danger">Rengin bir adı bulunmamaktadır.</li>
    <li class="list-group-item text-danger">Gösterilen renk en yakın renktir.</li>
    <li class="list-group-item">En yakın Rengin HEX KODU: ${name.closest_named_hex}</li>
    <li class="list-group-item">HEX KODU: ${value}</li>
    <li class="list-group-item">RGB KODU: ${rgb.value}</li>
    <li class="list-group-item">HSL KODU: ${hsl.value}</li>
    <li class="list-group-item">HSV KODU: ${hsv.value}</li>
    <li class="list-group-item">CMYK KODU: ${cmyk.value}</li>
    <li class="list-group-item">XYZ KODU: ${XYZ.value}</li>
  </ul>
  </div>
</div>
  `
}
}


//? Input text'ten girilen veriyi yakalayıp getColors()'a gönderme 
const hexInput=document.querySelector(".form-control");
hexInput.addEventListener("change",(e)=>{
getColors(e.target.value);
e.preventDefault();
})





//? 6 haneli rastgele HEX değeri üreten Fonksiyon yazma
const doRandomNumbers=()=>{
  const hex=["A","B","C","D","E","F",0,1,2,3,5,6,7,8,9];
  //? RANDOM NUMBERS FOR HEX INDEX
  const random1=Math.floor(Math.random() * 15);
  const random2=Math.floor(Math.random() * 15);
  const random3=Math.floor(Math.random() * 15);
  const random4=Math.floor(Math.random() * 15);
  const random5=Math.floor(Math.random() * 15);
  const random6=Math.floor(Math.random() * 15);
 return `${hex[random1]}${hex[random2]}${hex[random3]}${hex[random4]}${hex[random5]}${hex[random6]}`
}



//? Rastgele Sayı Üret Butonunu yakalama, click eventi tanımlama
const button=document.querySelector(".btn");
button.addEventListener("click",(e)=>{
  e.preventDefault(); 
  getColors(doRandomNumbers());
});



//? Ekrana basılacak ilk renk
getColors("2660a4")




