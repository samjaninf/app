'use strict';

// Use `TouchstoneApp.get()` in your code to get a reference to the touchstone app instance.
// You'll need it to programmatically transition to another page.
// `TouchstoneApp.set()` is being called in RootView.jsx where the touchstone app is being created.

let app;

export default {
    get: () => {
        return app;
    },

    set: (_app) => {
        app = _app;
    }
};
