
const WIDTH = window.innerWidth; //largura da tela
const HEIGHT = window.innerHeight; //altura da tela



window.onload=function() {
const SCREEN = document.querySelector("#screen"); // o canvas
let ctx = SCREEN.getContext("2d");  // pegamos o contexto
//dimensões da screen
SCREEN.width=WIDTH; //dimensões
SCREEN.height=HEIGHT;

// colorir a tela
let tela = new draw_rect();
tela.ctx=ctx;



// criar bola

let ball = new Ball();




//criar Player
let p = new Player();
p.Controls("a","d");
let p2 = new Player();
p2.Controls("4","6")

//criar blocos





//atualiza o canvas
var update_frame=()=> {
tela.constructor("#1b1b1b",0,0,WIDTH,HEIGHT);



p.Pdraw(ctx);


ball.drawBall(ctx,p.position);





if(p.rebater(ball.x,ball.y)) {
ball.teto=true;
};



};

setInterval(()=>{requestAnimationFrame(update_frame)},20);



};
