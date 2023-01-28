const hexInput=document.querySelector(".form-control");
hexInput.addEventListener("change",(e)=>{
getColors(e.target.value)
})
const getColors=(hex)=>{
const url=`https://www.thecolorapi.com/scheme?hex=${hex}&mode=analogic`
    fetch(url).then((res)=>res.json())
    .then((data)=>showColorInfos(data))
    .catch((err)=>console.log(err));
}

showColorInfos=(colorsData)=>{
const {name, hex:{value},rgb, hsl,hsv,cmyk,XYZ, image:{named},}=colorsData.colors[0]


}
