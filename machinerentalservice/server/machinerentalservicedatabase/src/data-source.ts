import "reflect-metadata"
import { DataSource } from "typeorm"
import { Machine } from "./entity/Machine"
import { Partner } from "./entity/Partner"
import { Rental } from "./entity/Rental"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "machinerentalservice_database",
    synchronize: true,
    logging: true,
    entities: [Machine, Partner, Rental],
    migrations: [],
    subscribers: [],
})
