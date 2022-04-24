class AddonBase {
  protected _Theme: Theme;
  constructor(parent: Theme) {
    this._Theme = parent;
  }
}

export { AddonBase };
