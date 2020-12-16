import React from 'react';

import '@ui5/webcomponents/dist/Panel';
import '@ui5/webcomponents/dist/Link';
import '@ui5/webcomponents/dist/Title';

import './Learn.css';

const Learn = () => {
  return (
    <div>
      <img
        className="learning-hero"
        src="https://www.sap.com/dam/application/imagelibrary/photos/285000/285285.jpg/_jcr_content/renditions/285285_photo_2480_0676.jpg.adapt.1920_522.false.false.false.false.height.jpg/1565200450986.jpg"
        alt="Photo of a woman taking an SAP software training course on her tablet"
      />
      <ui5-title level="H1">Learning resources</ui5-title>
      <h2>Explore them here:</h2>
      <ui5-panel
        width="100%"
        accessible-role="Complementary"
        header-text="Client Success Programme"
        class="full-width"
      >
        <ui5-link
          href="https://go.concur.com/Client-Success-Program_CSP8.html"
          target="_blank"
        >
          Go to link
        </ui5-link>
        <p class="content-color">
          This site is a walkthrough of their system setup. Pre recorded
          webinars willshow clients how to work around their site and change the
          system should they wish to expand what has already been pre-set.
        </p>
      </ui5-panel>
      <br />
      <ui5-panel
        width="100%"
        accessible-role="Complementary"
        header-text="Customer Success Centre"
        class="full-width"
      >
        <ui5-link
          href="https://www.concur.co.uk/customer-success"
          target="_blank"
        >
          Go to link
        </ui5-link>
        <p class="content-color">
          Help and tips page for new admins and users. This landing page will
          help clients who haven’t used the system before and will help them
          understand where to go for help.
        </p>
      </ui5-panel>
      <br />
      <ui5-panel
        width="100%"
        accessible-role="Complementary"
        header-text="New Admin Kit 2020"
        class="full-width"
      >
        <ui5-link
          href="https://concur.highspot.com/items/5e9073ad3f65f6755cadc701?lfrm=srp.9#6 "
          target="_blank"
        >
          Go to link
        </ui5-link>
        <p class="content-color">
          This e-book provides the main admin of the system the information
          needed to get started with the system. It includes information about
          their admin role, SAP Concur basics, Additional training and support
          as well as other recourses like Fusion.
        </p>
      </ui5-panel>
      <br />
      <ui5-panel
        width="100%"
        accessible-role="Complementary"
        header-text="Client Admin Training Series"
        class="full-width"
      >
        <ui5-link
          href="https://gateway.on24.com/wcc/eh/1103630/SAP+Concur+Client+Admin+Training+Series+Webinars "
          target="_blank"
        >
          Go to link
        </ui5-link>
        <p class="content-color">
          Set of pre-recorded webinars by the UK SMN Client Success Manager
          team. Admin training webinars across a range of topics including
          reporting.
        </p>
      </ui5-panel>
      <br />
      <ui5-panel
        width="100%"
        accessible-role="Complementary"
        header-text="Tips and Tricks 2020"
        class="full-width"
      >
        <ui5-link
          href="https://concur.highspot.com/items/56da141fb9198859a1000393?lfrm=srp.1"
          target="_blank"
        >
          Go to link
        </ui5-link>
      </ui5-panel>
      <br />
      <ui5-panel
        width="100%"
        accessible-role="Complementary"
        header-text="Client Training Toolkit"
        class="full-width"
      >
        <ui5-link
          href="https://www.concurtraining.com/toolkit/standard/en"
          target="_blank"
        >
          Go to link
        </ui5-link>
        <p class="content-color">
          Landing page with all the relevant training an Admin or End user
          should need for basic knowledge of the system. You can watch videos,
          review guides and review tip sheets.
        </p>
      </ui5-panel>
      <br />
      <ui5-panel
        width="100%"
        accessible-role="Complementary"
        header-text="SAP Concur Community"
        class="full-width"
      >
        <ui5-link href="https:https://community.concur.com/ " target="_blank">
          Go to link
        </ui5-link>
        <p class="content-color">
          The Concur Community allows for clients to view how other clients are
          utilising the Concur solutions.
        </p>
      </ui5-panel>
      <br />
      <ui5-panel
        width="100%"
        accessible-role="Complementary"
        header-text="Rolling out SAP Concur"
        class="full-width"
      >
        <ui5-link
          href="https://www.concur.co.uk/resource-centre/infographics/rolling-out-sap-concur-infographic"
          target="_blank"
        >
          Go to link
        </ui5-link>
      </ui5-panel>
    </div>
  );
};

export default Learn;
