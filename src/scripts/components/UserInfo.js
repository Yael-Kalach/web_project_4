export class UserInfo {
  constructor({nameSelector, aboutSelector, avatarSelector}){
    this._userNameElement = document.querySelector(nameSelector);
    this._userAboutElement = document.querySelector(aboutSelector);
    this._userAvatarElement = document.querySelector(avatarSelector);
  }
  getUserInfo(){
    return {
      name: this._userNameElement.textContent,
      about: this._userAboutElement.textContent,
      avatar: this._userAvatarElement.src
    };
  }
  setUserInfo({name, about}){
    this._userNameElement.textContent = name;
    this._userAboutElement.textContent = about;
  }
  setAvatar({avatar}){
    this._userAvatarElement.src = avatar;
  }
}
