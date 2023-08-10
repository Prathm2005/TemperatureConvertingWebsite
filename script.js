const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertbutton = document.querySelector('.convertbutton');
const changebutton = document.querySelector('.changebutton');
const resetbutton =document.querySelector('.resetbutton');
const C = document.querySelector('.C');
const f = document.querySelector('.f');

const swap = () => {
    if(C.innerHTML==='°c'){
        C.innerHTML='°f';
        f.innerHTML='°c';
        converter.placehloder="Temperature in °F";
    }else{
        f.innerHTML='°f';
        C.innerHTML='°c';
        converter.placehloder="Temperature in °C";
    };
};
const reset =()=>{
    converter.value='';
    result.innerHTML='';
}
const convert = ()=>{
    if(/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
        result.style.color = "white"
        if (C.innerhtml === '°F'){
            let value = (converter.value*1.8)+32;
            result.innerHTML=`${converter.value}°Cis equal  to ${value.toFixed(2)}°F`;
        }else{
            let value = (converter.value-32) / 1.8;
            result.innerHTML=`${converter.value}°C is equal  to ${value.toFixed(2)}°F`; 
        }
    }else if (converter.value==''){
        result.style.color="#FFFFFF"
        result.innerHTML='Enter some number';
    }else {
        result.style.color="#FFFFFF"
        result.innerHTML='Enter only number!!!';
    }
    }

    convertbutton.addEventListener('click',convert);
    changebutton.addEventListener('click',swap);
    resetbutton.addEventListener('click',reset);