import { WOVerticalContainer, WOTextBox } from "/out/index.js";

export class GameInfoBar extends WOVerticalContainer {
  constructor(x, y, w, h, title) {
    super(x, y, w, h);
    this.title = new WOTextBox(0, 0, 50, 50, "#fff", title);
    this.level = new WOTextBox(0, 0, 50, 50, "#fff");
    this.score = new WOTextBox(0, 0, 50, 50, "#fff");
    this.life = new WOTextBox(0, 0, 50, 50, "#fff");
    this.shot = new WOTextBox(0, 0, 50, 50, "#fff");
    this.addElement(this.title);
    this.addElement(this.level);
    this.addElement(this.score);
    this.addElement(this.life);
    this.addElement(this.shot);
  }
  myDisplay(context) {}
  setText(level, score, life, shot) {
    this.level.setText("🚀 " + level);
    this.score.setText("⭐ " + score);
    this.life.setText("💓 " + life);
    this.shot.setText("💥 " + shot);
  }
}
