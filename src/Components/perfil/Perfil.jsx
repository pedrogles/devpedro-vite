import Eu from '../../img/eu.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './perfil.css'
import pdf from "../../pdf/DevFrontEnd-PedroGabriel.pdf"

function Perfil() {
    return (
        <div id="first-container">
            <div className='s-down'>
                <a href="#second-container"><KeyboardArrowDownIcon/></a>
            </div>
            <div id="second-container">
                <div className="inicio">
                    <img id="foto" src={Eu}/>
                    <div id="pedro-dev">
                        <h2>Pedro Gabriel Lima e Silva</h2>
                        <h1>Desenvolvedor Web</h1>
                    </div>
                </div>
                <div className="resumo">
                    <h3>Resumo Pessoal</h3>
                    <p>Desenvolvedor Front-end com ótimas habilidades comunicativas, visão empreendedora, mente bastante criativa além de conhecimentos sólidos em produção gráfica digital.</p>
                </div>
                <div className="experiencia">
                    <h3>Experiência Profissional</h3>
                    <h4>Estágio Suporte Técnico</h4>
                    <ul>
                        <li>Suporte ao Usuário</li>
                        <li>Solução de problemas</li>
                        <li>Sanar dúvidas</li>
                    </ul>
                </div>
                <div className="hab">
                    <h3>Habilidades</h3>
                    <ul id="grid">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Git</li>
                        <li>Github</li>
                    </ul>
                </div>
                <div className="formacao">
                    <h3>Formação Académica</h3>
                    <dl>
                        <dt>UNIESP - Centro Universitário.</dt>
                        <dd>Sistemas para Internet (2º Período).</dd>
                    </dl>
                </div>
                <div className="curso">
                    <h3>Cursos de Aperfeiçoamento</h3>
                    <ul>
                        <li>Programação Completo para Iniciantes de A a Z : Dos fundamentos até programação em Python;</li>
                        <li>Aperfeiçoamento em Produção GráficaDigital;</li>
                        <li>BOOTCAMP – Empreendedorismo em ação;</li>
                    </ul>
                </div>
                <div className="idiomas">
                    <h3>Idiomas</h3>
                    <ul>
                        <li>Inglês Intermediário.</li>
                    </ul>
                </div>
            </div>
            <div className='download--cv'>
                <a className='a-cv' href={pdf} target="_blank">Download PDF.</a>
            </div>
        </div>
    )
}

export default Perfil