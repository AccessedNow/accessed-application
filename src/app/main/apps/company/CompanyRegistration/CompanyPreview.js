import Icon from '@mui/material/Icon';
import { styled, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { selectMainThemeDark } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import format from 'date-fns/format';

const Root = styled('div')(({ theme }) => ({
  height: 75,
  backgroundImage: 'url(\'/assets/images/covers/cover11\')',
  backgroundColor: '#FAFAFA',
  color: '#FFFFFF',
  backgroundSize: 'cover',
  backgroundPosition: '0 50%',
  backgroundRepeat: 'no-repeat',
  '&:before': {
    content: "''",
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    background: 'rgba(0, 0, 0, 0.45)',
  }
}));

function CompanyPreview(props) {

  const imageUrl = props.company.avatar? URL.createObjectURL(props.company.avatar):'';
  const mainThemeDark = useSelector(selectMainThemeDark);
  return (
    <Card variant="outlined" className="mb-32 rounded-8 md:rounded-0 lg:rounded-0">
      <CardMedia
        component="img"
        height="72"
        image="assets/images/profile/morain-lake.jpg"
        className="h-128"
      />
      <CardContent>
        <div className="w-full px-16 flex flex-col md:flex-row flex-1 items-center">
          <Avatar
            sx={{
              borderWidth: 4,
              borderStyle: 'solid',
              borderColor: 'background.default',
            }}
            className="w-72 h-72 rounded-8 border-1"
            src={imageUrl}
            variant="square"
          />
          <div className="flex flex-col md:flex-row flex-1 items-center justify-between p-8">
            {props.company.name ?
              <Typography
                className="md:px-16 sm:text-24 md:text-20 lg:text-16 font-semibold tracking-tight"
                color="inherit"
              >
                {props.company.name}
              </Typography>
              :
              <Typography
                className="sm:text-24 md:text-20 lg:text-16 font-semibold text-gray-500 italic tracking-tight"
                color="primary"
              >
                Company Name
              </Typography>
            }
          </div>
        </div>
        <Button variant="outlined" startIcon={<AddIcon />} color="primary" className="ml-16 mt-16">
          Follow
        </Button>
      </CardContent>
    </Card>
  );
}

export default CompanyPreview;
