import {Routes, Route} from "react-router-dom";

import Home from "../pages/Home";
import CreateTicket from "../pages/createTicket";
import NotFound from "../pages/notFound";
import TicketDetails from "../pages/ticketDetails";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<CreateTicket/>}/>
            <Route path="/ticket/:ticket_id" element={<TicketDetails/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default AppRoutes;