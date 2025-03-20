import { toast } from "react-hot-toast";

const handleApiError = (error) => {
  let message = "Something went wrong. Please try again.";

  if (error.response) {
    message = error.response.data?.message || message;
  } else if (error.request) {
    message = "No response from server. Please check your internet connection.";
  } else {
    message = error.message;
  }

  toast.error(message);
  console.error("API Error: ", message);
  return message;
};

export default handleApiError;
