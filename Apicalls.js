/*
To implement createGetAPIWithMerging, 
you need to create a higher-order function that wraps around the getAPI function. 
This wrapper function should keep track of ongoing API calls and their parameters. 
If a call with the same parameters is already in progress, 
it should return the same promise instead of making a new API call.
*/



const createGetAPIWithMerging = (getAPI, timeout = 5000) => {
    const ongoingCalls = new Map();
  
    return async (path, config) => {
      const key = JSON.stringify({ path, config });
  
      if (ongoingCalls.has(key)) {
        return ongoingCalls.get(key);
      }
  
      const apiCall = new Promise(async (resolve, reject) => {
        const timer = setTimeout(() => {
          ongoingCalls.delete(key);
          reject(new Error('API call timed out'));
        }, timeout);
  
        try {
          const response = await getAPI(path, config);
          clearTimeout(timer);
          ongoingCalls.delete(key);
          resolve(response);
        } catch (error) {
          clearTimeout(timer);
          ongoingCalls.delete(key);
          reject(error);
        }
      });
  
      ongoingCalls.set(key, apiCall);
      return apiCall.catch(async (error) => {
        if (error.message === 'API call timed out') {
          return createGetAPIWithMerging(getAPI, timeout)(path, config);
        }
        throw error;
      });
    };
  };
  
  // Example usage
  const getAPI = async (path, config) => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Data from ${path} with ${JSON.stringify(config)}`);
      }, 1000);
    });
  };
  
  const getAPIWithMerging = createGetAPIWithMerging(getAPI, 2000);
  
  (async () => {
    try {
      const list1 = await getAPIWithMerging('/list', { keyword: 'learnWithChirag' });
      const list2 = await getAPIWithMerging('/list', { keyword: 'learnWithChirag' });
      const list3 = await getAPIWithMerging('/list', { keyword: 'engineerchirag' });
  
      console.log(list1); // Data from /list with {"keyword":"learnWithChirag"}
      console.log(list2); // Data from /list with {"keyword":"learnWithChirag"} (same as list1)
      console.log(list3); // Data from /list with {"keyword":"engineerchirag"}
    } catch (error) {
      console.error(error);
    }
  })();
  