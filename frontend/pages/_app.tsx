import {Provider} from 'react-redux'
import App from 'next/app'
import withRedux, {ReduxWrapperAppProps} from 'next-redux-wrapper';
import {ThemeProvider} from 'styled-components'
import * as React from "react";
import {RootState} from "src/store/rootReducer";
import {makeStore} from "src/store/store";
import theme from "src/theme";

class AppOverride extends App<ReduxWrapperAppProps<RootState>> {
    render() {
        const {Component, pageProps, router, store} = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Component router={router} {...pageProps} />
                </Provider>
            </ThemeProvider>
        )
    }
}

export default withRedux(makeStore, {debug: true})(AppOverride)
