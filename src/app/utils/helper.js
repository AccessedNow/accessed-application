
export function epochToDate(timestamp) {
  console.log('time', timestamp)
    var date = new Date(timestamp); // The 0 there is the key, which sets the date to the epoch
    // d.setUTCSeconds(timestamp);
    return date;
};


export function dateDifference(timestamp) {
    let date = new Date(timestamp); // The 0 there is the key, which sets the date to the epoch
    let currentDate = new Date();
    let diffTime = Math.abs(currentDate - date);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};

//not done
export function dateDiff(timestamp){
  var d = Math.abs(timestamp - new Date().getTime()) / 1000;                 // delta
  var r = {};                                                                // result
  var s = {                                                                  // structure
    yr: 31536000,
    mo: 2592000,
    w: 604800, // uncomment row to ignore
    d: 86400,   // feel free to add your own row
    h: 3600,
    m: 60,
    s: 1
  };

  Object.keys(s).forEach(function(key){
    r[key] = Math.floor(d / s[key]);
    d -= r[key] * s[key];
    return d;
  });

  return null;
};



export function epochToPath(timestamp) {


  let date = new Date(0); // The 0 there is the key, which sets the date to the epoch
  date.setUTCSeconds(timestamp);
  date.setTime( date.getTime() + date.getTimezoneOffset()*60*1000 );

  //'America/Los_Angeles, to default to one format for S3 path
  var options = { year: 'numeric', month: 'numeric', day: 'numeric', timezone: 'America/Los_Angeles'};

  //vi-VN, to default to DD/MM/YYYY
  let intlDate = new Intl.DateTimeFormat('vi-VN', options).format(date)
  return intlDate.split('/').reverse().join('/');
};



export function changeTimezone(date, ianatz) {

  // suppose the date is 12:00 UTC
  var invdate = new Date(date.toLocaleString('en-US', {
    timeZone: ianatz
  }));

  // then invdate will be 07:00 in Toronto
  // and the diff is 5 hours
  var diff = date.getTime() - invdate.getTime();

  // so 12:00 in Toronto is 17:00 UTC
  return new Date(date.getTime() + diff);

}

export function gridLayoutNoOfCol(layout){
  let col = 1;
  switch (layout){
    case 1:
      col = 1;
      break;
    case 2:
      col = 1;
      break;
    case 3:
      col = 1;
      break;
    case 4:
      col = 2;
      break;
    case 5:
      col = 2;
      break;
    case 6:
      col = 2;
      break;
    case 7:
      col = 2;
      break;
    case 8:
      col = 2;
      break;
    case 9:
      col = 3;
    case 10:
      col = 2;
      break;
  }

  return col;
}

export function gridLayoutNoOfRow(layout){
  let col = 1;
  if(layout>2){
    col=2;
  }

  return col;
}


export function gridLayout(layout, idx){
  let col = 1;
  switch (layout){
    case 1:
      col = 1;
      break;
    case 2:
      col = 1;
      break;
    case 3:
      col = 1;
      break;
    case 4:
      if(idx==1){col = 1} else{col = Math.ceil(layout/idx);}
      break;
    case 5:
      if(idx==1){col = 1} else{col = 2}
      break;
    case 6:
      if(idx==1){col = 1} else{col=idx==2?1:2}
      break;
    case 7:
      if(idx==1){col = 1} else{col=idx==2?1:idx==3?1:2}
      break;
    case 8:
      if(idx==1){col = 1} else{col=2}
      break;
    case 9:
      if(idx==1){col = 1} else{col=idx==2?1:idx==3?2:3}
    case 10:
      if(idx==1){col = 1} else{col=idx==2?1:idx==3?1:2}
      break;
  }
  console.log(idx, col);

  return col;
}


export function formatNumberShortHand(num) {
  if(Math.abs(num) > 999) {
    return Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k'
  } else {
    return Math.sign(num)*Math.abs(num);
  }
}
