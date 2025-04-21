import Knex from "knex";
import { client, connection, pool, migrations } from "../../knexfile.js";

const config = { client, connection, pool, migrations };
const knex = Knex(config);

export default knex;
