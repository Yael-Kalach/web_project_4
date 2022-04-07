export class UserInfo {
  constructor({nameSelector, aboutSelector}){
    this._userNameElement = document.querySelector(nameSelector);
    this._userAboutElement = document.querySelector(aboutSelector);
  }
  getUserInfo(){
    return {
      name: this._userNameElement.textContent,
      about: this._userAboutElement.textContent
    };
  }
  setUserInfo({name, about}){
    this._userNameElement.textContent = name;
    this._userAboutElement.textContent = about;
  }
}
