import AddonEvents from "./events";
import AddonViews from "./views";
import AddonPrefs from "./prefs";

class Theme {
  public events: AddonEvents;
  public view: AddonViews;
  public prefs: AddonPrefs;

  constructor() {
    this.events = new AddonEvents(this);
    this.view = new AddonViews(this);
    this.prefs = new AddonPrefs(this);
  }
}

export default Theme;
