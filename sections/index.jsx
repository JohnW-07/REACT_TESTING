//Create root
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

const root = createRoot(document.getElementById("root"))


//IMPERATIVE
const headerElem = document.createElement("h1")

headerElem.textContent = "asdf"
headerElem.classList = "header"

document.getElementById("root").appendChild(headerElem)
// END IMPERATIVE



//Render markup to root




root.render(

   <MainConent /> //self closing component

)


function MainContent(){
    return (
        <div className="mainContet">
            <h1>asdfasdf</h1>
        </div>
    )
}