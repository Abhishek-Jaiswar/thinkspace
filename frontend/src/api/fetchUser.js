
import { baseUrl } from "../libs/api";

export const fetchUser = async () => {
    const response = await baseUrl.get('/api/user/me');
    return response.data.user;
}