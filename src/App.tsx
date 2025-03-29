import { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

// default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text

const defaultMarkdown = `# Header 1
## Header 2
[Link to Google](https://www.google.com)

\`Inline code\`
\`\`\`javascript
console.log("Code block");
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://cdn.worldvectorlogo.com/logos/react-2.svg)
**Bolded text**
`; 

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div>
        <h1 style={{textAlign: "center"}}>Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
          <div id="preview">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
