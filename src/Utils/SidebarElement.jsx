import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material//ListItem';
import ListItemIcon from '@mui/material//ListItemIcon';
import { makeStyles } from '@material-ui/core/styles/makeStyles';
import dash from '../assets/home.svg';
import home from '../assets/home1.svg';

import edit from '../assets/edit.svg';

import image from '../assets/image.svg';
import follow from '../assets/follow.svg';
import messagerie from '../assets/message.svg';
import app from '../assets/app.svg';
import bug from '../assets/bug.svg';
import space from '../assets/space.svg';
import settings from '../assets/settings.svg';

const list = [
  { title: '/Dashboard', icon: dash },
  { title: '/Home', icon: home },
  { title: '/Edit', icon: edit },
  { title: '/Pictures', icon: image },
  { title: '/messagerie', icon: messagerie },
  { title: '/applications', icon: app },
  { title: '/notifications', icon: bug },
  { title: '/Space', icon: space },
  { title: '/settings', icon: settings },
];

export default function SideBar() {
  return (
    <aside className='absolute top-0 left-0 h-full w-auto flex flex-col justify-center gap-7 mx-4 bg-white'>
    
      {list.map(item => (
        
        <img src={item.icon} width={40} height={40} />
      )

    )}
    
      </aside>
  );
}
