import config from '../config/config';


export function buildCoverImageUrl(item) {
    let type = item.type.toLowerCase();
    let coverImageUrl = (item.coverImageUrl)? item.coverImageUrl:"cover1.png";

    let path = (item.coverImageUrl)? (type + "/" + group.id + "/images") : "covers";
    return `${config.CDN}/${path}/${coverImageUrl}`;
};


export function buildGroupImageUrl(group) {
    let type = group.type.toLowerCase();
    return `${config.CDN}/${type}/${group.id}/images/${group.imageUrl}`;
};

export function buildUserImageUrl(user) {
    let type = user.type=='PERSON'?'USER':'USER';
    return `${config.CDN}/${type.toLowerCase()}/${user.id}/images/${user.imageUrl}`;
};

