
let catFact=document.querySelector('#cat-fact');
let dogPic=document.querySelector('#dog-pic');
let colorHex=document.querySelector('#color-hex');
let resultOutput=document.querySelector('#resultOutput');
let resultName=document.querySelector('#resultName');
let wonderResult=document.querySelector('.wonder-result');

wonderResult.style.display='none'

function showResult(result){
    if(result===true){
        wonderResult.style.display=''
    }else{
        wonderResult.style.display='none'
    }
}
function clearPrevious(){
    resultOutput.style.backgroundImage='none'
    resultOutput.innerHTML=''
    resultName.innerHTML=''
}


async function showCatFact(){
    try{
        let url="https://catfact.ninja/fact";
        let res=await axios.get(url);
        console.log(res.data.fact)
        resultOutput.classList.add('catFact')
        resultOutput.style.backgroundImage=`url(./resource/cat2.jpg)`
        resultOutput.style.backgroundSize=`auto`
        resultOutput.innerHTML=`<p>${res.data.fact}</p>`
        resultName.innerHTML=`<h4>New Cat Fact</h4>`
    }catch(e){
        console.log("error: ",e)
        resultOutput.innerText="No Fact Found! sorry.."
    }

}

async function showDogPic(){
    try{
        let url="https://dog.ceo/api/breeds/image/random";
        let res=await axios.get(url);
        resultOutput.style.backgroundImage=`url(${res.data.message})`
        resultOutput.style.backgroundSize=`cover`
        console.log(res.data.message)
        resultName.innerHTML=`<h4>New Dog Pic</h4>`
    }catch(e){
        console.log("error: ",e)
        resultOutput.innerText="No Pic Found! sorry.."
    }

}

async function showColorHex(){
    try{
    let r=Math.floor((Math.random()*1000)%255);
    let g=Math.floor((Math.random()*1000)%255);
    let b=Math.floor((Math.random()*1000)%255);
    resultName.innerHTML=`<h4>RGB(${r},${g},${b})</h4>`
    resultOutput.style.backgroundColor=`rgb(${r},${g},${b})`;
    }catch(e){
        console.log("error: ",e)
        resultOutput.innerText="No rgb Found! sorry.."
    }

}

catFact.addEventListener('click',()=>{

    showResult(true)
    clearPrevious()
    showCatFact()
})
dogPic.addEventListener('click',()=>{
    showResult(true)
    clearPrevious()
    showDogPic()
})
colorHex.addEventListener('click',()=>{
    showResult(true)
    clearPrevious()
    showColorHex()
})