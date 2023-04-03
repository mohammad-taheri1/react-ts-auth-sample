import axios from "axios";
import { baseUrl } from "../constants/urls.const";

const useAxios = () =>
   axios.create({
      baseURL: baseUrl,
   });

export default useAxios;
