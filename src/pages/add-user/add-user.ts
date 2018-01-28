import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage implements OnInit{
  public addUserForm: FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage) {
  }

  ngOnInit() {
    this.addUserForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      cpf: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required)
    })
  }

  saveUser() {
    this.storage.set('user', this.addUserForm.value);
  }

}
