document.getElementById("predictBtn").addEventListener("click", () => {
    const disease = document.getElementById("disease").value;
    const inputData = document.getElementById("inputData").value;
  
    if (!inputData.trim()) {
      alert("Please enter the input data.");
      return;
    }
  
    // Backend API URL mapping
    const apiUrls = {
      diabetes: "/predict/diabetes/",
      heart: "/predict/heart/",
      parkinsons: "/predict/parkinsons/",
    };
  
    const apiUrl = apiUrls[disease];
  
    // Make a POST request to the backend API
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input_data: inputData }),
    })
      .then((response) => response.json())
      .then((data) => {
        const resultDiv = document.getElementById("result");
        resultDiv.style.display = "block";
        resultDiv.textContent = `Prediction: ${data.prediction}`;
      })
      .catch((error) => {
        alert("An error occurred while making the prediction.");
        console.error(error);
      });
  });
  