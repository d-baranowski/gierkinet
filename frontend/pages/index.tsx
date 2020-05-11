import * as React from "react";
import Head from 'next/head';
import MenuTile from "src/components/MenuTile";
import TileMenu from "src/components/TileMenu";


function Home() {
    return (
        <div className="container">
            <Head>
                <title>Devtales Games</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <TileMenu>
                    <MenuTile src="/chess.jpg" to="/play" title="Chess"/>
                </TileMenu>
            </main>

            <footer>
               {/*TODO */}
            </footer>
        </div>
    );
}

export default Home;
