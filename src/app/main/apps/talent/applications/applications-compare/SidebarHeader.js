import Icon from '@mui/material/Icon';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { useTranslation } from 'react-i18next';


function SidebarHeader(props) {
  const [selectedAccount, setSelectedCount] = useState('creapond');
  const { t } = useTranslation('candidatesApp');

  function handleAccountChange(ev) {
    setSelectedCount(ev.target.value);
  }

  return (
    <div className="flex flex-col justify-center h-full p-24">
      <div className="flex items-center flex-1">
        <Icon
          component={motion.span}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0.2 } }}
          className="text-24 md:text-32"
        >
          people
        </Icon>
        <Typography
          component={motion.span}
          initial={{ x: -20 }}
          animate={{ x: 0, transition: { delay: 0.2 } }}
          delay={300}
          className="text-16 md:text-24 mx-12 font-semibold"
        >
          {t('APPLICATIONS')}
        </Typography>
      </div>

    </div>
  );
}

export default SidebarHeader;
