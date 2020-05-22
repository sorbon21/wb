import { Injectable } from '@angular/core';
import {Model} from './model'
@Injectable({
  providedIn: 'root'
})
export class ButtonsService {
   public  modelList: Model[]
  constructor() {
     this.modelList=[
       new Model(1,'1 кнопка для 1 страницы','Кнопка 1 для 1 страницы',function () {
        alert('1 кнопка на 1 странице')
       }),
       new Model(1,'2 кнопка для 1 страницы','Кнопка 2 для 1 страницы',function () {
         alert('2 кнопка на 1 странице')
       }),
       new Model(2,'1 кнопка для 2 страницы','Кнопка 1 для 2 страницы',function () {
         alert('1 кнопка на 2 странице')
       }),
       new Model(2,'2 кнопка для 2 страницы','Кнопка 2 для 2 страницы',function () {
         alert('2 кнопка на 2 странице')
       }),
       new Model(3,'1 кнопка для 3 страницы','Кнопка 1 для 3 страницы',function () {
         alert('1 кнопка на 3 странице')
       }),
       new Model(3,'2 кнопка для 3 страницы','Кнопка 2 для 3 страницы',function () {
         alert('2 кнопка на 3 странице')
       }),
       new Model(4,'1 кнопка для 4 страницы','Кнопка 1 для 4 страницы',function () {
         alert('1 кнопка на 4 странице')
       }),
       new Model(4,'2 кнопка для 4 страницы','Кнопка 2 для 4 страницы',function () {
         alert('2 кнопка на 4 странице')
       }),
       new Model(5,'1 кнопка для 5 страницы','Кнопка 1 для 4 страницы',function () {
         alert('1 кнопка на 5 странице')
       }),
       new Model(5,'2 кнопка для 5 страницы','Кнопка 2 для 5 страницы',function () {
         alert('2 кнопка на 5 странице')
       }),

     ]
  }
  getByPage(page:number){
     return this.modelList.filter(model=>{return model.page==page});
  }

}
