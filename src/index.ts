import Theme from "./Theme";

Zotero.ZoteroTheme = new Theme();

window.addEventListener(
  "load",
  async function (e) {
    Zotero.ZoteroTheme.events.onInit();
  },
  false
);
