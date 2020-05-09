import * as React from "react";
import Head from 'next/head';
import withForceLogin from "src/feature/auth/withForceLogin";
import Link from "next/link";

function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>Index</div>
            <main>
                <Link href="/play">
                    <a>Play</a>
                </Link>
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by
                    {' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className="logo"/>
                </a>
            </footer>

            {/*<style jsx>*/}
            {/*</style>*/}

            {/*<style jsx global>*/}
            {/*</style>*/}
        </div>
    );
}

export default Home;
