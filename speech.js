const texto=document.querySelector("#texto");
const recordVoz=document.querySelector("#recordVoz")
console.log(123);
var a="Gelson fala a erora hora"
var textoArray=a.search(/hora/i)
if (textoArray>=0) {
    console.log(textoArray);
}


class speechAPI{
    constructor(){
        const speechTexto=window.SpeechRecognition || window.webkitSpeechRecognition;

        this.speechAPI=new speechTexto();
        this.output=texto.output
        this.speechAPI.continuous=true
        this.speechAPI.lang='pt-PT'

        this.speechAPI.onresult= e =>{
            var resultIndex=e.resultIndex
            var transcript=e.results[resultIndex][0].transcript
            texto.value +=transcript
        }
    }

    start(){
        this.speechAPI.start()
    }
    stop(){
        this.speechAPI.stop()
    }
}

var speech= new speechAPI()

recordVoz.addEventListener('click',()=>{
    speech.start();
})