import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { closeCardDialog } from '../../store/cardSlice';
import ContentHeader from '../../../candidate/ContentHeader';
import CandidateDetail from '../../../candidate/CandidateDetail';
import SidebarContent from '../../../candidate/SidebarContent';

function CardDialog(props) {
  const dispatch = useDispatch();
  const cardDialogOpen = useSelector(({ jobDetail }) => jobDetail.card.dialogOpen);
  const data = useSelector(({ jobDetail }) => jobDetail.card.data);

  if(!data){
    return <span></span>;
  }

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'xl'}
      classes={{
        paper: 'w-full h-full m-24',
      }}
      onClose={(ev) => dispatch(closeCardDialog())}
      open={cardDialogOpen}
    >
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div><ContentHeader candidate={data.user}/></div>
          <div><CandidateDetail candidate={data.user}/></div>
        </div>
        <div>
          <SidebarContent candidate={data.user}/>
        </div>
      </div>
    </Dialog>
  );
}

export default CardDialog;
