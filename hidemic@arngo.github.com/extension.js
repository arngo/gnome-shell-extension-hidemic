const St = imports.gi.St;
const Main = imports.ui.main;

let oldInputIndicator = Main.panel.statusArea.aggregateMenu._volume._inputIndicator;

function init() {}

function enable() {
    Main.panel.statusArea.aggregateMenu._volume._inputIndicator.hide()
    Main.panel.statusArea.aggregateMenu._volume._inputIndicator = new St.BoxLayout();
}

function disable() {
    Main.panel.statusArea.aggregateMenu._volume._inputIndicator.destroy()
    Main.panel.statusArea.aggregateMenu._volume._inputIndicator = oldInputIndicator;
    Main.panel.statusArea.aggregateMenu._volume._inputIndicator.show();
}
