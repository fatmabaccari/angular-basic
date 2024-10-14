import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  public products : any ;
  public motcle :string="";
  constructor(){

  }
ngOnInit(): void {
  this.products=[
    {"id" :1, "name" : "pc","price":4354 },
    {"id" :2, "name" : "computer","price":4354 },
    {"id" :3, "name" : "tv","price":3354 },
    {"id" :4, "name" : "computer","price":4354 },
  ]

}
deleteProduct(p:any):void {
  let index =this.products.indexOf(p);
  this.products.splice(index,1);
}
recherche ():void {
  console.log(this.motcle);
  let resultat :any[] = [];
  for(let p of this.products){
    if(p.name.includes(this.motcle)){
      resultat.push(p);
    }
  }
  this.products=resultat;
}
}
