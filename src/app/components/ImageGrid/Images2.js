import React, { useEffect, useState } from 'react';
import {makeStyles} from "@material-ui/core/styles/index";
import moment from "moment";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAltOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';

// import ModeComment from '@material-ui/icons/ModeCommentOutlined';
import InsertComment from '@material-ui/icons/InsertCommentOutlined';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
// import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
// import FbImageLibrary from 'react-fb-image-grid-wo-css';
import FacebookEmoji from 'app/components/FacebookEmoji';
import FbImageLibrary from 'app/components/ImageGrid';
// import FbImageLibrary from 'react-fb-image-grid';
import {feedImageUrl, feedImageUrls} from 'app/utils/urlHelper';
import {gridLayout, gridLayoutNoOfCol, gridLayoutNoOfRow} from 'app/utils/helper';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

function Images2(props) {
  const classes = useStyles(props);
  const {images, post} = props;



  const [modal, setModal] = useState(false);
  const [countFrom, setCountFrom] = useState(props.countFrom > 0 && props.countFrom < 5 ? props.countFrom : 5);
  const [conditionalRender, setConditionalRender] = useState(false);
  const [index, setIndex] = useState(null);



  function openModal(index) {
    const {onClickEach, images} = props;

    if(onClickEach) {
      return onClickEach({src: images[index], index})
    }

    // this.setState({modal: true, url: images[index], index})
    setModal(true);
    setIndex(index);

  }

  function onClose() {
    setModal(false);
  }

  function renderOne() {
    const overlay = images.length > countFrom && countFrom == 1 ? renderCountOverlay(true) : renderOverlay();

    return  <Grid>
        <Grid item xs={12} md={12} className={`border height-one background`} onClick={openModal.bind(this, 0)} style={{position: 'relative', height: '100%', overflow: 'hidden'}}>
          {/*{overlay}*/}
          <img src={`${images[0]}`} style={{position: 'relative', top: '50%', width: '100%'}}/>
        </Grid>
    </Grid>;
  }

  function renderTwo() {
    const overlay = images.length > countFrom && [2, 3].includes(+countFrom) ? renderCountOverlay(true) : renderOverlay();
    const condition = [3, 4].includes(images.length) || images.length > +countFrom && [3, 4].includes(+countFrom);

    return <Grid>
        <Grid item xs={6} md={6} className="border height-two background" onClick={openModal.bind(this, condition ? 1 : 0)} style={{background: `url(${condition ? images[1] : images[0]})`}}>
          {renderOverlay()}
        </Grid>
        <Grid item xs={6} md={6} className="border height-two background" onClick={openModal.bind(this, condition ? 2 : 1)} style={{background: `url(${condition ? images[2] : images[1]})`}}>
          {overlay}
        </Grid>
    </Grid>;
  }

  function renderThree(more) {
    const overlay = !countFrom || countFrom > 5 || images.length > countFrom && [4, 5].includes(+countFrom) ? renderCountOverlay(true) : renderOverlay(conditionalRender ? 3 : 4);
    const condition = images.length == 4 || images.length > +countFrom && +countFrom == 4;

    return <Grid className="flex">
        <Grid item xs={4} md={4} className="border height-three background" onClick={openModal.bind(this, condition ? 1 : 2)}  style={{position: 'relative', height: '100%', overflow: 'hidden'}}>
          {/*{renderOverlay(condition ? 1 : 2)}*/}
          <img src={`${condition ? images[1] : images[2]}`} style={{position: 'relative', top: '50%', width: '100%'}}/>
        </Grid>
        <Grid item xs={4} md={4} className="border height-three background" onClick={openModal.bind(this, condition ? 2 : 3)}  style={{position: 'relative', height: '100%', overflow: 'hidden'}}>
          {/*{renderOverlay(condition ? 2 : 3)}*/}
          <img src={`${condition ? images[2] : images[3]}`} style={{position: 'relative', top: '50%', width: '100%'}}/>
        </Grid>
        <Grid item xs={4} md={4} className="border height-three background" onClick={openModal.bind(this, condition ? 3 : 4)}  style={{position: 'relative', height: '100%', overflow: 'hidden'}}>
          {/*{overlay}*/}
          <img src={`${images[3]}`} style={{position: 'relative', top: '50%', width: '100%'}}/>
        </Grid>
    </Grid>;
  }

  function renderOverlay(id) {
    const {hideOverlay, renderOverlay, overlayBackgroundColor} = props;

    if(hideOverlay) {
      return false
    }

    return [
      <div key={`cover-${id}`} className="cover slide" style={{backgroundColor: overlayBackgroundColor}}></div>,
      <div key={`cover-text-${id}`} className="cover-text slide animate-text"  style={{fontSize: '100%'}}>
        {/*{renderOverlay()}*/}
      </div>
    ]
  }

  function renderCountOverlay(more) {
    const extra = images.length - (countFrom && countFrom > 5 ? 5 : countFrom);

    return [more && <div key="count" className="cover"></div>, more && <div key="count-sub" className="cover-text" style={{fontSize: '200%'}}><p>+{extra}</p></div>]
  }

  if(!images){
    return null;
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {images.map((image) => (
          <GridListTile key={image} cols={image.featured ? 2 : 1} rows={image.featured ? 2 : 1}>
            <img src={image} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );



  // return (
  //   <div className="grid-container">
  //     {[1, 3, 4].includes(images.length)  && renderOne()}
  //     {images.length >= 2 && images.length != 4 && renderTwo()}
  //     {images.length >= 4 && renderThree()}
  //
  //     {modal && <Modal onClose={onClose} index={index} images={images}/>}
  //   </div>
  // );
}

export default Images2;
