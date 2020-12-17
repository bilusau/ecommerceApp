import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs : AngularFirestore, private as : AuthService) { }

  addToCart(Product)
  {
    return this.fs.collection(`Users/${this.as.userId}/cart`).add(Product);
  }

  getCart()
  {
    return this.fs.collection(`Users/${this.as.userId}/cart`).snapshotChanges()
  }

  deletedocfromcart(id)
  {
    return this.fs.doc(`Users/${this.as.userId}/cart/${id}`).delete()
  }

  updatedocfromcart(id, amount)
  {
    return this.fs.doc(`Users/${this.as.userId}/cart/${id}`).update({amount})
  }

}
