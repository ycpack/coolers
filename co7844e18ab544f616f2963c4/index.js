// get seed color
function getSeedColor(){
    let seedColor = document.getElementById("color").value
    let seedArray = seedColor.split('')
    // console.log(seedArray)
    seedArray.shift()
    // console.log(seedArray)
    let hexArray = seedArray.join("")
    return hexArray
}

function modeSelector(){
    let modeOptions = document.getElementById('modes').value
     let mode = modeOptions.toLowerCase()
    return mode
}

// render colors to the DOM

function rendercolor(data){
    colorShow=''
    colorHex =''
    for(let color of data.colors){
        colorShow +=`
        <div class="schemeColor" style="background-color: ${color.hex.value}"></div>
        `
        colorHex +=`
        <div class="colorHex"> ${color.hex.value} </div>
        `
        
       
    }
        document.getElementById("schemearea").innerHTML=colorShow;
        document.getElementById("hexarea").innerHTML=colorHex;

}

//eventlistener to fetch color schemes
document.getElementById('getColorBtn').addEventListener('click', function(e){
    fetch(`https://www.thecolorapi.com/scheme?hex=${getSeedColor()}&mode=${modeSelector()}`)
    .then(res => res.json())
    .then(data => rendercolor(data))
})







