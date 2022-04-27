/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: ShareStuff
 * @Date: 2022-04-26 11:31:41
 * @LastEditors: isharestuff
 * @LastEditTime: 2022-04-27 10:36:37
 */
import ZoteroTheme from "./ZotreroTheme";

Zotero.ZoteroTheme = new ZoteroTheme();

window.addEventListener(
  "load",
  async function (e) {
    Zotero.ZoteroTheme.events.onInit();
  },
  false
);
