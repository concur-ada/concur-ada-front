import React from 'react';
import {useSelector} from 'react-redux';
import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import '@ui5/webcomponents-icons/dist/badge';
import '@ui5/webcomponents/dist/Icon.js';
import { Link } from '@ui5/webcomponents-react/lib/Link';

const NameBadgeDisplay = () => {

  const {user} = useSelector(state => state.user);
    const name = (user && user.name) || 'Welcome';
    const badges = (user && user.badges) || '';

  return (
    <div>
      <ThemeProvider>
        <Bar
          className='nameBadgeHeader'
          contentLeft={<> {name}</>}
          contentMiddle={<><Link  href='/learn'>LEARN</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link  target='_blank' href='https://www.concur.com/en-us/events'>EVENTS</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link target='_blank' href='https://www.concur.com/en-us/free-trial'>PURCHASE</Link> </>}
          contentRight={<>{badges}<ui5-icon className="badgeIcon" style={{color:'#f0ab00', width:'30px', position:'relative',bottom:'5px'}}name="badge"></ui5-icon></>}
          design='Header'
          style={{backgroundColor:'black', height:'50px'}}
        />
      </ThemeProvider>
    </div>
  );
};

export default NameBadgeDisplay;


