const hexInput=document.querySelector(".form-control");
hexInput.addEventListener("change",(e)=>{
getColors(e.target.value);
e.preventDefault();
})






const getColors=(rgb)=>{
const url=`https://www.thecolorapi.com/scheme?rgb=${rgb}$mode=monochrome-dark`
    fetch(url).then((res)=>res.json())
    .then((data)=>showColorInfos(data))
    .catch((err)=>console.log(err));
}




showColorInfos=(colorsData)=>{
const {name, hex:{value},rgb, hsl,hsv,cmyk,XYZ, image:{named},}=colorsData.colors[0]
const resultDiv=document.querySelector(".result");
resultDiv.innerHTML=`
<div class="card" mx-auto m-3 shadow-lg style="width: 18rem;">
  <img src="${named}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name.value} Renginin Bilgileri</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">HEX: ${value}</li>
    <li class="list-group-item">RGB: ${rgb.value}</li>
    <li class="list-group-item">HSL: ${hsl.value}</li>
    <li class="list-group-item">HSV: ${hsv.value}</li>
    <li class="list-group-item">CMYK: ${cmyk.value}</li>
    <li class="list-group-item">XYZ: ${XYZ.value}</li>
  </ul>
  </div>
</div>
`
}
getColors("220, 20, 60")