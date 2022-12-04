let canvas = document.getElementById("meucanvas")
let ctx = canvas.getContext("2d")
var tecla = {}
var personagem  = new Image()
personagem.src ="./batman.png"
var vida = {
    x: 80,
    y: 10,
    altura: 20,
    largura: 300,
};
var rosto = {
    x :-5,
    y: -5,
    largura: 90,
    altura: 100,
    }

var meupersonagem = {
    foto: personagem,
    x :-10,
    y: 380,
    largura: 70,
    altura: 80,
    velocidade: 10,


}
let coringa = {
    x: 20,
    y: 40,
    largura: 50,
    altura: 50,
    velocidade: 5,
    direcao_x: 1,
    direcao_y: 1,
    hit : 5
};
let bane = {
    x: 50,
    y: 40,
    largura: 50,
    altura: 50,
    velocidade: 3,
    direcao_x: 1,
    direcao_y: 3,
    hit : 10
};
let duas_caras = {
    x: 100,
    y: 20,
    largura: 50,
    altura: 50,
    velocidade: 4,
    direcao_x: 2,
    direcao_y: 7,
    hit : 3
}
document.addEventListener("keydown", function (e){
    tecla [e.keyCode] = true
    console.log(tecla)
})
document.addEventListener("keyup", function (e){
    delete tecla [e.keyCode]
    console.log(tecla)
})
let imagem_coringa = new Image();
let imagem_rosto = new Image()
let imagem_bane = new Image();
let imagem_duas = new Image();
let imagem_gameover = new Image();
let i = 0;


function movebloco(){
    if (65 in tecla && meupersonagem.x >   0 - 10)
        meupersonagem.x -= meupersonagem.velocidade

    else if (68 in tecla && meupersonagem.x + meupersonagem.largura < canvas.width + 10)
        meupersonagem.x += meupersonagem.velocidade



}


function atualiza() {
    if (65 in tecla)
        personagem.src = "./esq.png"
    else if (68 in tecla)
        personagem.src = "./dir.png"

    else {
        personagem.src = "./batman.png"
    }
}

function movimento() {
    if (coringa.x <= 0) {
        coringa.direcao_x = 1;
    } else if (coringa.x + coringa.largura > canvas.width) {
        coringa.direcao_x = -1;
    }
    if (coringa.y <= 0) {
        coringa.direcao_y = 2;
    } else if (coringa.y + coringa.altura > canvas.height) {
        coringa.direcao_y = -2;
    }
    else if(coringa.x < meupersonagem.x + meupersonagem.largura && coringa.x + coringa.largura > meupersonagem.x && coringa.y < meupersonagem.y + meupersonagem.altura  && coringa.y + coringa.altura > meupersonagem.y)  {

        vida.largura -= coringa.hit
        if(coringa.y - coringa.largura <= 0)
            coringa.direcao_x = 1;
    }
    else if(bane.x < meupersonagem.x + meupersonagem.largura && bane.x + bane.largura > meupersonagem.x && bane.y < meupersonagem.y + meupersonagem.altura  && bane.y + bane.altura > meupersonagem.y) {
        vida.largura -= bane.hit
        if(bane.y - bane.largura <= 0)
            bane.direcao_x = 1;
    }
    else if(duas_caras.x < meupersonagem.x + meupersonagem.largura && duas_caras.x + duas_caras.largura > meupersonagem.x && duas_caras.y < meupersonagem.y + meupersonagem.altura  && duas_caras.y + duas_caras.altura > meupersonagem.y) {
        vida.largura -= duas_caras.hit
        if(duas_caras.y - duas_caras.largura <= 0)
            duas_caras.direcao_x = 1;
    }
    if (bane.x <= 0) {
        bane.direcao_x = 1;
    } else if (bane.x + bane.largura > canvas.width) {
        bane.direcao_x = -1;
    }
    if (bane.y <= 0) {
        bane.direcao_y = 2;
    } else if (bane.y + bane.altura > canvas.height) {
        bane.direcao_y = -2;
    }
    if (duas_caras.x <= 0) {
        duas_caras.direcao_x = 1;
    } else if (duas_caras.x + duas_caras.largura > canvas.width) {
        duas_caras.direcao_x = -1;
    }
    if (duas_caras.y <= 0) {
        duas_caras.direcao_y = 2;
    } else if (duas_caras.y + duas_caras.altura > canvas.height) {
        duas_caras.direcao_y = -2;
    }
    coringa.x = coringa.x + coringa.velocidade * coringa.direcao_x;
    coringa.y = coringa.y + coringa.velocidade * coringa.direcao_y;
    bane.x = bane.x + bane.velocidade * bane.direcao_x;
    bane.y = bane.y + bane.velocidade * bane.direcao_y;
    duas_caras.x = duas_caras.x + duas_caras.velocidade * duas_caras.direcao_x;
    duas_caras.y = duas_caras.y + duas_caras.velocidade * duas_caras.direcao_y;





}

let telagameover = {
    x: 0,
    y: 0,
    largura: 900,
    altura: 450,
}

function desenhar(){

    ctx.clearRect(0,0,canvas.width,canvas.height)
    imagem_rosto.src = 'rosto.png';


    if (i <= 10) {
        imagem_coringa.src = 'coringa.png';
    }
    else if(i > 10 && i <= 20) {
        imagem_coringa.src = 'coringa1.png';
    }
    else if(i > 20 && i <= 30) {
        imagem_coringa.src = 'coringa2.png';
    }
    else if(i > 30 && i <= 40) {
        imagem_coringa.src = 'coringa3.png';
    }
    if (i <= 10) {
        imagem_duas.src = 'duas.png';
    }
    else if(i > 10 && i <= 20) {
        imagem_duas.src = 'duas1.png';
    }
    else if(i > 20 && i <= 30) {
        imagem_duas.src = 'duas2.png';
    }
    else if(i > 30 && i <= 40) {
        imagem_duas.src = 'duas3.png';
    }
    if (i <= 10) {
        imagem_bane.src = 'bane.png';
    }
    else if(i > 10 && i <= 20) {
        imagem_bane.src = 'bane1.png';
    }
    else if(i > 20 && i <= 30) {
        imagem_bane.src = 'bane2.png';
    }
    else if(i > 30 && i <= 40) {
        imagem_bane.src = 'bane3.png';
    }
    ctx.drawImage(meupersonagem.foto,meupersonagem.x,meupersonagem.y,meupersonagem.largura,meupersonagem.altura)
    ctx.drawImage(imagem_rosto,rosto.x,rosto.y,rosto.largura,rosto.altura)

    ctx.drawImage(imagem_coringa, coringa.x, coringa.y, coringa.largura,
        coringa.altura);
    ctx.drawImage(imagem_bane, bane.x, bane.y, bane.largura,
        coringa.altura);
    ctx.drawImage(imagem_duas, duas_caras.x, duas_caras.y, duas_caras.largura,
        duas_caras.altura);

    ctx.fillStyle = "red";
    ctx.fillRect(vida.x, vida.y, vida.largura, vida.altura);
    i += 1;
    if(i > 40)
        i = 0;
    if (vida.largura <= 0) {
        imagem_gameover.src = 'gameover.png';
        ctx.drawImage(imagem_gameover,telagameover.x,telagameover.y,telagameover.largura,telagameover.altura)
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText("Renicie a página para jogar novamente ", 20, 20);}

    movebloco()
    movimento()
    atualiza()
    requestAnimationFrame(desenhar)


}
function main(){
    desenhar();}

