'use strict';

import React from 'react';
import { render } from 'react-dom';
import RootView from '../imports/views/RootView';

const renderMain = () => {
    render(<RootView />, document.getElementById('react-root'));
};

Meteor.startup(() => {
    if (!window.cordova) {
        renderMain();
    } else {
        document.addEventListener('deviceready', renderMain, false);
    }
});
