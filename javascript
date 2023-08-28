document.addEventListener('DOMContentLoaded', function () {
  const bidButton = document.getElementById('bidButton');
  
  bidButton.addEventListener('click', function () {
    const currentBid = 100; // Sample starting bid
    const newBid = prompt('Enter your bid amount:');
    
    if (newBid !== null && !isNaN(newBid)) {
      const parsedBid = parseFloat(newBid);
      if (parsedBid > currentBid) {
        alert(`Bid of $${parsedBid} placed successfully!`);
        // Here you might make an API request to update the bid on the server.
      } else {
        alert('Bid must be higher than the current bid.');
      }
    } else {
      alert('Invalid bid amount.');
    }
  });
});
