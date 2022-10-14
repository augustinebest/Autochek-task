import axios from "axios";
axios.defaults.baseURL = "https://api.staging.myautochek.com/v1/inventory";

class ProcessRequest {
  async get(url: string) {
    const res = await axios.get(url);
    return res.data;
  }
}

export default new ProcessRequest();
