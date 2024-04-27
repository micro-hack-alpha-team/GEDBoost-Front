import React, { useEffect, useRef } from 'react';
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