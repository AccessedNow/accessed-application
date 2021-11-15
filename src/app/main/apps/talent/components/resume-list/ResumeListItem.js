import _ from '@lodash';
import { styled } from '@mui/material/styles';
import { amber, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import format from 'date-fns/format';


const StyledListItem = styled(ListItem)(({ theme, completed }) => ({
  '& .todo-title, & .todo-notes': {
    textDecoration: 'line-through',
  },

}));

function ResumeListItem(props) {
  const dispatch = useDispatch();

  return (
    <StyledListItem
      className="py-20 px-0 sm:px-8"
      dense
      button
    >
      <div className="flex flex-col sm:flex-row items-center justify-start">
        <div className="px-8 order-first sm:order-none">
          <Avatar variant="square" alt={props.file.filename} src={props.file.fileType==='PDF'?'assets/icons/filetypes/pdf.png':'assets/icons/filetypes/doc.png'} className="w-60 h-60 rounded-6"/>
        </div>
      </div>

      <div className="flex flex-1 flex-col relative overflow-hidden px-8">
        <Typography className="font-medium">{props.file.filename}</Typography>

        <div className="flex flex-col py-4">
          <Typography color="textSecondary" className="truncate">
            {format(new Date(props.file.createdDate), 'PP')}
          </Typography>
        </div>

      </div>


    </StyledListItem>
  );
}

export default ResumeListItem;
