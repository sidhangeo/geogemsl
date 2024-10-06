import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import TitleSetter from '../TitleSetter';
import { theme } from '../../styles/theme';

function Contact() {
  return (
    <>
      <TitleSetter title="Geo Gems - Contact Us" />
      <div className={css(styles.container)}>
        <div className={css(styles.contentWrapper)}>
          <div className={css(styles.infoContainer)}>
            <div className={css(styles.contactInfo)}>
              <div className={css(styles.contactItem)}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={css(styles.icon)} />
                <p>No 28, Pedlar Street, Fort, Galle, Sri Lanka</p>
              </div>
              <div className={css(styles.contactItem)}>
                <FontAwesomeIcon icon={faPhone} className={css(styles.icon)} />
                <p>077 363 6932</p>
              </div>
              <div className={css(styles.contactItem)}>
                <FontAwesomeIcon icon={faEnvelope} className={css(styles.icon)} />
                <p>info@geogemsl.com</p>
              </div>
            </div>
            <div className={css(styles.socialMedia)}>
              <a href="https://web.facebook.com/people/Geo-Gems/61555203650551/" target="_blank" rel="noopener noreferrer" className={css(styles.socialLink)}>
                <FontAwesomeIcon icon={faFacebookF} className={css(styles.socialIcon)} />
              </a>
              <a href="https://www.instagram.com/geogemsl/" target="_blank" rel="noopener noreferrer" className={css(styles.socialLink)}>
                <FontAwesomeIcon icon={faInstagram} className={css(styles.socialIcon)} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '1rem',
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '2rem',
    color: theme.colors.primary,
    marginBottom: '1rem',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    textAlign: 'left',
  },
  icon: {
    color: theme.colors.primary,
    marginRight: '1rem',
    fontSize: '1.5rem',
    width: '20px', 
    textAlign: 'center',
  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  socialLink: {
    color: theme.colors.primary,
    fontSize: '1.5rem',
    transition: 'color 0.3s ease',
    ':hover': {
      color: theme.colors.accent,
    },
  },
  socialIcon: {
    width: '30px',
    height: '30px',
  },
});

export default Contact;