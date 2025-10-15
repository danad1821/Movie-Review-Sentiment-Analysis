let checkReviewBtn = document.getElementById("checkReviewBtn");

checkReviewBtn.addEventListener("click", async () => {
  alert("Checking..");
  let review = document.getElementById("review").value; 
  
  let response = await fetch("http://192.168.1.103:5000/get_sentiment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ review_text: review }), 
  });

  let result = await response.json(); 
  
  // Display the sentiment result
  alert(`Sentiment: ${result.sentiment}`); 
});