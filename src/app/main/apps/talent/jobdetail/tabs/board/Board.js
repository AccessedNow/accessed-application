import { motion } from 'framer-motion';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import GlobalStyles from '@mui/material/GlobalStyles';
import { reorderCard, reorderList, resetBoard, getBoard } from '../../store/boardSlice';
import BoardAddList from './BoardAddList';
import BoardList from './BoardList';
import BoardTitle from './BoardTitle';
import BoardCardDialog from './dialogs/card/BoardCardDialog';
import BoardSettingsSidebar from './sidebars/settings/BoardSettingsSidebar';


const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Board(props) {
  const dispatch = useDispatch();
  const board = useSelector(({ jobDetail }) => jobDetail.board);
  const containerRef = useRef(null);

  const routeParams = useParams();
  const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);

  useDeepCompareEffect(() => {
    dispatch(getBoard({boardId: '32gfhaf2'}));
    return () => {
      dispatch(resetBoard());
    };
  }, [dispatch, routeParams]);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped nowhere
    if (!destination) {
      return;
    }

    // did not move anywhere - can bail early
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // reordering list
    if (result.type === 'list') {
      dispatch(reorderList(result));
    }

    // reordering card
    if (result.type === 'card') {
      dispatch(reorderCard(result));
    }
  }

  function toggleSettingsDrawer(state) {
    setSettingsDrawerOpen(state === undefined ? !settingsDrawerOpen : state);
  }

  if (!board) {
    return null;
  }

  return (
    <>
      <GlobalStyles
        styles={(theme) => ({
          '#fuse-main': {
            height: 'auto',
          },
        })}
      />
      <div className="flex flex-1 flex-auto flex-col w-full h-full relative">

        <div className={clsx('flex flex-1 overflow-x-auto overflow-y-hidden')}>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list" type="list" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  className="flex container py-16 md:py-24 px-8 md:px-12"
                >
                  {board.lists.map((list, index) => (
                    <motion.div variants={item} key={list.id}>
                    <BoardList key={list.id} list={list} index={index} />
                    </motion.div>
                  ))}
                  {provided.placeholder}

                  <BoardAddList />
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        <SwipeableDrawer
          anchor="right"
          className="absolute overflow-hidden"
          classes={{
            paper: 'absolute w-320',
          }}
          BackdropProps={{
            classes: {
              root: 'absolute',
            },
          }}
          container={containerRef.current}
          ModalProps={{
            keepMounted: true,
            style: { position: 'absolute' },
          }}
          open={settingsDrawerOpen}
          onOpen={(ev) => {}}
          onClose={() => toggleSettingsDrawer(false)}
          disableSwipeToOpen
        >
          <BoardSettingsSidebar />
        </SwipeableDrawer>

        <BoardCardDialog />
      </div>
    </>
  );
}

export default Board;
