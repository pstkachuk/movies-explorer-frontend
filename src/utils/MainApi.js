export class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  async _requestIsOk(res) {
    if (res.ok) {
      return  res.json();
    }
    return Promise.reject(await res.json());
  }

  //регитсрация пользователя
  createUser(name, email, password) {
    return fetch(
      `${this._baseUrl}/signup`,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name,
          email,
          password
        })
      }
    )
    .then(this._requestIsOk);
  }

  //аутентификация пользователя
  login(email, password) {
    return fetch(
      `${this._baseUrl}/signin`,
      {
        method: 'POST',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        })
      }
    )
    .then(this._requestIsOk);
  }

  //логаут пользователя
  logout() {
    return fetch(
      `${this._baseUrl}/signout`,
      {
        method: 'POST',
        headers: this._headers,
        credentials: 'include',       
      }
    )
    .then(this._requestIsOk);
  }

  //получить данные пользователя
  getUserInfo() {
    return fetch(
      `${this._baseUrl}/users/me`,
      {
        method: 'GET',
        headers: this._headers,
        credentials: 'include',
      }
    )
    .then(this._requestIsOk);
  }

  //редактировать даннеы пользователя
  setUserInfo(name, email) {
    return fetch(
      `${this._baseUrl}/users/me`,
      {
        method: 'PATCH',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          name,
          email,
        })
      }
    )
    .then(this._requestIsOk);
  }

  //получить сохраненные фильмы
  getSavedMovies() {
    return fetch(
      `${this._baseUrl}/movies`,
      {
        method: 'GET',
        headers: this._headers,
        credentials: 'include'
      }
    )
    .then(this._requestIsOk);
  }

  //сохранить фильм
  createMovie(data) {
    return fetch(
      `${this._baseUrl}/movies`,
      {
        method: 'POST',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: data.image,
          trailerLink: data.trailerLink,
          nameRU: data.nameRU,
          nameEN: data.nameEN,
          thumbnail: data.thumbnail,
          movieId: data.id,
        })
      }
    )
    .then(this._requestIsOk);
  }

  //удалить фильм
  deleteMovie(id) {
    return fetch(
      `${this._baseUrl}/movies/${id}`,
      {
        method: 'DELETE',
        headers: this._headers,
        credentials: 'include',
      }
    )
    .then(this._requestIsOk);
  }
}

const mainApi = new MainApi ({
  baseUrl: 'https://api.sfd.movies.nomorepartiesxyz.ru',
  headers: {
    'Content-Type': 'application/json'
  },
});

export default mainApi;