
class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl
    this._headers = headers
  }

  getInitialCards() {
    return fetch (`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
      .catch(console.log)
  }

  getUserInformation() {
    return fetch (`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
      .catch(console.log)
  }

  createCard(data){
    return fetch (`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
      .catch(console.log)
  }

  deleteCard(cardId){
    return fetch (`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(res => res.ok ? res.json() : Promise.reject(res.statusText))
      .catch(console.log)
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "cf053b19-b17e-4293-83f1-18e0a87c8336",
    "Content-Type": "application/json"
  }
});