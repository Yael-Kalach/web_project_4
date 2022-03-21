export class UserInfo {
  constructor({name, about}){
    this._userName = document.querySelector(name);
    this._userAbout = document.querySelector(about);
  }
  getUserInfo(){
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent
    };
  }
  setUserInfo({userName: name, userAbout: about}){
    this._userName.textContent = name;
    this._userAbout.textContent = about;
  }
}
