import { FunctionComponent } from "react";
import Logo from "./Logo";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
  underLine?: string;
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  underLine,
}) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.brand}>
          <Logo />
          <div className={styles.newsletter}>
            <div className={styles.beTheFirst}>
              Be the first to know about our app
            </div>
            <div className={styles.sendMail}>
              <input
                className={styles.enterYourEmail}
                placeholder="Enter your email"
                type="text"
              />
              <img className={styles.iconSend} alt="" src="/iconsend.svg" />
            </div>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.links}>
            <div className={styles.support}>Support</div>
            <div className={styles.hellobarbscomParent}>
              <div className={styles.hellobarbscom}>hello@barbs.com</div>
              <div className={styles.hellobarbscom}>+234-708-000-3400</div>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.account}>Account</div>
            <div className={styles.hellobarbscomParent}>
              <div className={styles.cart}>Cart</div>
              <div className={styles.shop}>Shop</div>
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          <div className={styles.socials1}>Socials</div>
          <img
            className={styles.socialIconsLogoFacebook}
            loading="lazy"
            alt=""
            src="/social-icons--logofacebook.svg"
          />
          <img
            className={styles.socialIconsLogoFacebook}
            loading="lazy"
            alt=""
            src="/social-icons--logotwitter.svg"
          />
          <img
            className={styles.socialIconsLogoFacebook}
            loading="lazy"
            alt=""
            src="/social-icons--logoinstagram.svg"
          />
        </div>
      </div>
      <div className={styles.separator}>
        <img className={styles.underlineIcon} alt="" src={underLine} />
        <div className={styles.copyright}>
          <div className={styles.info}>
            <img
              className={styles.iconCopyright}
              alt=""
              src="/iconcopyright.svg"
            />
            <div className={styles.beTheFirst}>
              {" "}
              Barbs 2024. All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
