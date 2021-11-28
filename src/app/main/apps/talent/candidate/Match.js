import _ from '@lodash';
import { styled, ThemeProvider, useTheme, alpha } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import Box from '@mui/material/Box';

const Root = styled('div')(({ theme }) => ({
}));

function Match(props) {
  const theme = useTheme();
  // const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
  const data = _.merge({}, props.data);

  var options = {
    chart: {
      height: 140,
      type: "radialBar",
    },
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "65%",
          background: "#293450"
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -50,
            color: "#fff",
            fontSize: "13px",
            show: false
          },
          value: {
            offsetY: 10,
            color: "#fff",
            fontSize: "1.6em",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: [""]
  };


  const series = props.series;

  _.setWith(data, 'options.fill.colors', [theme.palette.secondary.main]);
  _.setWith(data, 'options.markers.colors', [theme.palette.secondary.main]);
  _.setWith(data, 'options.stroke.colors', [theme.palette.primary.contrastText]);
  _.setWith(data, 'options.markers.strokeColors', [theme.palette.primary.contrastText]);
  _.setWith(data, 'options.grid.borderColor', alpha(theme.palette.primary.contrastText, 0.3));

  return (
    <ThemeProvider>
      <Root>
        <ReactApexChart
          options={options}
          series={series}
          type={options.chart.type}
          height={options.chart.height}
        />
      </Root>
    </ThemeProvider>
  );
}

export default memo(Match);
