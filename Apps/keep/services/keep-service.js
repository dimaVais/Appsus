export const KeepService = {
    query,
    getNoteById,
    addTextNote,
    changeText,
    addImgNote,
    addVideoNote,
    removeNote,
    setBackGroundColor,
    addNote

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
    console.log('inservice', notes);
    return Promise.resolve(notes);
}

function addNote(txt, type) {
    
        switch (type) {
            case 'text':
                 return addTextNote(txt)
            case 'image':
                return  addImgNote(txt)
            case 'video':
                 return addVideoNote(txt)
            case 'todos':
                
                break;
            default:
              return  addTextNote(txt)
        }
    
}

function addTextNote(txt) {
    console.log('addTextNote', txt);
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
    const note = {
        id: makeId(),
        type: "NoteImg",
        isPinned: true,
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

// function addTodoNote(text) {

// }

function setBackGroundColor(note, color) {
    note.backgroundColor = color
    console.log('note in service:', note)
    return Promise.resolve(notes);
}


var notes = [{
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: '#3b5998',
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: '#3b5998',
        info: {
            txt: "Buy eggs for dinner to make eggs salad"
        }
    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: '#3b5998',
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
        isPinned: true,
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
            txt: "How was it:",
            todos: [
                { id: makeId(), text: "Do that", doneAt: null },
                { id: makeId(), text: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: '#3b5998',
        info: {
            txt: "Tax refund! (important)"
        }
    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: '#3b5998',
        info: {
            txt: "Make a list for the trip"
        }
    }, {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: '#3b5998',
        info: {
            txt: "Call the babysitter"
        }
    },

    {
        id: makeId(),
        type: "NoteVideo",
        isPinned: true,
        info: {
            url: "https://www.youtube.com/embed/0RyInjfgNc4",
            txt: ''
        },
        backgroundColor: '#3b5998'
    }




    // {
    //     id: makeId(),
    //     type: "NoteTodos",
    //     info: {
    //         label: "How was it:",
    //         todos: [{
    //                 txt: "Do that",
    //                 doneAt: null
    //             },
    //          backgroundColor: '#3b5998',
    //             {
    //                 txt: "Do this",
    //                 doneAt: 187111111
    //             }
    //         ]
    //     }
    // }
];



function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}