export class MoviesApi {
  constructor (options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _requestIsOk(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка - ${res.status}`);
  }

  //получить фильмы с сервера
  getMovies() {
    return fetch(
      `${this._baseUrl}`,
      {
        method: 'GET',
        headers: this._headers,
      }
    )
    .then(this._requestIsOk);
  }
}

const moviesApi = new MoviesApi ({
  baseUrl: ' https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  },
});

export default moviesApi;