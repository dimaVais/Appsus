import { utilService } from '../../../../services/utils-service.js'
import { storageService } from '../../../../services/storage-service.js'
import { eventBus } from '../../../../services/event-bus-service.js'


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
    { id: utilService.makeId(), from: 'Moshe', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: new Date(Date.now()).toLocaleString() },
    { id: utilService.makeId(), from: 'Moshe', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: new Date(Date.now()).toLocaleString() },
    { id: utilService.makeId(), from: 'Moshe', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: new Date(Date.now()).toLocaleString() },
    { id: utilService.makeId(), from: 'Moshe', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: new Date(Date.now()).toLocaleString() },
    { id: utilService.makeId(), from: 'Moshe', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: new Date(Date.now()).toLocaleString() },
    { id: utilService.makeId(), from: 'Haim', subject: 'Answer the Door', body: 'Pick up!', isRead: false, sentAt: new Date(Date.now()).toLocaleString() }

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
        msg:'Mail Status changed',
        type: 'success'
    })
}
