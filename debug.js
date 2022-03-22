/* debug.js */

export default class DebugLogging {
  constructor (...args) {
    // Default values for cases where fewer than two arguments are provided
    this._flag = true;
    this._label = 'debug';

    // The constructor may be called with zero, one or two arguments. If two
    // arguments, they can be in any order: one is assumed to be the boolean
    // value for '_flag' and the other one the string value for '_label'.
    for (const [i, arg] of args.entries()) {
      if (i < 2) {
        switch (typeof arg) {
          case 'boolean':
            this._flag = arg;
            break;
          case 'string':
            this._label = arg;
            break;
        }
      }
    }
  }

  get flag () { return this._flag; }

  set flag (value) {
    if (typeof value === 'boolean') {
      this._flag = value;
    }
  }

  set label (value) {
    if (typeof value === 'string') {
      this._label = value;
    }
  }

  log (message, spaceAbove) {
    const newline = spaceAbove ? '\n' : '';
    console.log(`${newline}[${this._label}] ${message}`);
  }

  tag (elem, spaceAbove) {
    if (elem && elem.tagName) {
      this.log(`[${elem.tagName}]: ${elem.textContent.trim().substring(0, 20).trim()}`, spaceAbove);
    }
  }

  separator (spaceAbove) {
    this.log('-----------------------------', spaceAbove);
  }
}
