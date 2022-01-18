import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export const App = () => {
    return <ChakraProvider>
        <div>Hello World!</div>
    </ChakraProvider>;
};