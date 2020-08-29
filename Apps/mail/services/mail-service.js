import { utilService } from '../../../services/utils-service.js'
import { storageService } from '../../../services/storage-service.js'
import { eventBus } from '../../../services/event-bus-service.js'


export const mailService = {
    query,
    addMail,
    removeMail,
    updateMailIsRead,
    updateMailNotIsRead,
    getMailById,
    getReadAndUnreadCount
}

const MAIL_KEY = 'MAILS';

var startMails = [
    {
        id: utilService.makeId(),
        from: 'Kim Kardashian',
        subject: 'Would Love to cooperate?',
        body: 'Hey Dima\nI heard you are doing wonderful websites and I would like you to be my main developer.\nWe have lots of projects on the line!\nLet me know if you are interested\nKim',
        isRead: false,
        sentAt: new Date(Date.now()).toLocaleString()
    },
    {
        id: utilService.makeId(),
        from: 'Alon Barak',
        subject: 'Trip Plans',
        body: 'Hey D,\nPlease see below the new trip plan to Africa!\nLooking forward getting your response\nThanks',
        isRead: false,
        sentAt: new Date(Date.now()).toLocaleString()
    },
    {
        id: utilService.makeId(),
        from: 'Jenny',
        subject: 'Missing You!',
        body: ' Hey Dear,\n It\'s been too long since we have met and I miss you!\nLife was ok for me but had not been the same without you\nI want to meet you in Boston next week, let me know what are you up to?\nXOXO\nJenn',
        isRead: false,
        sentAt: new Date(Date.now()).toLocaleString()
    },
    {
        id: utilService.makeId(),
        from: 'Lebron James',
        subject: 'Strive For Greatness',
        body: 'Yo Dawg!\nHeard the new tune and it\'s lit as HELL! Send me a copy next time you have something new',
        isRead: false,
        sentAt: new Date(Date.now()).toLocaleString()
    },
    {
        id: utilService.makeId(),
        from: 'Alex Turner',
        subject: 'Why’d You Only Call Me When You’re High ?',
        body: 'Why’d You Only Call Me When You’re High ?',
        isRead: false,
        sentAt: new Date(Date.now()).toLocaleString()
    }
]

var mails = storageService.loadFromStorage(MAIL_KEY) || startMails;

function query() {
    return Promise.resolve(mails);
}

function addMail(mailData) {
    mails.unshift({
        id: utilService.makeId(),
        from: mailData.from,
        subject: mailData.subject,
        body: mailData.txt,
        isRead: false,
        sentAt: new Date(Date.now()).toLocaleString()
    })
    storageService.saveToStorage(MAIL_KEY, mails);
    eventBusFunction();

}

function removeMail(id) {
    const idxToDelete = mails.findIndex(mail => mail.id === id);
    mails.splice(idxToDelete, 1);
    storageService.saveToStorage(MAIL_KEY, mails);
    eventBusFunction();
}


function updateMailIsRead(id) {
    mails = mails.map(mail => {
        if (mail.id === id && !mail.isRead) {
            mail.isRead = true;

        }
        return mail
    });
    eventBusFunction();
    storageService.saveToStorage(MAIL_KEY, mails);
}


function updateMailNotIsRead(id) {
    mails = mails.map(mail => {
        if (mail.id === id && mail.isRead) {
            mail.isRead = false;
        }
        return mail
    });
    eventBusFunction();
    storageService.saveToStorage(MAIL_KEY, mails);
}

function getMailById(id) {
    const mail = mails.find(mail => mail.id === id);
    return Promise.resolve(mail);
}

function getReadAndUnreadCount() {
    const readMials = mails.filter(mail => mail.isRead);
    const unReadMails = mails.filter(mail => !mail.isRead);
    return { read: readMials.length, unRead: unReadMails.length }
}

function eventBusFunction() {
    eventBus.emit('changeMailRead', {
        msg: 'Mail Status changed',
        type: 'success'
    })
}
