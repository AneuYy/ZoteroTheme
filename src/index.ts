import ZoteroTheme from "./ZotreroTheme";

Zotero.ZoteroTheme = new ZoteroTheme();

window.addEventListener(
  "load",
  async function (e) {
    Zotero.ZoteroTheme.events.onInit();
  },
  false
);
