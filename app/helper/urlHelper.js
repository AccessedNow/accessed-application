import config from '../config/config';


export function buildPartyUrl(party) {
    let partyType = party.partyType;
    let type = partyType=="PERSON"? "USER" : partyType=="ORGANIZATION"? "COMPANY" : "GROUP";
    return `/${type.toLowerCase()}/${party.id}`;
};


export function buildCoverImageUrl(party) {
    let type = party.partyType=='ORGANIZATION'?'COMPANY':'COMPANY';
    let coverImageUrl = (party.coverImageUrl)? party.coverImageUrl:"cover1.png";

    let path = (party.coverImageUrl)? (type.toLowerCase() + "/" + party.id + "/images") : "covers";
    return `${config.CDN}/${path}/${coverImageUrl}`;
};


export function buildGroupImageUrl(group) {
    let type = group.partyType=='ORGANIZATION'?'COMPANY':'COMPANY';
    return `${config.CDN}/${type.toLowerCase()}/${group.id}/images/${group.imageUrl}`;
};


export function buildUserImageUrl(user) {
    let type = user.partyType=='PERSON'?'USER':'USER';
    return `${config.CDN}/${type.toLowerCase()}/${user.id}/images/${user.imageUrl}`;
};

