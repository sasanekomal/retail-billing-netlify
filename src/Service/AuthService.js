import axios from "axios";

export const login = async(data) => {
    return await axios.post("https://retail-billingapi-production.up.railway.app/api/v1.0/login",data);
}