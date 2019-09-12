const bruteForceTimeout = async (wrappedPromise, duration = 1000) => new Promise((resolve) => {
  setTimeout(async () => {
    const retVal = await wrappedPromise;
    resolve(retVal);
  }, duration);
});

export default bruteForceTimeout;
