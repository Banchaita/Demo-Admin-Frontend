import moment from "moment"


const baseUrl = ' http://localhost:3003/api/v1/';
const fileUrl = 'http://localhost:3003/files/';


const getCurrentTimeStamp = () => {
    let currentTime = new Date().getTime();
    let tzOffset = new Date().getTimezoneOffset();
    return Math.round(new Date(currentTime + tzOffset).getTime() / 1000);
}

export { baseUrl,getCurrentTimeStamp,fileUrl}

export const getDiff = (time) => {
    let resolutionTime = moment().unix() - time
    if (resolutionTime < 60) {
        return 'just now'
    }
    else if ((resolutionTime / 60) < 60) {
        return parseInt(resolutionTime / 60) + 'm ago'
    }
    else if (((resolutionTime / 60) / 60) < 24) {
        return parseInt(resolutionTime / 60 / 60) + 'h ago'
    }
    else if ((((resolutionTime / 60) / 60) / 24) < 30) {
        return parseInt(resolutionTime / 60 / 60 / 24) + 'd ago'
    }
    else if (((((resolutionTime / 60) / 60) / 24) / 30) < 12) {
        return Math.round((((resolutionTime / 60) / 60) / 24) / 30) + "m ago"
    }
    else {
        return Math.round(((((resolutionTime / 60) / 60) / 24) / 30) / 12) + "y ago"
    }
}

export const randomStr = (len, arr) => {
    var digits = arr;
    let OTP = '';
    for (let i = 0; i < len; i++) {
        OTP += digits[Math.floor(Math.random() * arr.length)];
    }
    if (OTP.length < len || OTP.length > len) {
        randomStr(len, arr);
    }
    return (OTP);
}