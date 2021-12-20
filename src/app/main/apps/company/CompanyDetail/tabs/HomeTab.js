import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function HomeTab() {
  const company = useSelector(({ companyDetail }) => companyDetail.company);
  const [data, setData] = useState(null);
  const test = (x) => x + 1;


  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <div className="">
        <Card component={motion.div} variant="outlined" className="w-full mb-20 rounded-8">
          <CardContent>
            <div className="mb-24">
              <Typography className="font-semibold mb-4 text-15">About</Typography>
              <Typography>{company.about}</Typography>
            </div>
          </CardContent>
        </Card>


        <Card component={motion.div} variant="outlined" className="w-full mb-20 rounded-8">
          <CardContent>
            <div className="mb-24">
              <Typography className="font-semibold mb-4 text-15">Address</Typography>
              {/*<Typography>{company.primaryAddress}</Typography>*/}
            </div>

            <div className="mb-24">
              <Typography className="font-semibold mb-4 text-15">Tel.</Typography>

              {/*{company.contacts.map((tel) => (*/}
                {/*<div className="flex items-center" key={tel}>*/}
                  {/*<Typography>{tel}</Typography>*/}
                {/*</div>*/}
              {/*))}*/}
            </div>

            <div className="mb-24">
              <Typography className="font-semibold mb-4 text-15">Website</Typography>

              {/*{company.website.map((website) => (*/}
                {/*<div className="flex items-center" key={website}>*/}
                  {/*<Typography>{website}</Typography>*/}
                {/*</div>*/}
              {/*))}*/}
            </div>

            <div className="mb-24">
              <Typography className="font-semibold mb-4 text-15">Emails</Typography>

              {/*{contact.emails.map((email) => (*/}
                {/*<div className="flex items-center" key={email}>*/}
                  {/*<Typography>{email}</Typography>*/}
                {/*</div>*/}
              {/*))}*/}
            </div>
          </CardContent>
        </Card>
      </div>

    </motion.div>
  );
}

export default HomeTab;
