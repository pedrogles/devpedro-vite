import './arvore.css'
import Photo from '../../../../img/photo.png'

function Arvore(){
    return (
        <div id="container-body">
            <main id="container-arvore">
                <div id="container-perfil">
                    <img 
                    src={Photo} 
                    alt="Foto Perfil Pedro"
                    className="photo" />
                    <h1 className="nome-insta">Pedro Gabriel</h1>
                    <p className="nome-insta">@pedrogles_</p>
                </div>
                <div id="container-link">
                    <ul>
                        <li className="arvore-links">Whatsapp</li>
                        <li className="arvore-links">Portfólio</li>
                        <li className="arvore-links">Linkedln</li>
                        <li className="arvore-links">GitHub</li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default Arvore