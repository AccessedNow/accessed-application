import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Root = styled('div')(({ theme }) => ({
  padding: 20,

  '& .tasks': {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderStyle: 'dash',
    borderRadius: 4
  }
}));

const WorkflowPreview = (props) => {
  return (
    <Root>
        <Stepper orientation="vertical">
          {props.stages.map((stage, index) => (
            <Step key={stage.name}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {stage.name}
              </StepLabel>
              <StepContent>
                <Box sx={{ mb: 2 }}>
                  <div className="tasks">
                    {stage.tasks.length ?
                      <Button
                        variant="contained"
                        sx={{mt: 1, mr: 1}}
                      >
                        {index === props.stages.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      :
                      <Typography variant="caption">No Tasks</Typography>
                    }
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>

    </Root>
  );
};

export default WorkflowPreview;
