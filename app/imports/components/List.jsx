'use strict';

import React from 'react';
import c from 'classnames';

const List = class List extends React.Component {
    render() {
        return (
            <ul className={c('pa-List', {
                'pa-List--buttons': this.props.buttons,
                'pa-List--notifications': this.props.notifications
            })}>
                {this.props.children}
            </ul>
        );
    }
};

export default List;
