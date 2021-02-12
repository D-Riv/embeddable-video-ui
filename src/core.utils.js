import axios from "axios";
// import _get from "lodash/get";
import { DEFAULT } from "./core.config";

export const httpRequest = (
  apiConfig = {
    method: "get",
    endpoint: null,
    headers: {},
    data: null,
    params: {},
  }
) =>
  new Promise((resolve, reject) => {
    const headers = {
      "content-type": "application/json",
      "X-Api-Key": DEFAULT.AUTH_TOKEN,
      // Authorization: DEFAULT.AUTH_TOKEN,
      // ...apiConfig.headers,
    };

    axios({
      method: apiConfig.method,
      url: DEFAULT.BASE_URL + apiConfig.endpoint,
      headers,
      data: apiConfig.data,
      params: apiConfig.params,
    }).then(
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err.response);
      }
    );
  });
