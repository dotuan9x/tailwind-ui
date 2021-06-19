import React from 'react';
import hljs from 'highlight.js';
import css from 'highlight.js/lib/languages/css';

hljs.registerLanguage('css', css);

export class Highlighter extends React.PureComponent {
    componentDidMount() {
        hljs.highlightBlock(this.node);
    }

    render() {
        let {children} = this.props;

        return (
            <div ref={(node) => this.node = node}>
                {children}
            </div>
        );
    }
}

export default Highlighter;
