import "./App.css";
import ReactMarkdown from "react-markdown"
import React, {useState} from "react";


function App() {
    const [markdown, setMarkdown] = useState("# Markdown Preview")
    return (
        <main className="markdown">
            <section className="markdown">
            <textarea className="input" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
            <article className="result">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </article>
            </section>
            
        </main>

    )
}


export default App;
