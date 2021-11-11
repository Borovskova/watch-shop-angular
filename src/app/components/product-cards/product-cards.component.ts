import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductCardsService } from 'src/app/servises/product-cards.service';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  // public cards: any = [
  //   { id: '1', imgName: "cardImage1.png", name: "Analog Starter Kit", description: "(Walnut)", newPrice: "$103.00", oldPrice: "$89.00" },
  //   { id: '2', imgName: "cardImage2.png", name: "The Analog Complete Set", description: "", price: "$103.00" },
  //   { id: '3', imgName: "cardImage3.png", name: "Analog Starter Kit", description: "(Walnut)", newPrice: "$103.00", oldPrice: "$89.00" },
  //   { id: '4', imgName: "cardImage4.png", name: "Analog Starter Kit", description: "(Walnut)", price: "$103.00" },
  //   { id: '5', imgName: "cardImage5.png", name: "Analog Starter Kit", description: "(Walnut)", price: "$103.00" },
  //   { id: '6', imgName: "cardImage6.png", name: "Analog Starter Kit", description: "(Walnut)", newPrice: "$103.00", oldPrice: "$89.00" },
  //   { id: '7', imgName: "cardImage7.png", name: "Analog Starter Kit", description: "(Walnut)", newPrice: "$103.00", oldPrice: "$89.00" },
  //   { id: '8', imgName: "cardImage8.png", name: "Analog Starter Kit", description: "(Walnut)", newPrice: "$103.00", oldPrice: "$89.00" },
  //   { id: '9', imgName: "cardImage9.png", name: "Analog Starter Kit", description: "(Walnut)", price: "$103.00" },
  //   { id: '10', imgName: "cardImage10.png", name: "Analog Starter Kit", description: "(Walnut)", newPrice: "$103.00", oldPrice: "$89.00" },
  //   { id: '11', imgName: "cardImage11.png", name: "Analog Starter Kit", description: "(Walnut)", newPrice: "$103.00", oldPrice: "$89.00" },
  //   { id: '12', imgName: "cardImage12.png", name: "Analog Starter Kit", description: "(Walnut)", newPrice: "$103.00", oldPrice: "$89.00" },
  //   { id: '13', imgName: "cardImage13.png", name: "Analog Starter Kit", description: "(Walnut)", newPrice: "$103.00", oldPrice: "$89.00" },
  //   { id: '14', imgName: "cardImage14.png", name: "Analog Starter Kit", description: "(Walnut)", newPrice: "$103.00", oldPrice: "$89.00" },
  //   { id: '15', imgName: "cardImage15.png", name: "Analog Starter Kit", description: "(Walnut)", price: "$103.00" },
  //   { id: '16', imgName: "cardImage16.png", name: "Analog Starter Kit", description: "(Walnut)", price: "$103.00" },
  //   { id: '17', imgName: "cardImage17.png", name: "Analog Starter Kit", description: "(Walnut)", price: "$103.00" },
  //   { id: '18', imgName: "cardImage18.png", name: "Analog Starter Kit", description: "(Walnut)", price: "$103.00" },
  //   { id: '19', imgName: "cardImage19.png", name: "Analog Starter Kit", description: "(Walnut)", price: "$103.00" },
  //   { id: '20', imgName: "cardImage20.png", name: "Analog Starter Kit", description: "(Walnut)", price: "$103.00" }
  // ]

  public cards: any = [];
  public newCards: any = [];
  public buttonText: string = 'Shop New Arrivals';




  constructor(public productCardsService: ProductCardsService) { }

  ngOnInit() {
    this.loadDefaultCards()
  }

  public loadDefaultCards() {
    this.productCardsService.getProductCardsUrl()
      .subscribe(
        response => {
          this.cards = response.cards;
        },
        error => {
          console.log(error)
        }
      )
  }

  public loadMoreCards(el: HTMLElement,) {
    this.productCardsService.getMoreProductCardsUrl()
      .subscribe(
        response => {
          this.newCards = response.cards;
          if (this.cards.length <= 60) {
            Array.prototype.push.apply(this.cards, this.newCards);
          }
        },
        error => {
          console.log(error)
        }
      )
    if (this.cards.length >= 40 && this.cards.length < 60) {
      this.buttonText = 'Hide New Arrivals';
    } else if (this.cards.length >= 60) {
      // this.cards.splice(0, 60);
      this.cards = [];
      this.loadDefaultCards()
      el.scrollIntoView({ behavior: 'smooth' });
      this.buttonText = 'Shop New Arrivals';
    } else {
      this.buttonText = 'Shop New Arrivals';
    }
  }
}
