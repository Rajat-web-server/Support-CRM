const {
  insertTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
   getLastTicketNumber,
} = require("../models/ticket_model");

function generateTicketId() {
  const lastNumber = getLastTicketNumber();
  const nextNumb = lastNumber + 1;
  return `TKT-${String(nextNumb).padStart(3, "0")}`;
}
//post
function createTicketController(req, res) {
  const { customer_name, customer_email, subject, description } = req.body;

  const ticket_id = generateTicketId();
  insertTicket(ticket_id, customer_name, customer_email, subject, description);

  res.json({
    success: true,
    "ticket_id" : ticket_id,
  });
}
//get
function getAllTicketsController(req, res) {
  console.log("req.query :", req.query)
  const {status, search} = req.query;
  const Tickets = getAllTickets({status, search});
  res.json(Tickets);
}
//get/ticket/:id
function getTicketByIdController(req, res) {
  const ticket_id = req.params.ticket_id;
  const ticket = getTicketById(ticket_id);
  
  console.log(ticket)
  if (!ticket) {
  return  res.status(404).json({
      success: false,
      message: "Ticket not found",
    });
  } else {
    res.json(ticket);
    
  }
}
// put/ticket/:id
function updateTicketController(req, res, next) {
  try {
    const ticket_id = req.params.ticket_id;
    const { status } = req.body;

    const result = updateTicket(ticket_id, status);

    if (result.changes === 0) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    res.json({
      success: true,
      message: "Ticket updated",
    });
  } catch (err) {
    next(err);
  }
}
//DELETE /tickets/:id
function deleteTicketController(req, res) {
  const ticket_id = req.params.ticket_id;
  const result=deleteTicket(ticket_id);
  if (result.changes===0)
    res.status(404).json({
      success: false,
      message: "Ticket not found",
    });
  else {
    res.json({
      success: true,
      message: "Ticket deleted",
    });
  }
}

module.exports = {
  generateTicketId,
  createTicketController,
  getAllTicketsController,
  updateTicketController,
  getTicketByIdController,
  deleteTicketController,
};
