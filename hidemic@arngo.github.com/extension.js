const Main = imports.ui.main;

let inputIndicator = Main.panel.statusArea.quickSettings._volume._inputIndicator;

function init() {}

function enable() {
    Main.panel.statusArea.quickSettings._volume.remove_child(inputIndicator);
}

function disable() {
    Main.panel.statusArea.quickSettings._volume.add_child(inputIndicator);
    Main.panel.statusArea.quickSettings._volume._syncIndicatorsVisible();
}

