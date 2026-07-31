import { apiRequest } from "./api";

export function getTickets({status="",search=""}={}){
    const params = new URLSearchParams();

    if (status){
        params.append("status",status)
    }
    if (search){
        params.append("search",search)
    }

    const query = params.toString();

    return apiRequest(`/tickets${query? `?${query}`:""}`)
}

export function getTicket(ticketId) {
  return apiRequest(`/tickets/${ticketId}`);
}

export function createTicket(ticketData) {
  return apiRequest("/tickets", {
    method: "POST",
    body: JSON.stringify(ticketData),
  });
}

export function updateTicket(ticketId, ticketData) {
  return apiRequest(`/tickets/${ticketId}`, {
    method: "PUT",
    body: JSON.stringify(ticketData),
  });
}

export function deleteTicket(ticketId){
    return apiRequest(`/tickets/${ticketId}`,{
        method:"DELETE"
    });
    
}