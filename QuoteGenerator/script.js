// import { GoogleGenAI } from "@google/genai";
import { GoogleGenAI } from "https://esm.run/@google/genai";

const ai = new GoogleGenAI({ apiKey: "Your_APIKEY" });

let cquote;
let quote;
let author;

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: "Generate a  quote and with its author and strictly  make it unique. Provide your response as a valid JSON object with exactly two keys: 'quote' (the quote text) and 'author' (the person who said it, or 'Unknown'). Do not wrap the JSON in markdown code blocks ",
    
  });
  

  let data=JSON.parse(response.text);
  console.log(data);

  quote=document.getElementById("quote");
 author=document.getElementById("author");
cquote=data.quote;

quote.textContent=`${data.quote}`;
author.textContent=`By~ ${data.author}`;



}


main();

let nextbtn=document.getElementById("next-btn");
nextbtn.addEventListener('click',()=>{
 main();

 
});

let cpybtn=document.getElementById("copy-btn");
cpybtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(cquote);
    cpybtn.innerText="! copied";
    setTimeout(() => {
        cpybtn.innerText="Copy";
    }, 555);
})
