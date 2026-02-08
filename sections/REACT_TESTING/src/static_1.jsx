import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById("root"))


root.render(
    <main>
    <Head />
        <img src="logo.png"/>
    </main>
)

function Head(){
   return(
        <h1>asdf</h1>
   )
}