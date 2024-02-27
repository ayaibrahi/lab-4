import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService {
  productList: Iproduct[] = [
    {
      id: 1,
      name: 'Izor Short Sleeves Buttoned Pique Polo Shirt - Dark Red',
      price: 21500,
      quantity: 5,
      PrdimgURL: '../assets/1 (1).jpg',
      category: "men's clothing",
      Material: 'cotton',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 2,
      name: 'Casual Shirt - 100% cotton - standard fit',
      price: 30000,
      quantity: 0,
      PrdimgURL:
        '../assets/1 (3).jpg',
      category: "men's clothing",
      Material: 'cotton',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 3,
      name: 'DANVOUY Womens T Shirt Casual Cotton Striped Short',
        price: 36999,
        quantity: 3,
        PrdimgURL:'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        category: "women's clothing",
        Material: 'cotton',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 4,
      name: 'Diadora Men Cotton Polo Shirt',
        price: 14000,
        quantity: 1,
        PrdimgURL:
          '../assets/1 (2).jpg',
        category: "men's clothing",
        Material: 'cotton',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 5,
      name: 'Pavone Beige Cole Splatter Pattern Polo Shirt - Black, Mustard & Blue',
        price: 1500,
        quantity: 2,
        PrdimgURL:
          '../assets/1.jpg',
        category:"men's clothing" ,
        Material: 'cotton',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 6,
      name: 'BIYLACLESEN Women 3-in-1 Snowboard Jacket Winter Coats',
      price: 1500,
      quantity: 3,
      PrdimgURL:
        'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
      category: "women's clothing",
      Material: '',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 7,
      name: 'Lock and Love Women Removable Hooded Leather Moto Jacket',
        price: 1000,
        quantity: 10,
        PrdimgURL:
          'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
        category: "women's clothing",
        Material: 'cotton',
      isPurshased: false,
      cartQuantity: 0,
    },
    {
      id: 8,
      name: 'Rain Jacket Windbreaker Striped Climbing Raincoats',
      price: 13000,
      quantity: 10,
      PrdimgURL:
        'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
      category: "women's clothing",
      Material: 'cotton',
      isPurshased: false,
      cartQuantity: 0,
    },
  ];
  constructor() {}
  getProductsDetails(id: number): Iproduct | undefined {
    return this.productList.find((product) => product.id == id);
  }
  getAllProducts(): Iproduct[] {
    return this.productList;
  }
  getProductByCat(catId: string) {
    return this.productList.filter((item) => item.category === catId);
  }
}
