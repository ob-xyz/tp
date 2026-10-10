import type { LinksFunction, MetaFunction } from "@remix-run/node";
import scroll from "~/style/scss/components/showscroll.css";
import LegalPage from "~/components/legal-page";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: scroll },
];

export const meta: MetaFunction = () => ({
  title: "Privacy / thepoast",
  description:
    "Learn about our Privacy Policy.",
});

const toc = [
  { id: "about", label: "About this Policy and us" },
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use your information" },
];

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" effective="April 5, 2025" toc={toc}>
      <p id="top-of-page">
        thepoast respects your privacy and values your trust. This Privacy
        Policy (“Policy”) describes how we collect and use your information and
        explains your rights and options. This Policy applies to these services
        (which we call the “Services” in this Policy):
      </p>
      <ul>
        <li>websites, thepoast Store, paid products</li>
        <li>newsletters and other disseminated content</li>
        <li>merchandise, mobile apps and related social media pages</li>
        <li>anywhere else we gather information about you and refer to this Policy.</li>
      </ul>

      <p>This Policy is grouped into these sections:</p>
      <ul>
        <li>about us and this Policy;</li>
        <li>information we collect;</li>
        <li>how we use information, including for advertising purposes;</li>
        <li>when we disclose information to other parties, including for advertising purposes; and</li>
        <li>your rights and how to exercise them.</li>
      </ul>

      <p>
        We encourage you to read this Policy carefully. If you have questions,
        please contact us at{" "}
        <a href="mailto:privacyrequest@thepoast.com">privacyrequest@thepoast.com</a>.
      </p>

      {/* ------------------------------ 1. ABOUT ------------------------------ */}
      <h3 className="section-title" id="about">1. About This Policy And Us</h3>

      <h4 className="sub-title">(a) Who we are</h4>
      <p>
        thepoast, Inc. (“thepoast,” “we”, “our” or “us”) operates the
        Services. This Policy supplements and is governed by our Terms of
        Service (“Terms”). Capitalized terms used but not defined in this Policy
        are defined in our Terms. The Terms describe how the Services work in
        general and its conditions and requirements of use.
      </p>

      <h4 className="sub-title">(b) When this Policy applies</h4>
      <p>
        This Policy applies when you use the Services, effective as of the Last
        Updated date above. By using or accessing the Services, you signify that
        you have read, understand and agree to be bound by this Policy and the
        Terms.
      </p>
      <p>
        Because the Services change often, this Policy may change over time.
        Anytime we modify the Policy, we will post a revised version on the
        Services and update the Last Updated date above. If you have given us
        your contact information, we will notify you before any material changes
        take effect, so you have time to review them.
      </p>
      <p>
        Certain parts of the Services work differently, and some information
        falls outside this Policy:
      </p>
      <ul>
        <li>Certain parts of the Services may have additional terms and privacy disclosures that supplement this Policy.</li>
        <li>The Services may contain links to and from third-party websites and services. This Policy doesn’t apply to outside of our Services. See Third Party Services to learn more.</li>
        <li>
          If you are a current or former employee or contractor of ours, this
          Policy does not apply to you. You may contact us about your privacy
          practices and rights at{" "}
          <a href="mailto:privacyrequest@thepoast.com">privacyrequest@thepoast.com</a>.
        </li>
        <li>If we receive your information in our role as a service provider to another business, our agreement with that business governs our use of your information. We will refer any questions or concerns of yours to that business.</li>
      </ul>

      <h4 className="sub-title">(c) Location-specific sections</h4>
      <p>
        The Services operates from the United States, but this Policy applies
        worldwide. Our practices generally do not differ based on your location,
        but your rights and choices depend in part on the law where you live.
        For example, you may have rights under: (1) “GDPR”:{" "}
        <i>
          THE EU GENERAL DATA PROTECTION REGULATION (EU) 2016/679, AND THE UK
          GENERAL DATA PROTECTION REGULATION (UK GDPR) AS TAILORED BY THE DATA
          PROTECTION ACT 2018
        </i>
        ; or (2) “CCPA”: the California Consumer Privacy Act, as amended.
      </p>
      <p>
        As a result, certain sections of this Policy apply to you only if you
        reside in a particular location:
      </p>
      <ul>
        <li>Residents of jurisdictions where GDPR applies – such as U.K., EU and Swiss residents – should consult the Rights under GDPR and International Data Transfers sections.</li>
        <li>Residents of Mexico should consult the Aviso de Privacidad addendum.</li>
        <li>Canadian residents should consult the Canadian users section.</li>
        <li>California residents should consult the Rights under California law section. If you reside in a U.S. jurisdiction that has enacted a data privacy law similar to CCPA or GDPR, we extend the same rights CCPA grants to California residents to you, except where we specify otherwise.</li>
      </ul>
      <p>
        If those sections apply to you, they override any contrary descriptions
        elsewhere in the Policy as they relate to you. Please contact us at{" "}
        <a href="mailto:privacyrequest@thepoast.com">privacyrequest@thepoast.com</a>{" "}
        if you have questions about your rights under other data privacy laws.
      </p>

      {/* ---------------------------- 2. COLLECTION --------------------------- */}
      <h3 className="section-title" id="collect">2. Information We Collect</h3>

      <h4 className="sub-title">(a) Information you provide</h4>
      <p>
        You may use the Services without providing any information about
        yourself. However, to use some aspects of the Services, we will need
        information about you, such as if you:
      </p>
      <ul>
        <li>Purchase our Offerings or services</li>
        <li>Contact or communicate with us</li>
        <li>Subscribe or opt-in to our newsletters, alerts, or other communications</li>
        <li>Participate in a contest or promotion or redeem a prize</li>
        <li>Information you provide may include your name or email address (“personal identifiers”).</li>
      </ul>
      <p>
        We generally don’t collect (or want!) your sensitive information, and we
        strive to limit the amount of sensitive personal information we collect.
      </p>
      <ul>
        <li>For instance, if you make a purchase through our Services, your payment information, like your full credit card number and any payment-related security information, is only collected and processed by our payment processor.</li>
      </ul>
      <p>
        In the event you provide sensitive personal information to us, we use it
        only for our operational business purposes, and we do not disclose it to
        others for any other purpose.
      </p>

      <h4 className="sub-title">(b) Information collected when you use the Services</h4>
      <p>
        As you use the Services, cookies and other technology we use will
        generate technical data about which features you use, how you use them
        and the devices you use to access our services. This information may
        include:
      </p>
      <ul>
        <li>“Commercial Information” about your orders of Offerings or other products or services from us and interactions with thepoast Store products.</li>
        <li>“Device Information” related to the device you use to interact with the Services, such as your device’s IP address, advertising IDs (resettable, random numbers, such as the device’s Apple IDFA or Android Advertising ID), its browser and operating system, its internet service provider, and its configuration.</li>
        <li>“Internet Activity” related to your use of the Services, such as the pages you visit, the sites you use before or after visiting ours, your actions within the Services, the content or advertisements you interact with, general geolocation information, time stamps and performance logs and reports.</li>
      </ul>

      <div className="legal-callout">
        <p className="legal-callout-title">Managing cookies and similar technologies</p>
        <p>
          <i>
            WHEN YOU FIRST VISIT OUR SERVICES, AND PERIODICALLY THEREAFTER, YOU
            WILL BE PRESENTED WITH A COOKIE BANNER PROVIDING YOU WITH
            INFORMATION ABOUT THE COOKIES AND SIMILAR TRACKING TECHNOLOGIES WE
            USE. FOR COOKIES THAT ARE NOT STRICTLY NECESSARY FOR THE
            FUNCTIONING OF OUR SERVICES, WE WILL REQUEST YOUR EXPLICIT CONSENT
            BEFORE PLACING THEM ON YOUR DEVICE. OUR COOKIE BANNER ALLOWS YOU TO:
          </i>
        </p>
        <ul>
          <li><i>ACCEPT ALL COOKIES;</i></li>
          <li><i>REJECT ALL NON-ESSENTIAL COOKIES; OR</i></li>
          <li><i>CUSTOMIZE YOUR PREFERENCES AND CONSENT TO SPECIFIC CATEGORIES OF COOKIES.</i></li>
        </ul>
        <p>
          <i>
            PREFERENCES FOR NON-ESSENTIAL COOKIES ARE NOT PRE-SELECTED. YOU CAN
            WITHDRAW OR CHANGE YOUR CONSENT AT ANY TIME.
          </i>
        </p>
      </div>

      <h4 className="sub-title">(c) Information we generate</h4>
      <p>
        We infer new information from other data we collect, including using
        automated means to generate information about your likely preferences or
        other characteristics (“inferences”).
      </p>

      {/* ------------------------------ 3. USE -------------------------------- */}
      <h3 className="section-title" id="use">3. How We Use Your Information</h3>
      <p>
        We use each of the categories of personal information described above
        for the following business and commercial purposes. The activities below
        can involve outside companies, agents or contractors (“service
        providers”) to whom we disclose your information for these purposes
        (discussed further below in Section 4).
      </p>

      <h4 className="sub-title">(a) To provide our content, services and products to you</h4>
      <ul>
        <li>Deliver content you request</li>
        <li>Provide you with customer support and respond to your requests</li>
        <li>Complete your orders</li>
        <li>Communicate with you about our services</li>
      </ul>

      <h4 className="sub-title">(b) To manage your subscriptions or fulfill product orders</h4>
      <ul>
        <li>Manage your content subscriptions</li>
        <li>Deliver and process payments for Offerings you order</li>
      </ul>

      <h4 className="sub-title">(c) To improve our services and develop new ones</h4>
      <ul>
        <li>Administer focus groups, market studies and surveys</li>
        <li>Review interactions with customer teams to improve our quality of service</li>
        <li>Develop new content and services</li>
      </ul>

      <h4 className="sub-title">(d) To allow personalized ads and create audiences for third-party advertisers</h4>
      <ul>
        <li>Administer sweepstakes, contests, discounts or other offers</li>
        <li>Gather data and work with third parties to show you personalized ads on behalf of advertisers</li>
        <li>Perform and measure the effectiveness of advertising campaigns on our services and marketing campaigns off of the Services</li>
        <li>Communicate with you about products or services that we believe may interest you</li>
        <li>
          <i>
            OUR PERSONALIZED ADVERTISING ACTIVITIES RELY ON YOUR PRIOR CONSENT
            FOR THE USE OF RELEVANT COOKIES AND TRACKING TECHNOLOGIES, AND FOR
            THE SHARING OF YOUR INFORMATION WITH ADVERTISING PARTNERS FOR THESE
            PURPOSES.
          </i>
        </li>
      </ul>

      <h4 className="sub-title">(e) To prevent, detect and fight fraud and other illegal or unauthorized activities</h4>
      <ul>
        <li>Find and address ongoing, suspected or alleged violations of our Terms</li>
        <li>Retain data related to violations of our Terms to prevent against recurrences</li>
        <li>Enforce or exercise our rights; for example, those in our Terms</li>
      </ul>

      <h4 className="sub-title">(f) To create broader findings with aggregate and deidentified data</h4>
      <ul>
        <li>Aggregate or deidentify information so that it can no longer identify you, as defined under applicable laws.</li>
        <li>Better understand and represent our users using deidentified data, such as to measure ad performance, create advertising interest-based segments or compile survey results.</li>
      </ul>

      <h4 className="sub-title">(g) To ensure legal compliance</h4>
      <ul>
        <li>Verify copyright or IP claims</li>
        <li>Comply with legal requirements</li>
        <li>Assist law enforcement</li>
      </ul>

      <h4 className="sub-title">(h) Purposes</h4>
      <p>
        We rely on the following purposes to collect and use your information as
        described in this Policy:
      </p>
      <ul>
        <li><u>Commercial purposes</u>: At times, the reason we process your information is to advance your economic interests or our economic interests. These purposes include performing the contract that you have with us, as embodied by our Terms, which advance our economic interests and yours. For instance, if you order products from us, we use your information to complete your payment and provide your product to you.</li>
        <li><u>Business purposes</u>: Most often, we process your information for operational reasons, in a reasonably necessary and proportionate manner (i.e., for business purposes under CCPA). For instance, we analyze users’ behavior on our services to continuously improve our offerings, we suggest content we think might interest you and promote our own services, we process information to help keep our members safe and we process data where necessary to enforce our rights, assist law enforcement and enable us to defend ourselves in the event of a legal action.</li>
        <li><u>Comply with applicable laws and regulations</u>: We also process your information where it is necessary for us to comply with applicable laws and regulations and evidence our compliance with applicable laws and regulations. For example, we retain traffic data and data about transactions in line with our accounting, tax and other statutory data retention obligations and to be able to respond to valid access requests from law enforcement.</li>
        <li>
          <u>Consent</u>: From time to time, we may ask for your consent to
          collect specific information, such as your precise geolocation, or use
          your information for certain specific reasons, like providing your
          email address or phone number for direct marketing purposes, or for
          the use of certain types of cookies for personalized advertising. In
          general, you may withdraw your consent by changing your settings (such
          as browser or device settings) or following instructions provided with
          information we send you on a consent basis (such as clicking
          ‘unsubscribe’ in any email we send you). You may always withdraw your
          consent at any time – just contact us at{" "}
          <a href="mailto:privacyrequest@thepoast.com">privacyrequest@thepoast.com</a>.
        </li>
      </ul>
    </LegalPage>
  );
}