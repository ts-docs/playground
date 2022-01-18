import React from "react";



export const Head = (props: React.PropsWithChildren<unknown>) => {
    return <html>
        <head>
            <title>ts-docs playground</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="robots" content="index, follow" />
        </head>

        <body>
            <div id="app">
                {props.children}
            </div>
            <script src="./static/bundle.js"></script>
        </body>
    </html>;
};