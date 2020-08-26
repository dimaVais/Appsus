
export const KeepService = {
    query,
    getNoteById,
    addNote

}


function query() {
    return Promise.resolve(notes);
}

function getNoteById(noteId) {
    const note = notes.find(note => note.id === noteId);
    return Promise.resolve(note);
}

function addNote(txt) {
    const note = {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            txt
        }
    }
    notes.push(note);
    return Promise.resolve(notes);
}


var notes = [{
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: makeId(),
        type: "NoteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: makeId(),
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [{
                    txt: "Do that",
                    doneAt: null
                },
                {
                    txt: "Do this",
                    doneAt: 187111111
                }
            ]
        }
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