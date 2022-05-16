import { RTable } from "rethinkdb-ts";
import { Message } from "../types";
import { Rethinkdb } from "../utils";

class MessageRepository {
  private table: RTable<Message>;

  constructor() {
    this.table = Rethinkdb.selectTable("Messages");
  }

  async changes() {
    return await this.table.changes().run(await Rethinkdb.getConnection());
  }

  async getAll() {
    return await this.table
      .orderBy("created_at")
      .run(await Rethinkdb.getConnection());
  }

  async create(message: Message) {
    return await this.table
      .insert(message)
      .run(await Rethinkdb.getConnection());
  }
}

export default new MessageRepository();
