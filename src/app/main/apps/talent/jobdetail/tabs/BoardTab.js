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
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Board from './board/Board';

function BoardTab() {
  const [data, setData] = useState(null);
  const test = (x) => x + 1;

  // useEffect(() => {
  //   axios.get('/api/profile/about').then((res) => {
  //     setData(res.data);
  //   });
  // }, []);
  //
  // if (!data) {
  //   return null;
  // }

  // const { general, work, contact, groups, friends } = data;
  //
  // const container = {
  //   show: {
  //     transition: {
  //       staggerChildren: 0.05,
  //     },
  //   },
  // };
  //
  // const item = {
  //   hidden: { opacity: 0, y: 40 },
  //   show: { opacity: 1, y: 0 },
  // };

  return (
    <Board/>
  );
}

export default BoardTab;
