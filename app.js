const hexInput=document.querySelector(".form-control");
hexInput.addEventListener("change",(e)=>{
getColors(e.target.value);
e.preventDefault();
})



const getColors=(hex)=>{
const url=` https://www.thecolorapi.com/id?hex=${hex}`
    fetch(url).then((res)=>res.json())
    .then((data)=>showColorInfos(data))
    .catch((err)=>console.log(err));
}




showColorInfos=(colorsData)=>{
    console.log(colorsData);
const {name, hex:{value},rgb, hsl,hsv,cmyk,XYZ, image:{named},}=colorsData;
const resultDiv=document.querySelector(".result");
resultDiv.innerHTML=`
<div class="card" mx-auto m-3 shadow-lg style="width: 18rem;">
  <img src="${named}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name.value} Renginin Bilgileri</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Varsa Gerçek Adı: ${name.exact_match_name}</li>
    <li class="list-group-item">En yakın Renk: ${closest_named_hex}</li>
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
// getColors("220, 20, 60")

const hex=["A","B","C","D","E","F",0,1,2,3,5,6,7,8,9];
//? RANDOM NUMBERS FOR HEX INDEX
const random1=Math.floor(Math.random() * 15);
const random2=Math.floor(Math.random() * 15);
const random3=Math.floor(Math.random() * 15);
const random4=Math.floor(Math.random() * 15);
const random5=Math.floor(Math.random() * 15);
const random6=Math.floor(Math.random() * 15);
const randoms=`${hex[random1]}${hex[random2]}${hex[random3]}${hex[random4]}${hex[random5]}${hex[random6]}`
const button=document.querySelector(".btn");
button.addEventListener("click",(e)=>{
    getColors(randoms);
    e.preventDefault()
    setTimeout("location.reload(true);", 4000);
  
});


console.log(randoms);
