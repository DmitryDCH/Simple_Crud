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

}

export default new Request_Service();