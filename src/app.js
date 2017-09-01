import React, { Component } from 'react';
import { Root, StyleProvider } from 'native-base';
import getTheme from './themes/components';
import galia from './themes/variables/galia';

import Router from './router';

class App extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(galia)}>
                <Root>
                    <Router />
                </Root>
            </StyleProvider>
        );
    }
}

export default App;
