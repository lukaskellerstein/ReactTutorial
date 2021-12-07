export class Logger {
  componentName: string;
  color: string;
  constructor(componentName: string, color: string) {
    this.componentName = componentName;
    this.color = color;
  }

  log(...messages: any) {
    console.log(...messages);
  }

  logComponent(...message: any) {
    const style = [
      "color: #000000",
      `background-color: ${this.color}`,
      "padding: 2px 4px",
      "border-radius: 2px",
    ].join(";");
    // console.group(this.componentName);
    console.log("%c%s%o", style, `${this.componentName} `, ...message);
    // console.groupEnd();
  }

  logEffect(effectName: string, ...message: any) {
    const style = [
      "color: #000000",
      `background-color: ${this.color}`,
      "padding: 2px 4px",
      "border-radius: 2px",
    ].join(";");
    console.log(
      "%c%s%o",
      style,
      `${this.componentName} - Effect: ${effectName}`,
      ...message
    );
  }
}
