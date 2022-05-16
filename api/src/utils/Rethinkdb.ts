import { Connection, r } from "rethinkdb-ts";

class Rethinkdb {
  private dbName: string;
  private dbHost: string;
  private dbPort: number;
  public tableName: string;

  constructor() {
    this.dbName = "chat";
    this.dbHost = "172.22.0.2";
    this.dbPort = 28015;
    this.tableName = "Messages";
  }

  selectTable(tableName: string) {
    const db = r.db(this.dbName);
    return db.table(tableName);
  }

  async getConnection() {
    try {
      return await r.connect({ host: this.dbHost, port: this.dbPort });
    } catch (ex) {
      throw ex;
    }
  }

  async init() {
    try {
      const connection = await this.getConnection();
      const db = await r.dbList().contains(this.dbName).run(connection);
      if (!db) {
        await r.dbCreate(this.dbName).run(connection);
        const newDb = r.db(this.dbName);
        console.log("Database created");
        await newDb.tableCreate(this.tableName).run(connection);
        console.log(`${this.tableName} table created successfully`);
      }
    } catch (ex) {
      throw ex;
    }
  }
}

export default new Rethinkdb();
