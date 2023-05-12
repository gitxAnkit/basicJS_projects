const input =document.getElementById("numberOfWords");
const container= document.querySelector(".container");

const generateWord = (n) =>{
    let text ="";
    const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for( let i =0; i<n;++i){
        const random =(Math.random()*25).toFixed(0);
        text +=letters[random];
    }
    console.log(text);
    return text;
};

let numberOfWords;
const generatePara=() =>{
    const numberOfWords=Number(input.value);

    const para =document.createElement("p");

    let data= "";

    for(let i =0; i< numberOfWords;++i){
     const randomNumber=(Math.random()*15).toFixed(0);
     console.log(randomNumber);
     data += generateWord(randomNumber);
     data += " ";  
     console.log(data); 
    }
    para.innerText= data;
    para.setAttribute("class","paras");
    container.append(para);

};
