/** Filename: Pirvacy.js
 * Description: The file contains the content about the privacy policies of the page.
 */

import React from 'react';
import './Privacy.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div>
      {/** Navgation bar */}
      <Navigation />
      <div>
        {/** Privacy Policies Content */}
        <h1 className="heading">Privacy Policy</h1>
        <div className="container">
          <div>
            <p>
              At iShareBooks, accessible from iShareBooks.com, one of our main
              priorities is the privacy of our visitors. This Privacy Policy
              document contains types of information that is collected and
              recorded by iShareBooks and how we use it. If you have additional
              questions or require more information about our Privacy Policy, do
              not hesitate to contact us. This Privacy Policy applies only to
              our online activities and is valid for visitors to our website
              with regards to the information that they shared and/or collect in
              iShareBooks. This policy is not applicable to any information
              collected offline or via channels other than this website. Our
              Privacy Policy was created with the help of the Free Privacy
              Policy
            </p>
            <h2 className="h2">Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms
            </p>
            <h2 className="h2">Information we collect</h2>
            <p>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information. If
              you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide. When you register
              for an Account, we may ask for your contact information, including
              items such as name, company name, address, email address, and
              telephone number.iShareBooks follows a standard procedure of using
              log files. These files log visitors when they visit websites. All
              hosting companies do this and a part of hosting services'
              analytics. The information collected by log files include internet
              protocol (IP) addresses, browser type, Internet Service Provider
              (ISP), date and time stamp, referring/exit pages, and possibly the
              number of clicks. These are not linked to any information that is
              personally identifiable. The purpose of the information is for
              analyzing trends, administering the site, tracking users' movement
              on the website, and gathering demographic information. iShareBooks
              does not knowingly collect any Personal Identifiable Information
              from children under the age of 13. If you think that your child
              provided this kind of information on our website, we strongly
              encourage you to contact us immediately and we will do our best
              efforts to promptly remove such information from our records.
            </p>
          </div>
        </div>
      </div>
      <div>
        {/** Footer */}
        <Footer />
      </div>
    </div>
  );
};
export default Privacy;
