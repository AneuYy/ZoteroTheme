import { AddonBase } from "./base";

class AddonPrefs extends AddonBase {
  private _document: Document;
  constructor(parent: Theme) {
    super(parent);
  }
  initPreferences(_document: Document) {
    this._document = _document;
    Zotero.debug("ZoteroTheme: Initialize preferences.");
  }
}

export default AddonPrefs;
