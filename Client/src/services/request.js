class Request_Service {
  _baseUrl = 'http://localhost:8080/';

  get = async (url) => {
    try {
      const responce = await fetch(`${this._baseUrl}${url}`);
      return await responce.json();
    } catch (error) {
      console.error(`Cannot get data from ${this._baseUrl}${url} ->`, error);
    }
  }
  
  delete = async (url, body) => {
    try {
      const responce = await fetch(`${this._baseUrl}${url}`, {
        method: 'DELETE',
        headers: this._getHeaders(),
        body: JSON.stringify(body),
      });
      return await responce.json();
    } catch (error) {
      console.error(`Cannot post data to ${this._baseUrl}${url} ->`, error);
    }
  }

  update = async (url, body) => {
    try {
      const responce = await fetch(`${this._baseUrl}${url}`, {
        method: 'PUT',
        headers: this._getHeaders(),
        body: JSON.stringify(body),
      });
      return await responce.json();
    } catch (error) {
      console.error(`Cannot put data to ${this._baseUrl}${url} ->`, error);
    }
  }

  post = async (url, body) => {
    try {
      const responce = await fetch(`${this._baseUrl}${url}`, {
        method: 'POST',
        headers: this._getHeaders(),
        body: JSON.stringify(body),
      });
      return await responce.json();
    } catch (error) {
      console.error(`Cannot post data to ${this._baseUrl}${url} ->`, error);
    }
  }

  _getHeaders = () => ({
    'Content-Type': 'application/json',
    'Accept-Type': 'application/json',
});

}

export default new Request_Service();