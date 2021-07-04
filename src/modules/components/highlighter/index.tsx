// @ts-nocheck
import React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

export interface IHighlightProps {
    innerHTML?: string,
    className?: string,
    element?: React.ReactElement,
    children?: string
}

class Highlight extends React.Component<IHighlightProps> {
    private el: any;

    constructor(props: IHighlightProps) {
        super(props);
        this.setEl = this.setEl.bind(this);
    }

    componentDidMount(): void {
        this.highlightCode();
    }

    componentDidUpdate(): void {
        this.highlightCode();
    }

    highlightCode(): void {
        const nodes = this.el.querySelectorAll('pre code');

        for (let i = 0; i < nodes.length; i++) {
            hljs.highlightBlock(nodes[i]);
        }
    }

    setEl(el): void {
        this.el = el;
    }

    render() {
        const {children, className, element: Element, innerHTML} = this.props;
        const props = {ref: this.setEl, className};

        if (innerHTML) {
            props.dangerouslySetInnerHTML = {__html: children};

            if (Element) {
                return <Element {...props} />;
            }

            return <div {...props} />;
        }

        if (Element) {
            return <Element {...props}>{children}</Element>;
        }

        return <pre className="language-html" ref={this.setEl}><code className={className}>{children}</code></pre>;
    }
}

export default Highlight;
