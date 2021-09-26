import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { confirmRegistration } from 'app/auth/store/registerSlice';


function RegisterConfirmationPage() {
  const dispatch = useDispatch();
  dispatch(confirmRegistration({token: "45435jdkf"}));

  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <Grow in>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center text-center p-16 sm:p-48">
              <img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo" />

              <Typography variant="subtitle1" className="mb-16 text-24 font-semibold">
                Congratulation! You have successfully registered.
              </Typography>

              <Typography color="textSecondary" className="mb-40 font-medium">
                We're excited to have you get started.
              </Typography>
            </CardContent>
          </Card>
        </Grow>
      </div>
    </div>
  );
}

export default RegisterConfirmationPage;
