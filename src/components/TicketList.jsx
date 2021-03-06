import React from "react";
import Ticket from "./Ticket";
import PropTypes from 'prop-types';

    var headerStyles = {
      backgroundColor: 'aqua',
      fontFamily: 'sans-serif',
      paddingTop: '50px'

    };



function TicketList(props){
  console.log(props.ticketList);
  return(
    <div style={headerStyles}>
    <hr/>
    {props.ticketList.map((ticket,index) =>
      <Ticket names={ticket.names}
      location={ticket.location}
      issue={ticket.issue}
      key={ticket.id}/>
    )}
    </div>
  );
}

  TicketList.propTypes = {
  ticketList: PropTypes.array
};
  export default TicketList;
