export class UserInfo {
  constructor({name, about}){
    this._userName = document.querySelector(name);
    this._userAbout = document.querySelector(about);
    this._name = name
    this._about = about
  }
  getUserInfo(){
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent
    };
  }
  setUserInfo({name, about}){
    this._userName.textContent = name;
    this._userAbout.textContent = about;
  }
}
