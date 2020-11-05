import React ,{useState , useEffect} from "react"
import Editor from "./Editor"
import useLocalStorage from "../hooks/useLocalStorage"





function App() {
const [html,setHtml] = useLocalStorage('html',' ')
const [css,setCss] = useLocalStorage('css',' ')
const [js,setJs] = useLocalStorage('js',' ')
const [srcDoc,setSrcDoc]=useState(' ')


useEffect(()=>{
const timeOut = setTimeout(()=>{ 
    setSrcDoc(`
      <html>
  <body>
      ${html}
  </body>
  <style>${css}</style>
  <script>${js}</script>
</html>`
)

},250
)
return ()=> clearTimeout(timeOut)
},[html,css,js])









  return (
    <>
    
    <div className="pane top-pane">
    <Editor language="xml" 
            displayName="HTML"
            value ={html}
            onChange={setHtml}
      />
    <Editor
            language="css" 
            displayName="CSS"
            value ={css}
            onChange={setCss}
    />
    <Editor
     language="javascript" 
     displayName="JAVASCRIPT"
     value ={js}
     onChange={setJs}
    />
    </div>


    <div className="pane ">
      <iframe className="screen"
      srcDoc={srcDoc}
      title= "Output" 
      sandbox="allow-scripts"
      frameBorder="0"
      width="100%"
      height="100%"

      />
    </div>
    </>
  );
}

export default App;
