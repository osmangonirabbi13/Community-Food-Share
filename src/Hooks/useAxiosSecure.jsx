import axios from "axios";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        if (error.response?.status == 401 || error.response?.status == 403) {
          await signOut(auth)
            .then(() => {
              console.log("logout by Interceptor");

              navigate("/login");
            })
            .catch((err) => {
              console.log("Interceptor logout error", err);
            });

          console.log("axios secure error", error.response.status);
        }

        return Promise.reject(error);
      }
    );
  }, [navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
