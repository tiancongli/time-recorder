import { getShowTime } from "./utils";

export class BlockModel {
  constructor(name, category, acc=0, start=null, stop=true) {
    this.name = name;
    this.category = category;
    this.acc = acc;
    this.start = start;
    this.stop = stop;
  }
}