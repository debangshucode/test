var noteCounter = 5; // Number of notes initially displayed

function showMoreNotes() {
    var hiddenNotes = document.querySelectorAll('.sub_notes[style="display: none;"]');
    var visibleCount = 0;
    
    for (var i = 0; i < hiddenNotes.length && visibleCount < 5; i++) {
        var note = hiddenNotes[i];
        var subjectMatch = subjectFilter.value === 'none' || note.id === subjectFilter.value;
        var semesterMatch = semesterFilter.value === 'none' || note.dataset.semester === semesterFilter.value;

        if (subjectMatch && semesterMatch) {
            note.style.display = 'block';
            visibleCount++;
        }
    }
}


function showLessNotes() {
    var visibleNotes = document.querySelectorAll('.sub_notes[style="display: block;"]');
    var hiddenCount = 0;
    
    for (var i = visibleNotes.length - 1; i >= 0 && hiddenCount < 5; i--) {
        var note = visibleNotes[i];
        var subjectMatch = subjectFilter.value === 'none' || note.id === subjectFilter.value;
        var semesterMatch = semesterFilter.value === 'none' || note.dataset.semester === semesterFilter.value;

        if (subjectMatch && semesterMatch) {
            note.style.display = 'none';
            hiddenCount++;
        }
    }
    noteCounter -= hiddenCount;
}


function resetNoteCounter() {
    noteCounter = 5; // Reset note counter to 5 when filters change
}

// Initially hide all notes except the first five
document.addEventListener('DOMContentLoaded', function() {
    var allNotes = document.querySelectorAll('.sub_notes');
    for (var i = 5; i < allNotes.length; i++) {
        allNotes[i].style.display = 'none';
    }
});


const subjectFilter = document.getElementById('subjectFilter');
const semesterFilter = document.getElementById('semesterFilter');
const allNotes = document.querySelectorAll('.sub_notes');

subjectFilter.addEventListener('change', filterNotes);
semesterFilter.addEventListener('change', filterNotes);

function filterNotes() {
    
    const selectedSubject = subjectFilter.value;
    const selectedSemester = semesterFilter.value;
    let visibleCount = 0;

    for (let i = 0; i < allNotes.length; i++) {
        const note = allNotes[i];
        const subjectMatch = selectedSubject === 'none' || note.id === selectedSubject;
        const semesterMatch = selectedSemester === 'none' || note.dataset.semester === selectedSemester;

        if (subjectMatch && semesterMatch) {
            if (visibleCount  < 5) {
                note.style.display = 'block';
                visibleCount ++;
            } else {
                note.style.display = 'none';
            }
        } else {
            note.style.display = 'none';
        }
    }
}
        var sidemenu = document.getElementById("sidemenu");
        function openmenu() {
            sidemenu.style.right = "0";
        }
        function closemenu() {
            sidemenu.style.right = "-200px";
        }