/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: ingopro
 * @Date: 2022-04-26 11:31:41
 * @LastEditors: ZYG
 * @LastEditTime: 2022-04-26 13:40:59
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
