let checkReviewBtn = document.getElementById("checkReviewBtn");
let resultPopup = document.getElementById("resultPopup");
let sentimentResultSpan = document.getElementById("sentimentResult");
let timeTakenSpan = document.getElementById("timeTaken");

function showPopup(sentiment, time) {
  sentimentResultSpan.textContent = sentiment.toUpperCase();
  timeTakenSpan.textContent = time;

  sentimentResultSpan.className =
    sentiment === "positive"
      ? "font-bold text-green-600"
      : "font-bold text-red-600";

  resultPopup.classList.remove("hidden");
}

function closePopup() {
  resultPopup.classList.add("hidden");
}

checkReviewBtn.addEventListener("click", async () => {
  let review = document.getElementById("review").value;
  if (!review) {
    alert("Please enter a review.");
    return;
  }

  const startTime = performance.now(); // Start timer

  // Optional: Disable button and show loading state
  checkReviewBtn.textContent = "Checking...";
  checkReviewBtn.disabled = true;

  try {
    let response = await fetch("http://192.168.1.103:5000/get_sentiment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review_text: review }),
    });

    // Handle HTTP errors (e.g., 404, 500)
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    let result = await response.json();

    const endTime = performance.now(); // End timer
    const timeTaken = Math.round(endTime - startTime); // Calculate time in ms
    showPopup(result.sentiment, timeTaken);
  } catch (error) {
    alert(
      `Failed to fetch sentiment: ${error.message}. Check the server logs (500 error) and CORS policy.`
    );
  } finally {
    // Re-enable button
    checkReviewBtn.textContent = "Check";
    checkReviewBtn.disabled = false;
  }
});
