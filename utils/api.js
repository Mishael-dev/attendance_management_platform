import { SERVER_URL } from "@/env";

export const sendClassTemplate = (postData) => {
  console.log(postData);
  const apiUrl = SERVER_URL + "/send_class_template";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };

  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
