export const mailService = {
    query
}


var mails =[

    {from: 'Moshe',subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    {from: 'Moshe',subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    {from: 'Moshe',subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    {from: 'Moshe',subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    {from: 'Moshe',subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594}
]

function query(){
    return Promise.resolve(mails);
}