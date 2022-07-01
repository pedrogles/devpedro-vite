import './footer.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return(
        <>
            <div id="container-footer">
                <div>
                    <h3>Vamos trabalhar juntos?</h3>
                </div>
                <div className='p-contato'>
                    <p>Segue abaixo links para contato.</p>
                </div>
                <div>
                    <a  href="https://api.whatsapp.com/send?phone=5583996082302&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Em%20que%20posso%20lhe%20ajudar%3F"
                        target='_blank'><WhatsAppIcon /></a>
                    <a  href="https://www.linkedin.com/in/pedrogles/"
                        target='_blank'><LinkedInIcon /></a>
                    <a  href="https://github.com/pedrogles"
                        target='_blank'><GitHubIcon /></a>
                    <a  href="https://www.instagram.com/pedrogles_/"
                        target='_blank'><InstagramIcon /></a>
                    <a  href="mailto: pedrogabriellima@gmail.com"
                        target='_blank'><EmailIcon /></a>                    
                </div>
                <div className='backto--home'>
                    <a href="#home" className='b-home'>Volte para o início.</a>
                </div>
            </div>
        </>
    )
}

export default Footer