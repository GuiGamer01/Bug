class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  show(){
    var pos = this.body.positon;
    Matter.Body.rotate(this.body,angle);
    push();
    rectMode(CENTER);
    fill("black");
    translate(pos.x,pos.y);
    rect(pos.x,pos.y,this.w,this.h);
    rotate(angle);
    pop();
    angle+=0.1;
  }
  


   
}
//tutorial de como criar uma classe atualizado 2023 FULL HD PRO Max 4K 
// class QQ coisa
// {
//   constructor(X, Y, w, h) 
//   {
//     let options = {
//       isStatic:true
//     };
    
//     esse corpo.body = Bodies.forma dele(X, Y, w, h, options);
//     esse.w = w;
//     esse.h = h;
//     World.add(world(onde vai ser adicionado), this.body(o que vai ser adicionado));
//   }
  

 
   
// }