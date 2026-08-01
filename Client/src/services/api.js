const API_url =  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";;

export async function apiRequest(endpoint, options={}){
    const response = await fetch(`${API_url}${endpoint}`,{
        headers:{
            "Content-type": "application/json",
            ...options.headers
        },
        ...options,
    })

    const data = await response.json();
    
    if(!response.ok){
        throw new Error(data.message ||"Error message ") 
    }
    return data;
}
