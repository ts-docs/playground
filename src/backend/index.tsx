import path from "path";
import React from "react";
import Fastify from "fastify";
import fastifyStatic from "fastify-static";
import { renderToString } from "react-dom/server";
import { App } from "../shared";
import { Head } from "../shared/head";


export default () => {
    const app = Fastify({
        logger: true
    });

    console.log(path.join(__dirname, "../../dist/frontend/public"));
    app.register(fastifyStatic, {
        root: path.join(__dirname, "../../dist/frontend/public"),
        prefix: "/static/"
    });

    app.get("/", (_req, res) => {
        const html = renderToString(<Head>
            <App />
        </Head>);
        
        res.header("Content-Type", "text/html");
        res.send(html);
    });

    app.listen(4000);
};