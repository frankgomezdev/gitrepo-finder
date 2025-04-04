export default function formatJoinDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-us", { month: "short" });
  const year = date.getFullYear();

  return `Joined ${day} ${month} ${year}`;
}
