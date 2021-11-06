import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import IconButton from '@mui/material/IconButton';

import RatingIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';
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
                      <Stack direction="row" spacing={1}>
                        {stage.tasks.map((task, index) => (
                          <div>
                            {task.type === 'EMAIL' &&
                            <IconButton aria-label="email">
                              <EmailIcon/>
                            </IconButton>
                            }
                            {task.type === 'EVALUATION' &&
                            <IconButton aria-label="evaluation">
                              <RatingIcon/>
                            </IconButton>
                            }
                            {task.type === 'EVENT' &&
                            <IconButton aria-label="event">
                              <EventIcon/>
                            </IconButton>
                            }
                          </div>
                        ))}
                      </Stack>
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
