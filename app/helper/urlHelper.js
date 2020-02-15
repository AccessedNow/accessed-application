import config from '../config/config';

export function buildCompanyImageUrl(id, image) {
    console.log('id', id, image)
    return `${config.CDN}/company/${id}/images/${image}`;
};
