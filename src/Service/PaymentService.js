import axios from "axios";

export const createRazorpayOrder = async (data) => {
    return await axios.post(`https://retail-billingapi-production.up.railway.app/api/v1.0/payments/create_order`, data, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
} 

export const verifyPayment = async (paymentData) => {
    return await axios.post('https://retail-billingapi-production.up.railway.app/api/v1.0/payments/verify', paymentData, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}