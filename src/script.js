const deleteBtn = document.querySelector("#deleteTask");

function clearTask() {
    localStorage.removeItem('task');
    console.log('Task has been deleted from localStorage');
}

// Check if the button exists before adding the event listener
if (deleteBtn) {
    deleteBtn.addEventListener("click", clearTask);
} else {
    console.error('Delete button not found!');
}