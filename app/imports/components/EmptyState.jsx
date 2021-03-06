'use strict';

import React from 'react';

import Content from '/imports/components/Content';
import Paragraph from '/imports/components/Paragraph';

const EmptyState = class EmptyState extends React.Component {
    render() {
        const {type} = this.props;

        return (
            <div className="pa-EmptyState">
                <Content>
                    {type === 'notifications' &&
                        <Content.Text>
                            <img src="images/empty_states/notifications.png" />
                            <Paragraph>No notifications yet</Paragraph>
                        </Content.Text>
                    }

                    {type === 'chats' &&
                        <Content.Text>
                            <img src="images/empty_states/chat.png" />
                            <Paragraph>Search for a user to start a chat</Paragraph>
                        </Content.Text>
                    }

                    {type === 'chats-search-results' &&
                        <Content.Text>
                            <img src="images/empty_states/chat.png" />
                            <Paragraph>No users found, please try another name</Paragraph>
                        </Content.Text>
                    }

                    {type === 'partups' &&
                        <Content.Text>
                            <img src="images/empty_states/part-ups.png" />
                            <Paragraph>No part-ups yet</Paragraph>
                        </Content.Text>
                    }

                    {type === 'tribes' &&
                        <Content.Text>
                            <img src="images/empty_states/tribes.png" />
                            <Paragraph>No tribes yet</Paragraph>
                        </Content.Text>
                    }
                </Content>
            </div>
        );
    }
};

EmptyState.propTypes = {
    type: React.PropTypes.oneOf(['notifications', 'partups', 'tribes', 'chats', 'chats-search-results'])
};

export default EmptyState;
