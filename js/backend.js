const postData = (url, data, onSuccess, onError) => {
  fetch(url, {
    method: 'POST',
    body: data,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((json) => {
      if(json.ok){
        return onSuccess(json);
      }
    })
    .catch((err) => {
      onError(err);
    });
};

const getData = (url, onSuccess, onError) => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      onSuccess(json);
    })
    .catch((err) => {
      onError(err);
    });
};

export {postData, getData};
