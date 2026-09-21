// نسخه‌ی ساده‌شده‌ی CSS3DRenderer.
// کتابخانه‌ی MindAR این فایل را فقط برای قرار دادن عنصر HTML روی صحنه می‌خواهد که در این پروژه استفاده نمی‌شود.
export class CSS3DObject {
  constructor(element) { this.element = element || document.createElement('div'); }
}
export class CSS3DSprite extends CSS3DObject {}
export class CSS3DRenderer {
  constructor() {
    this.domElement = document.createElement('div');
    this.domElement.style.overflow = 'hidden';
    this._w = 0; this._h = 0;
  }
  getSize() { return { width: this._w, height: this._h }; }
  setSize(w, h) {
    this._w = w; this._h = h;
    this.domElement.style.width = w + 'px';
    this.domElement.style.height = h + 'px';
  }
  render() {}
}
