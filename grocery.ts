import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'page-grocery',
  templateUrl: 'tab2.page.html'
})

export class GroceryHomePage {

  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity:2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name:"Eggs",
      quantity: 2
    },
    {
      name: "Strawberries",
      quantity: 1
    }
];

constructor(public navCtrl:NavController, public toastCtrl:ToastController, public alertCtrl:AlertController) {
  
}


RemoveItem(item) {
  console.log("Removing item - ", item);
  const toast = this.toastCtrl.create({
    message: "Removing item - " + item.name + " ...",
    duration: 3000
  });
  toast.present();
}

addItem() {
  console.log("Adding item - ", item);
  this.showAddItemsPrompt();
}

showAddItemsPrompt() {
  const prompt = this.alertCtrl.create({
    title: 'Add item',
    message: "Please enter item below, along with quantity..",
    inputs: [
      {
        name: 'name',
        placeholder: 'Name'
      },
      {
        name: 'quantity',
        placeholder: 'Quantity'
      }

    ],
    buttons: [
      {
        text: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'save',
        handler: item => {
          console.log('Save clicked', item);
          this.items.push(item);
        }
      },
    ]
  })
  prompt.present();
}





}
