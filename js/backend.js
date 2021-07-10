const postData = (url, form, onSuccess, onError) => {
  fetch(url, {
    method: 'POST',
    body: form,
  })
    .then((response) => {
      if (response.ok) {
        response.json();
        return onSuccess(response);
      }
      onError(response);
    })
    .catch((error) => {
      onError(error);
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
