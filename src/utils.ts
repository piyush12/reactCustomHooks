export const fakeApiCall = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({data:{}});
    }, 3000);
  });
