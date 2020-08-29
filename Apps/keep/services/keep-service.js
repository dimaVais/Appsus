export const KeepService = {
    query,
    getNoteById,
    addTextNote,
    changeText,
    addImgNote,
    addVideoNote,
    removeNote,
    setBackGroundColor,
    addNote,
    setPinnedNote,
    addTodoNote,
    doneAt,
    sendMail

}


function query() {
    return Promise.resolve(notes);
}

function getNoteById(noteId) {
    const note = notes.find(note => note.id === noteId);
    return Promise.resolve(note);
}

function removeNote(noteId) {
    notes = notes.filter(note => note.id !== noteId)
    return Promise.resolve(notes);
}

function addNote(txt, type) {

    switch (type) {
        case 'text':
            return addTextNote(txt)
        case 'image':
            return addImgNote(txt)
        case 'video':
            return addVideoNote(txt)
        case 'todos':
            return addTodoNote(txt)
        case 'mail':
            return sendMail(txt)
        default:
            return addTextNote(txt)
    }

}

function sendMail(txt) {
    console.log('sending mail:' ,txt);
}

function addTextNote(txt) {
    const note = {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            txt
        },
        backgroundColor: '#3b5998'
    }
    notes.push(note);
    return Promise.resolve(notes);
}

function changeText(note, text) {
    note.info.txt = text
}

function addImgNote(text) {
    if (!text.includes('http')) return;
    const note = {
        id: makeId(),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: text,
            txt: ''
        },
        backgroundColor: '#3b5998'
    }
    notes.push(note);
    return Promise.resolve(notes);
}

function addVideoNote(text) {
    if (!text.includes('http')) return;
    let videoId = text.split('=')
    videoId = videoId[1]

    const note = {
        id: makeId(),
        type: "NoteVideo",
        isPinned: true,
        info: {
            url: `https://www.youtube.com/embed/${videoId}`,
            txt: ''
        },
        backgroundColor: '#3b5998'
    }
    notes.push(note);
    return Promise.resolve(notes);

}

function addTodoNote(txt) {
    const tasks = txt.split(',')
    let todos = tasks.map((task) =>
        ({
            id: makeId(),
            text: task,
            doneAt: new Date()
        }));
    let newNote = {
        id: makeId(),
        isPinned: true,
        type: "NoteTodos",
        backgroundColor: '#3b5998',
        info: {
            txt: "TEST 123:",
            todos: todos
        }
    }
    notes.push(newNote);
    return Promise.resolve(notes);

}

function setPinnedNote(note) {
    note.isPinned = !note.isPinned
    return Promise.resolve(notes);
}

function setBackGroundColor(note, color) {
    note.backgroundColor = color
    return Promise.resolve(notes);
}

function doneAt(noteId, todoId) {
    let editedNotes = [...notes];
    const noteIdx = editedNotes.findIndex(note => note.id === noteId)
    const todoIdx = editedNotes[noteIdx].info.todos.findIndex(todo => todo.id === todoId)
    const doneAt = editedNotes[noteIdx].info.todos[todoIdx].doneAt
    editedNotes[noteIdx].info.todos[todoIdx].doneAt = (doneAt) ? null : Date.now();
    notes = editedNotes
}

var notes = [{
        id: makeId(),
        type: "NoteText",
        isPinned: false,
        backgroundColor: '#3b5998',
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: false,
        backgroundColor: '#3b5998',
        info: {
            txt: "Buy eggs for dinner to make egg salad"
        }
    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: 'red',
        info: {
            txt: "Talk to mom"
        }
    },
    {
        id: makeId(),
        type: "NoteImg",
        isPinned: true,
        info: {
            url: "https://thesportsrush.com/wp-content/uploads/2020/07/Kobe-bryant-and-shaq-o-neal.jpg",
            txt: "Shaq and Kobe💔"
        },
        backgroundColor: '#3b5998'

    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: false,
        backgroundColor: '#3b5998',
        info: {
            txt: "Buy Amazon stock when it drops to $1500"
        }
    },
    {

        id: makeId(),
        type: "NoteTodos",
        isPinned: true,
        backgroundColor: '#3b5998',
        info: {
            txt: "Take a woman",
            todos: [{
                    id: makeId(),
                    text: "Take a woman",
                    doneAt: 187111111
                },
                {
                    id: makeId(),
                    text: "Bulid her a home",
                    doneAt: 187111111
                }
            ]
        }
    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: 'purple',
        info: {
            txt: "Tax refund! (important)"
        }
    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: 'green',
        info: {
            txt: "Make a list for the trip"
        }
    }, {
        id: makeId(),
        type: "NoteText",
        isPinned: false,
        backgroundColor: 'green',
        info: {
            txt: "Call the babysitter"
        }
    },

    {
        id: makeId(),
        type: "NoteVideo",
        isPinned: true,
        info: {
            url: "https://www.youtube.com/embed/f7e-EFWH3Z4",
            txt: ''
        },
        backgroundColor: '#3b5998'
    }




];



function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}