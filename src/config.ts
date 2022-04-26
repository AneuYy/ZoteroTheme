import { AddonBase, Theme } from "./base";

class AddonConfig extends AddonBase {
  defaultThemes: Theme[];
  templates: object;
  themeLocale: object;
  constructor(parent: ZoteroTheme) {
    super(parent);
    this.templates = {
      win: "",
    };
    this.defaultThemes = [
      new Theme(
        "dark",
        {
          bgBlank: "#ffffff",
          bgContainer: "#ffffff",
          border: "#ffffff",
          bgItemDefault: "#ffffff",
          bgItemHover: "#ffffff",
          bgItemSelected: "#ffffff",
        },
        "win"
      ),
      new Theme(
        "default",
        {
          bgBlank: "#ffffff",
          bgContainer: "#ffffff",
          border: "#ffffff",
          bgItemDefault: "#ffffff",
          bgItemHover: "#ffffff",
          bgItemSelected: "#ffffff",
        },
        ""
      ),
    ];
    this.themeLocale = {
      en: {
        bgBlank: "Blank Background",
        bgContainer: "Container Background",
        border: "Border",
        bgItemDefault: "Item Default",
        bgItemHover: "Item Hover",
        bgItemSelected: "Item Selected",
      },
      zh: {
        bgBlank: "空背景",
        bgContainer: "容器背景",
        border: "描边",
        bgItemDefault: "默认元素",
        bgItemHover: "聚焦元素",
        bgItemSelected: "选择元素",
      },
    };
  }

  getCurrentTheme(): Theme {
    let currentTheme = Zotero.Prefs.get("ZoteroTheme.currentTheme");
    return Theme.load(currentTheme);
  }

  deleteTheme(name: string) {
    let themes: object = JSON.parse(Zotero.Prefs.get("ZoteroTheme.themes"));
    delete themes[name];
    Zotero.Prefs.set("ZoteroTheme.themes", JSON.stringify(themes));
    // Avoid empty
    if (Object.keys(themes).length == 0) {
      this.defaultThemes[0].save();
    }
  }

  getAllThemes(): Theme[] {
    let themes: object = JSON.parse(Zotero.Prefs.get("ZoteroTheme.themes"));
    let _themes: Theme[];
    for (let name in themes) {
      _themes.push(Theme.load(name, themes));
    }
    return _themes;
  }

  getThemeNames(): string[] {
    let themes: object = JSON.parse(Zotero.Prefs.get("ZoteroTheme.themes"));
    return Object.keys(themes);
  }

  getThemeSettingLocale(settingName: string): string {
    let language = Services.locale.getRequestedLocale().split("-")[0];
    if (!(language in this.themeLocale)) {
      language = "en";
    }
    let localeName = this.themeLocale[language][settingName];
    if (!localeName) {
      localeName = settingName;
    }
    return localeName;
  }

  isColor(settingValue: string): boolean {
    // 3 or 6 digits from 0-F, start with "#"
    return /^#([0-9a-f]{6}|[0-9a-f]{3})$/i.test(settingValue);
  }
}

export default AddonConfig;
