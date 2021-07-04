// Libraries
import React, {useState, useEffect} from 'react';
import ReactDOMServer from 'react-dom/server';
import classNames from 'classnames';

// Components
import Highlighter from 'Modules/components/highlighter';

import {formatHtml} from 'Src/utils';

const PREVIEW_MODE = 1;
const CODE_MODE = 2;

interface PreviewProps {
    title?: string,
    children?: React.ReactChildren | React.ReactElement,
    previewClassName?: string
}

const Preview: React.FC<PreviewProps> = ({
    title = 'Title',
    previewClassName = 'bg-white',
    ...props
}) => {
    const [mode, setMode] = useState(PREVIEW_MODE);
    const [code, setCode] = useState('');

    useEffect(() => {
        setCode(formatHtml(ReactDOMServer.renderToStaticMarkup(props.children)));
    }, []);

    const onClickPreview = () => {
        setMode(PREVIEW_MODE);
    };

    const onClickCode = () => {
        setMode(CODE_MODE);
    };

    const onClickCopyCodeToClipboard = () => {
        const createCodeTextarea = document.createElement('textarea');

        createCodeTextarea.innerHTML = code;

        document.body.appendChild(createCodeTextarea);

        createCodeTextarea.select();

        document.execCommand('copy');

        createCodeTextarea.remove();
    };

    return (
        <div className="max-w-screen-lg">
            <header className="flex flex-wrap md:flex-nowrap justify-between mb-3 py-1.5 whitespace-nowrap">
                <div className="min-w-0 flex items-center">
                    <h2 className="font-medium text-gray-900 truncate">
                        <a className="mr-1 antialiased">{title}</a>
                    </h2>
                </div>
                <div className="flex items-end">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row bg-gray-100 rounded">
                            <button onClick={onClickPreview} className="flex flex-row justify-between border border-gray-300 py-1 px-2 rounded hover:bg-gray-200 bg-white">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </span>
                                <span>Preview</span>
                            </button>
                            <button onClick={onClickCode} className="flex flex-row justify-between rounded-r py-1 px-2 hover:bg-gray-200">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </span>
                                <span>Code</span>
                            </button>
                        </div>
                        <button disabled={mode == PREVIEW_MODE} onClick={onClickCopyCodeToClipboard} className="ml-2 hover:bg-gray-100 rounded disabled:opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            {
                mode == PREVIEW_MODE ? (
                    <div className={classNames(previewClassName, 'w-full ring-1 ring-gray-900 ring-opacity-5 px-6 py-20 rounded-lg border border-gray-100 content-center')}>
                        {props.children}
                    </div>
                ) : (
                    <div className="w-full rounded-lg border border-gray-100 p-0.5 pb-0" style={{backgroundColor: '#282c34'}}>
                        <Highlighter>{code}</Highlighter>
                    </div>
                )
            }
        </div>
    );
};

export default Preview;
