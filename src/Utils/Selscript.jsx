import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';

const CodeSnippet = ({ code, language }) => {
    const codeRef = useRef(null);

    useEffect(() => {
        Prism.highlightElement(codeRef.current);
    }, []);

    return (
        <pre>
            <code ref={codeRef} className={`language-${language}`}>
                print(Hello world)
            </code>
        </pre>
    );
};

export default CodeSnippet;