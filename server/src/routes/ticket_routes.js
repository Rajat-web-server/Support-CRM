const express = require('express');
const router = express.Router();
const {generateTicketId,
  createTicketController,
  getAllTicketsController,
  updateTicketController,
  getTicketByIdController,
  deleteTicketController} = require("../controllers/ticketController")
  const validateTicket = require("../middleware/validateTicket");
router.post('/',validateTicket, createTicketController);

router.get('/', getAllTicketsController);

router.get('/:ticket_id', getTicketByIdController);

router.put('/:ticket_id', updateTicketController);

router.delete('/:ticket_id',deleteTicketController);


module.exports = router;