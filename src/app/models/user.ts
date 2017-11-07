export class User {

  private nome: string;
  private login: string;
  private email: string;
  private perfil: string;
  private urlFoto: string;

  constructor(userInfo: any) {
    this.nome = userInfo.nome;
    this.login = userInfo.login;
    this.email = userInfo.email;
    this.perfil = userInfo.perfil;
    this.urlFoto = userInfo.urlFoto;
  }

}
