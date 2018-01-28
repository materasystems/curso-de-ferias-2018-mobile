import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";

import { UserServiceProvider } from "../../providers/user-service/user-service";
import { ProfilePage } from "../profile/profile";

@IonicPage()
@Component({
  selector: "page-edit-user",
  templateUrl: "edit-user.html"
})
export class EditUserPage implements OnInit {
  public editUserForm: FormGroup;
  private responseUser;
  public user = { nome: "", cpf: "", phone: "", email: "" };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private userService: UserServiceProvider) {}

  ngOnInit() {
    this.userService.getUserData().then(res => {
      this.responseUser = res;
      this.user.nome = res.nome;
      this.user.cpf = res.cpf;
      this.user.phone = res.phone;
      this.user.email = res.email;
    });

    this.editUserForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cpf: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required)
    });
  }

  saveUser() {
    this.responseUser.nome = this.editUserForm.value.nome;
    this.responseUser.cpf = this.editUserForm.value.cpf;
    this.responseUser.phone = this.editUserForm.value.phone;
    this.responseUser.email = this.editUserForm.value.email;
    this.storage.set("currentUser", this.responseUser);
    this.navCtrl.push(ProfilePage)
  }
}
