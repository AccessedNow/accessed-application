import config from '../config/config';


export function buildPartyUrl(party) {
    return `/${party.partyType.toLowerCase()}/${party.id}`;
};


export function buildCoverImageUrl(party) {
    let coverImageUrl = (party.partyType.cover)? party.cover:"cover1.png";

    let path = (party.coverImage)? (type.toLowerCase() + "/" + party.id + "/covers") : "covers";
    return `${config.CDN}/${path}/${coverImageUrl}`;
};


export function buildGroupImageUrl(group) {
    return `${config.CDN}/${group.partyType.toLowerCase()}/${group.id}/images/${group.avatar}`;
};


export function buildUserImageUrl(user) {
    return `${config.CDN}/${user.partyType.toLowerCase()}/${user.id}/images/${user.imageUrl}`;
};

