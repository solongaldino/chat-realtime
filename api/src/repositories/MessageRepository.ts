import { RTable } from "rethinkdb-ts";
import { Message } from "../types";
import { Rethinkdb } from "../utils";

class MessageRepository {
  private table: RTable;

  constructor() {
    this.table = Rethinkdb.selectTable("Messages");
  }

  async changes(): Promise<Message[]> {
    return await this.table.run();
  }

  async create(message: Message) {
    return await this.table
      .insert(message)
      .run(await Rethinkdb.getConnection());
  }
}

export default new MessageRepository();
