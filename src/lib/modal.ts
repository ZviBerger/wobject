import { WObject } from "./engine";
import { WORoundedRect } from "./shapes";
import { WOButton, WOInternalButton } from "./buttons";

type Submit = () => {};
export class WOModal extends WORoundedRect {
  modalContent: WObject;
  actionToDo: Submit;
  windowWidth: number;
  windowHeight: number;
  showNow: boolean;
  closeButton: WOInternalButton;
  title: string;

  constructor(
    windowWidth: number,
    windowHeight: number,
    modalWidth: number,
    modalHeight: number,
    borderRadius: number,
    color: string,
    content: WObject,
    actionMethod: Submit
  ) {
    const x = windowWidth / 2 - modalWidth / 2;
    const y = windowHeight / 2 - modalHeight / 2;
    super(x, y, modalWidth, modalHeight, borderRadius, color);
    this.actionToDo = actionMethod;
    this.modalContent = content;
    this.modalContent.adoptPosition(this.position);
    this.windowHeight = windowHeight;
    this.windowWidth = windowWidth;
    this.closeButton = WOButton.add(x + 10, y + 10, 40, 40, "#fff", "×", () => {
      this.hide();
    });
    this.show();
  }

  show() {
    this.showNow = true;
    this.closeButton.setHide(false);
    // this.addElement(this.closeButton);
  }

  hide() {
    this.showNow = false;
    this.closeButton.setHide(true);
    this.clear();
  }

  closeModal(): void {
    this.clear();
  }

  myDisplay(context: CanvasRenderingContext2D) {
    if (!this.showNow) return;
    context.fillStyle = "#000000";
    context.filter = "opacity(0.4)";
    context.fillRect(0, 0, this.windowWidth, this.windowHeight);
    context.filter = "none";
    super.myDisplay(context);
    context.beginPath();
    context.strokeStyle = "#bbbbbd";
    context.moveTo(this.position.x + 10, this.position.y + 60);
    context.lineTo(
      this.position.x + this.size.width - 10,
      this.position.y + 60
    );
    context.stroke();
    this.closeButton.display(context);
    this.modalContent.display(context);
  }
}
