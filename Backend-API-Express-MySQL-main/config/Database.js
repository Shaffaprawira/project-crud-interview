import { Sequelize } from "sequelize";
import moment from "moment-timezone";

// Set timezone for Jakarta
// const jakarta_timezone = new Date().toLocaleString("en-US", {
//   timeZone: "Asia/Jakarta",
// });

// const jakarta_timezone = new Date();
const jakartaTime = moment.tz("Asia/Jakarta");

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
