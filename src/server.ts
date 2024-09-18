import {initializeServer} from "./app";

const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || '';

initializeServer(port, dbUrl);