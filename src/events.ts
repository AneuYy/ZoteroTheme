import { AddonBase } from "./base";

class AddonEvents extends AddonBase {
  constructor(parent: Theme) {
    super(parent);
  }

  public async onInit() {
    Zotero.debug("ZoteroTheme: init called");

    this.resetState();
  }

  private resetState(): void {
    // Reset preferrence state.
  }
}

export default AddonEvents;
