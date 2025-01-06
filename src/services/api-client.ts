import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e9d4ba5b5f1a4eb09840b60082fcd2c6",
  },
});
