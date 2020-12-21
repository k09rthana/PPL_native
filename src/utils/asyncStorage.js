import AsyncStorage from "@react-native-community/async-storage";
export let set = (key, object) => {
  return new Promise(function(resolve, reject) {
    if (object === undefined) {
      reject(new Error("storage item value required"));
    } else {
      //  console.log('Value', object);
      let value = getString(object);
      AsyncStorage.setItem(key, value)
        .then(resolve)
        .catch(reject);
    }
  });
};
export let get = key => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then(value => {
        let object = getJSONObject(value);
        //  console.log('Value', object);
        resolve(object);
      })
      .catch(reject);
  });
};

export let remove = key => {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem(key)
      .then(resolve)
      .catch(reject);
  });
};
export let getJSONObject = str => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
};
