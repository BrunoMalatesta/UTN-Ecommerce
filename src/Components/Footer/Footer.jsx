import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <h3>INFORMACIÓN DE CONTACTO</h3>
          <ul>
            <li>
              <span>
                <LocationOnIcon />
              </span>
              Dorrego Mendoza. Argentina.
            </li>
            <li>
              <span>
                <WhatsAppIcon />
              </span>
              +54 2975072078
            </li>
            <li>
              <span>
                <EmailIcon />
              </span>
              malatestabruno1997@gmail.com
            </li>
          </ul>
        </div>
      </footer>
      <h6 className="copyright">
        © 2023 KatzeRugs. Todos los derechos reservados. Prohibida la
        duplicación, distribución o almacenamiento en cualquier medio.
      </h6>
    </>
  );
}

export default Footer;
