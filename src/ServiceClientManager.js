
// fetching  from api and get all photos 
function ServiceClientManager() {
    var baseAPI = 'https://jsonplaceholder.typicode.com/photos';

    var _serviceDefinition = {
        retrieveAll:retrieveAll
    }

    function callService(serviceUrl, successCallback, errorCallback) {
        var promise = fetch(serviceUrl)
            .then( response=> {
                return response.json();
            })
            .then(json => {
                successCallback(json);
            })
            .catch(error => {
                errorCallback(error);
            });

        return promise;
    }

  
    function retrieveAll(successCallback, errorCallback) {
        var serviceUrl = baseAPI;
        return callService(serviceUrl, successCallback, errorCallback);
    }
    return _serviceDefinition;
};

export default new ServiceClientManager();