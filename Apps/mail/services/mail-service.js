import { utilService } from '../../../../services/utils-service.js'
import { storageServie } from '../../../../services/storage-service.js'


export const mailService = {
    query,
    addMail,
    removeMail,
}

const MAIL_KEY = 'MAILS';

var startMails = [
    { id: utilService.makeId(), from: 'Moshe', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utilService.makeId(), from: 'Moshe', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utilService.makeId(), from: 'Moshe', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utilService.makeId(), from: 'Moshe', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utilService.makeId(), from: 'Moshe', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utilService.makeId(), from: 'Haim', subject: 'Answer the Door', body: 'Pick up!', isRead: false, sentAt: 1551133930594 }

]

var mails = storageServie.loadFromStorage(MAIL_KEY) || startMails;

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
        sentAt: Date.now()
    })

    storageServie.saveToStorage(MAIL_KEY, mails)
}

function removeMail(id) {
    const idxToDelete = mails.findIndex(mail => mail.id === id);
    mails.splice(idxToDelete, 1);
    storageServie.saveToStorage(MAIL_KEY, mails);
}
