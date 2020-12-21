import React from "react";
import Axios from 'axios';

import {BASE_URL} from '../backendPPL/config/config';

const apicaller = (type, url, user) => {
  return new Promise((resolve, reject) => {
    const Url = baseURL + url;
    const options = {
      method: type,
      url: Url,
      data: user,
    };

    if (type === "get") {
      delete options["data"];
    }
    console.log("@@@@options", options);
    axios({ ...options })
      .then((response) => {
        console.log("response", response);

        resolve(response);
      })
      .catch((error) => {
        console.log("error", error);
        reject(error);
      });
  });
};

export { apicaller };