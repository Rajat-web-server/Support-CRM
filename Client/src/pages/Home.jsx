import { useEffect } from "react";
import { getTickets } from "../services/ticketService";

function Home() {
  useEffect(() => {
    async function testApi() {
      try {
        const data = await getTickets();
        console.log("Tickets from backend:", data);
      } catch (error) {
        console.error("API Error:", error);
      }
    }

    testApi();
  }, []);

  return (
    <div>
      <h1>Support CRM</h1>
    </div>
  );
}

export default Home;