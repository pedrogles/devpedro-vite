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
                    <p>Segue a baixo links para contato.</p>
                </div>
                <div>
                    <a href=""><WhatsAppIcon /></a>
                    <a href=""><LinkedInIcon /></a>
                    <a href=""><GitHubIcon /></a>
                    <a href=""><InstagramIcon /></a>
                    <a href=""><EmailIcon /></a>                    
                </div>
                <div className='backto--home'>
                    <a href="#home" className='b-home'>Volte para o inicio.</a>
                </div>
            </div>
        </>
    )
}

export default Footer