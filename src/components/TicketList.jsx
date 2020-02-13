import React from "react";
import Ticket from "./Ticket";


    var headerStyles = {
      backgroundColor: 'aqua',
      fontFamily: 'sans-serif',
      paddingTop: '50px'

    };

var masterTicketList = [
  {
    names: 'Brindle & Billy',
    location: '3a',
    issue: 'busted computer'
  },

  {
    names: 'Sally, John & Wilbur',
    location: '5c',
    issue: 'wobbly table'
  },

  {
    names: 'Everett & N8',
    location: '7d',
    issue: 'Fix project'

  }
];

function TicketList(){
  return (
    <div style={headerStyles}>
    <hr/>
    {masterTicketList.map((ticket,index) =>
      <Ticket names={ticket.names}
      location={ticket.location}
      issue={ticket.issue}
      key={index}/>
    )}
    </div>
  )};
  export default TicketList;
