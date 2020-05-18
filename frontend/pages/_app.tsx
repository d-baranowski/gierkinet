import {Provider} from 'react-redux'
import App from 'next/app'
import withRedux, {ReduxWrapperAppProps} from 'next-redux-wrapper';
import * as React from "react";
import {RootState} from "src/store/rootReducer";
import {makeStore} from "src/store/store";
import Navbar from "src/feature/navigation/Navbar";
import theme from "src/style/theme";
import {ThemeProvider} from "styled-components";


class AppOverride extends App<ReduxWrapperAppProps<RootState>> {

    componentDidMount(): void {
        const isProd = process.env.NODE_ENV === 'production';

        if (isProd) {
            return;
        }

        if (typeof window != "undefined") {
            // @ts-ignore
            window.DEV_ONLY_STORE = this.props.store;
        }
    }

    render() {
        const {Component, pageProps, router, store} = this.props;

        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Navbar/>
                    <Component router={router} {...pageProps} />
                </ThemeProvider>
            </Provider>
        )
    }
}

export default withRedux(makeStore, {debug: true})(AppOverride)
