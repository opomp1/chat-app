export function formatMessageTime(messageTime) {
  const now = new Date();
  const messageDate = new Date(messageTime);

  // Set the time to midnight for both current date and message date
  const startOfToday = new Date(now.setHours(0, 0, 0, 0));

  // Check if the message is from within the past 7 days
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(now.getDate() - 7);

  // If the message is from today
  if (messageDate >= startOfToday) {
    return messageDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  // If the message is from within the last week
  if (messageDate >= oneWeekAgo) {
    return messageDate.toLocaleDateString([], {
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  // If the message is older than a week
  return messageDate.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
