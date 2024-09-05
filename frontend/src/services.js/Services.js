import { jwtDecode } from "jwt-decode";






export const decodeToken =(token) => {
    

  const decoded = jwtDecode(token);
  console.log(decoded);
  return decoded;
};