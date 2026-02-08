import { createRoot } from 'react-dom/client'
import { Fragment } from 'react'

const root = createRoot(document.getElementById('root'))



root.render(
    <>
        <img src="react.svg" width="40px" alt="react logo"/>
        <MainHeader />
        <MainList />

        <footer>@2026 John Wu Development. All Rights Reserved.</footer>

    </>
)

function MainHeader(){
    return(
        <main>
            <header>
                <img src="react-logo.png" width="40px" alt="Vite Logo" />
            </header>
            <nav>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <h1>im excited something</h1>
        </main>

    )
}

function MainList(){
    return(
        <ol>
            <li>was first released...</li>
            <li>Was originally...</li>
            <li>vggvvvv</li>
        </ol>
    )
}

export default App
