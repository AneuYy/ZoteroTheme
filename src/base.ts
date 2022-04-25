class AddonBase {
  protected _ZoteroTheme: ZoteroTheme;
  constructor(parent: ZoteroTheme) {
    this._ZoteroTheme = parent;
  }
}

class Theme {
  name: string;
  settings: object;
  // Construct a theme from template
  template: string;

  constructor(name: string, settings: object, template: string) {
    this.name = name;
    // Deep copy object
    this.settings = JSON.parse(JSON.stringify(settings));
    this.template = template;
  }

  /*
  Get Template setting
    ----
  Example:
  let temp = Template.load("myName");
  temp.get("border");
  > "#FFFFFF"
  */
  get(settingKey: string): string {
    if (settingKey in this.settings) {
      return this.settings[settingKey];
    }
    return "";
  }

  set(settingKey: string, settingValue: string): void {
    this.settings[settingKey] = settingValue;
  }

  copy(newName: string) {
    return new Theme(newName, this.settings, this.template);
  }

  compile() {}

  /*
  Load Template from prefs
    ----
  Example:
  let temp = Template.load("myName");

  Example of reusing themes:
  let themes = JSON.parse(Zotero.Prefs.get("ZoteroTheme.themes"));
  let temp1 = Template.load("myName1", themes);
  let temp2 = Template.load("myName2", themes);
  */
  static load(
    name: string,
    themes: object = undefined,
    prefKey: string = "ZoteroTheme.themes"
  ): Theme {
    if (typeof themes === "undefined") {
      themes = JSON.parse(Zotero.Prefs.get(prefKey));
    }

    if (!(name in themes)) {
      return new Theme(name, {}, "");
    }
    return new Theme(name, themes[name], "");
  }

  /*
  Save Template to prefs
  ----
  Example:
  let temp = new Template("myName", {}, "");
  temp.save();
  */
  save(prefKey: string = "ZoteroTheme.themes"): void {
    let themes = JSON.parse(Zotero.Prefs.get(prefKey));
    themes[this.name] = this.settings;
    Zotero.Prefs.set(prefKey, JSON.stringify(themes));
  }
}

export { AddonBase, Theme };
