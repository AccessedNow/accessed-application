import Icon from '@mui/material/Icon';
import { styled, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { selectMainThemeDark } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import format from 'date-fns/format';

const Root = styled('div')(({ theme }) => ({
  height: 75,
  backgroundImage: 'url("../../assets/images/backgrounds/signup.png")',
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
  },
  '&.Jan': {
    backgroundImage: "url('/assets/images/calendar/winter.jpg')",
    backgroundPosition: '0 85%',
  },
  '&.Feb': {
    backgroundImage: "url('/assets/images/calendar/winter.jpg')",
    backgroundPosition: '0 85%',
  },
  '&.Mar': {
    backgroundImage: "url('/assets/images/calendar/spring.jpg')",
    backgroundPosition: '0 40%',
  },
  '&.Apr': {
    backgroundImage: "url('/assets/images/calendar/spring.jpg')",
    backgroundPosition: '0 40%',
  },
  '&.May': {
    backgroundImage: "url('/assets/images/calendar/spring.jpg')",
    backgroundPosition: '0 40%',
  },
  '&.Jun': {
    backgroundImage: "url('/assets/images/calendar/summer.jpg')",
    backgroundPosition: '0 80%',
  },
  '&.Jul': {
    backgroundImage: "url('/assets/images/calendar/summer.jpg')",
    backgroundPosition: '0 80%',
  },
  '&.Aug': {
    backgroundImage: "url('/assets/images/calendar/summer.jpg')",
    backgroundPosition: '0 80%',
  },
  '&.Sep': {
    backgroundImage: "url('/assets/images/calendar/autumn.jpg')",
    backgroundPosition: '0 40%',
  },
  '&.Oct': {
    backgroundImage: "url('/assets/images/calendar/autumn.jpg')",
    backgroundPosition: '0 40%',
  },
  '&.Nov': {
    backgroundImage: "url('/assets/images/calendar/autumn.jpg')",
    backgroundPosition: '0 40%',
  },
  '&.Dec': {
    backgroundImage: "url('/assets/images/calendar/winter.jpg')",
    backgroundPosition: '0 85%',
  },
}));

const viewNamesObj = {
  dayGridMonth: {
    title: 'Month',
    icon: 'view_module',
  },
  timeGridWeek: {
    title: 'Week',
    icon: 'view_week',
  },
  timeGridDay: {
    title: 'Day',
    icon: 'view_agenda',
  },
};

function JobDetailHeader(props) {
  const { calendarRef, currentDate } = props;

  const mainThemeDark = useSelector(selectMainThemeDark);
  const calendarApi = () => calendarRef.current?.getApi();
  return (
    <ThemeProvider theme={mainThemeDark}>
      <Root
        className={clsx(
          'flex h-200 min-h-200 relative',
          format(new Date(currentDate?.start || null), 'MMM')
        )}
      >
        <div className="flex flex-1 flex-col justify-between z-10 container">
          <motion.div
            className="flex flex-end justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
          >
            <Avatar
              sx={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'background.default',
              }}
              className="flex items-center justify-center w-60 h-60"
              src={props.company.avatar}
              variant="square"
            />
          </motion.div>
        </div>
      </Root>
    </ThemeProvider>
  );
}

export default JobDetailHeader;
