import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Luxury from '../images/LogoName.png'; // Adjust the import path as necessary
import Button from './Button';
import './style/footer.css';
import { motion } from 'framer-motion';

function EmailPage({ email }) {
   const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
      // Set a timeout to remove the container after 5 seconds
      const timer = setTimeout(() => {
         setIsVisible(false);
      }, 3000); // 3000 milliseconds = 3 seconds

      // Cleanup the timeout on component unmount
      return () => clearTimeout(timer);
   }, []);

   if (!isVisible) {
      return null; // Render nothing if not visible
   }

   return (
      <div className="email-overlay">
         <div className="email-container">
            <h2>Subscribed Email</h2>
            {email ? (
               <p>
                  Thank you for subscribing! Your email: <strong>{email}</strong>
               </p>
            ) : (
               <p>No email subscribed yet.</p>
            )}
         </div>
      </div>
   );
}

function Footer() {
   const [email, setEmail] = useState('');
   const [isSubscribed, setIsSubscribed] = useState(false);

   const handleEmailChange = (e) => {
      setEmail(e.target.value);
   };

   const handleEmailSubmit = () => {
      if (email) {
         localStorage.setItem('subscribedEmail', email); // Store email in local storage
         alert('Thank you for subscribing!'); // Optional: confirmation alert
         setIsSubscribed(true); // Set subscribed state to true
         setEmail(''); // Clear input field
      } else {
         alert('Please enter a valid email address.'); // Validation message
      }
   };

   return (
      <>
         {isSubscribed && <EmailPage email={email} />}
         <motion.footer
            className="footer"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
         >
            <section className="footer-logo">
               <NavLink to="/">
                  <img src={Luxury} alt="Luxury Hotels" />
               </NavLink>
               <p className="home-p">ghatkopar, Mumbai, Maharashtra 400086</p>
               <p className="home-p">+91 6387450561</p>
               <p className="home-p">sohelq433@gmail.com</p>
            </section>
            <section className="footer-navigation">
               <ul>
                  <li>
                     <a href="#">About Us</a>
                  </li>
                  <li>
                     <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li>
                     <NavLink to="/contact">Terms & Conditions</NavLink>
                  </li>
               </ul>
            </section>
            <section className="footer-social">
               <ul>
                  <li>
                     <a
                        href="#"
                        target="_blank"
                        rel="Qureshi Sohel"
                     >
                        Facebook
                     </a>
                  </li>
                  <li>
                     <a href="#" target="_blank" rel="Qureshi Sohel">
                        Twitter
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        target="_blank"
                        rel="Qureshi Sohel"
                     >
                        Instagram
                     </a>
                  </li>
               </ul>
            </section>
            <section className="footer-newsletter">
               <h4>Subscribe to our newsletter</h4>
               <div className="footer-input">
                  <input
                     type="email"
                     placeholder="Email Address"
                     value={email}
                     onChange={handleEmailChange}
                  />
                  <Button classEx="footer-button" onClick={handleEmailSubmit}>
                     OK
                  </Button>
               </div>
            </section>
         </motion.footer>
      </>
   );
}

export default Footer;
