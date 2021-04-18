import config from '../config/config';
import {epochToPath} from './helper';


export function buildPartyUrl(party) {
  return `/${party.partyType.toLowerCase()}/${party.id}/images/${party.avatar}`;
};

export function buildUserAvatar(party) {
  const id = party.userId?party.userId:party.id
  return `${config.CDN}/user/${id}/images/${party.avatar}`;
};


export function buildPartyAvatarUrl(party) {
  if(!party || !party.partyType){
    return;
  }

  const partyType = party.partyType=='PERSON'?'user':party.partyType.toLowerCase();
  return `${config.CDN}/${partyType}/${party.id}/images/${party.avatar}`;
};



export function buildPartyCoverUrl(party) {
  let coverImageUrl = (party.cover)? party.cover:"cover1.png";
  const partyType = party.partyType=='PERSON'?'user':party.partyType.toLowerCase();
  let path = (party && party.cover)? (partyType + "/" + party.id + "/covers") : "covers";
  return `${config.CDN}/${path}/${coverImageUrl}`;
};


export function buildGroupImageUrl(group) {
    return `${config.CDN}/${group.partyType.toLowerCase()}/${group.id}/images/${group.avatar}`;
};


export function buildUserImageUrl(user) {
    return `${config.CDN}/${user.partyType.toLowerCase()}/${user.id}/images/${user.imageUrl}`;
};

export function feedImageUrl(id, image, timestamp, size) {
  let path = null;
  if(timestamp && image){

    size = size?size: 'm';
    image = `${config.CDN}/feeds/${epochToPath(timestamp)}/${id}/${size}/${image}`;

  }
  return image;
};


export function feedImageUrls(id, images, timestamp, size) {
  let path = null;
  let res = [];
  size = size?size: 'm';
  if(timestamp && images){

    images.forEach(el => {
      res.push(`${config.CDN}/feeds/${epochToPath(timestamp)}/${id}/${size}/${el}`);
    })
  }

  return res;
};

export function categoryImageUrl(category) {
  return `${config.CDN}/category/${category.id}/${category.icon}`;
};
