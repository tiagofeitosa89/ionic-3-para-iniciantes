import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "Tiago Feitosa do Código";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(n:number, m:number): void{
    alert(n+m);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(5, 2);
  }

}
