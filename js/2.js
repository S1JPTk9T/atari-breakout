
function draw_rect(color,x,y,w,h) {
if(this.ctx){
let ctx = this.ctx;
ctx.fillStyle=color;
ctx.fillRect(x,y,w,h);
};};

function randomizar(min, max) {
  return Math.random() * (max - min) + min;
}
function restart() {
location=window.location.href;

};
class Player {

constructor() {
this.position=(parseInt(WIDTH/2));
this.passo=40; // distancia para direita  e esquerda
this.largura=150;
this.altura=20;
this.cor="#FFFFFF";
console.log(this.position);
}

Controls(a,b){
window.addEventListener("keydown",(event)=>{
const letter = event.key;
switch(letter) {
case a:this.goLeft();break;
case b:this.goRight();break;
};});}

goLeft() {
if((this.position - this.passo)>=0) {this.position-=this.passo;}; // ir para a esquerda
}
goRight() {
if((this.position + this.passo + this.largura)<=WIDTH) {this.position+=this.passo; }; // ir para a direita
}

Pdraw(ctx) {
let c = new draw_rect();
c.ctx=ctx;
c.constructor(this.cor,this.position,(HEIGHT-100),this.largura,this.altura);
}

rebater(bx,by) {
bx = parseInt(bx);
by = parseInt(by);
if(by>=(HEIGHT-100)) {

if(bx >= this.position && bx <= (this.position+this.largura)) {
return true;
};// se a bola passar direto
};

}

};



class Ball {
constructor() {

this.x = randomizar(0,WIDTH);
this.y =(HEIGHT-150);
this.vx=10;
this.vy=2;
this.tamanho = 20;
this.collor="rgba("+randomizar(0,255)+","+randomizar(0,255)+","+randomizar(0,255)+",0.5)";
this.acre=5;
this.travac=(this.x < randomizar(0,WIDTH))?0:1; // trava de trava de cima
this.teto=true;
}

movimentar(position) {

let esquerda_cima=()=> {
this.x-=this.vx;
this.y-=this.vy;
};
let direita_cima=()=> {
this.x+=this.vx;
this.y-=this.vy;
};
let esquerda_baixo=()=> {
this.x-=this.vx;
this.y+=this.vy;
};
let direita_baixo=()=> {
this.x+=this.vx;
this.y+=this.vy;
};

if(this.y<=(this.tamanho+this.vy)) { this.teto=false;  };
if(this.y>=(HEIGHT-(this.tamanho+this.vx))) { this.teto=true;};
if(this.x>=(this.vx+this.tamanho) && this.y >= (this.vy+this.tamanho) && this.travac==true && this.teto==true) { esquerda_cima();} else if(this.teto==true) {this.travac=false;};
if((this.x+this.tamanho)<=(WIDTH) && (this.y+this.tamanho) <= HEIGHT && this.travac==false && this.teto==true) { direita_cima();} else if(this.teto==true) {this.travac=true;};
if(this.x >= (this.tamanho) && this.travac == true &&this.teto==false) { esquerda_baixo(); } else if(this.teto==false) { this.travac=false;};
if(this.x <= (WIDTH-(this.tamanho)) && this.travac==false && this.teto==false) { direita_baixo(); } else if(this.teto==false) { this.travac=true; };
}

drawBall(ctx,position) {
//console.log(this.x+","+this.y);
  ctx.beginPath();
  ctx.strokeStyle=this.collor;
  ctx.arc(this.x,this.y,this.tamanho,0,2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle=this.collor;
  ctx.fill();
  this.movimentar(position);
}




};
