import { Sequelize } from "sequelize";
import moment from "moment-timezone";

// Set timezone for Jakarta
// const jakarta_timezone = new Date().toLocaleString("en-US", {
//   timeZone: "Asia/Jakarta",
// });

// const jakarta_timezone = new Date();

// function formatDateTime(dateTimeString) {
//   const date = new Date(dateTimeString);
//   const dateFormat = date.toDateString(); // Convert date to a more readable format
//   const timeFormat = date.toLocaleTimeString(); // Convert time to a more readable format
//   return `${dateFormat}, ${timeFormat}`;
// }

function convertDateTimeFormat(inputDateTime) {
  const date = new Date(inputDateTime);
  if (isNaN(date)) {
    return null; // Invalid date
  }

  // Add 7 hours to the date
  date.setHours(date.getHours() + 7);

  // Convert the date to ISO format (e.g., "2023-10-20T12:03:45.000Z")
  const isoString = date.toISOString();
  return isoString;
}

const jakartaTime = moment.tz("Asia/Jakarta");
const formattedDateTime = convertDateTimeFormat(jakartaTime);
console.log(jakartaTime)

const db = new Sequelize("crud_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  // timezone: "+07:00",
  // timezone: jakarta_timezone.toLocaleString(),
  // dialectOptions: {
  //   timezone: "local",
  // },
});

export default db;
