import axios from "axios";

// axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiousRequest = async ({ ...options }) => {
  const onSuucess = (res) => {
    return res.data;
  };
  const onError = (err) => {
    // console.log(555, err.request.response)
    throw err.response.data;
  };

  return axios(options).then(onSuucess).catch(onError);
};

export default axiousRequest;
