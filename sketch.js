//cria-se as variáveis
var pontos = 0;

var cenarioIMG, cenario;
function preload(){
    //carrega os arquivos de mídia
    cenarioIMG = loadImage("cenario.png")
}

function setup() {
    //códigos a serem executados uma vez
    createCanvas(400,400);
    //cria as sprites
    cenario = createSprite(200,200);
    cenario.addImage(cenarioIMG);
    cenario.scale=1.5;


}

function draw() {
    background("cyan")
    //códigos a serem executados durante todo o jogo


    drawSprites();
}