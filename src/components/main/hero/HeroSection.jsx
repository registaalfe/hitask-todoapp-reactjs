import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const HeroSection = () => {

    // Initialize variable task for store the value input
    const [task, setTask] = useState('');

    // Initialize listTask is array that holds all the tasks
    const [listTask, setlistTask] = useState([]);

    // Handle form submission to add task
    const saveTask = (e) => {
        e.preventDefault();
        if (task.trim()) {
            const statusTasks = [...listTask, { nameTask: task, completed: false }]; // For joined the task with status completed or nay so you have make another variable
            setlistTask(statusTasks); // Update the listTask with call function setListTask who updated the new statusTasks with newTask
            setTask(''); //Clears the input field, so the user can enter a new task
        }
    };

    // Delete Task function, and index is the position of the task that will be deleted
    const deleteTask = (index) => {

        // Create a new list excluding the task at the specified index
        const updatedTasks = [...listTask];
        updatedTasks.splice(index, 1); // Remove the task at the index

        setlistTask(updatedTasks); // Update the state with the new list
        localStorage.setItem('listTask', JSON.stringify(updatedTasks)); // Update the list in localStorage
    };

    // Try saves the updated task list to localStorage
    useEffect(() => {

        // Check how many data in listTask, if task empty so the value is 0
        if (listTask.length > 0) {

            // Method to save data in localStorage
            localStorage.setItem('listTask', JSON.stringify(listTask)); // Change array to string, because localStorage dont understand the array
        }
    }, [listTask]); // If something happen in this array like user add task, so go to the top with useEffect will run again

    // Try to get data from localStorage
    useEffect(() => {
        const getTasks = JSON.parse(localStorage.getItem('listTask')); // Bcs the data save in string, so i need to convert again and i can show the data in UI
        if (getTasks) {
            setlistTask(getTasks); // If in listTask from call getTask there is some data, so restored from localStorage and displayed on the UI
        }
    }, []);

    return (
        <div className="jumbotron py-3 py-sm-5 py-lg-5">
            <section className="elementor-section elementor-top-section d-flex flex-column w-100 justify-content-center">
                <div>
                    <Container className="elementor-container">
                        <Row className="elementor-content d-flex flex-column justify-content-center">
                            <Col className="elementor-column d-flex justify-content-center">
                                <div className="icon d-flex flex-row py-5">
                                    <img src="./img/icon.png" className="img-icon" alt="icon" />
                                    <h2 className="px-2 text-white">
                                        Hitask
                                    </h2>
                                </div>
                            </Col>
                            <Col className="elementor-column">
                                <form className="d-flex" onSubmit={saveTask}>
                                    <input aria-label="Add Todo Task" value={task} onChange={(e) => setTask(e.target.value)} className="input form-control rounded-3" placeholder="Add Todo Task" type="text" />
                                    <Button className="button rounded-3 ms-2 text-white" type="submit">
                                        <i className="fas fa-fire"></i>
                                    </Button>
                                </form>
                            </Col>
                            <Col className="elementor-column d-flex info_empty justify-content-between px-3">
                                <div className="d-flex flex-row align-items-center justify-content-center text-center">
                                    <span className="text-white">
                                        Task created
                                    </span>
                                    <span className="span-button text-white px-2 d-flex d-inline-flex rounded-4 justify-content-center align-items-center ms-2 text-center">
                                        {listTask.length}
                                    </span>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center text-center">
                                    <span className="text-white">
                                        Completed
                                    </span>
                                    <span className="span-button-completed px-2 text-white d-flex d-inline-flex rounded-4 justify-content-center align-items-center ms-2 text-center">
                                        {listTask.length === 0
                                            ? "0"  // Show "Completed 0" if there are no tasks
                                            : `${listTask.filter(task => task.completed).length} of ${listTask.length}`}  {/* Show completed tasks if there are tasks */}
                                    </span>
                                </div>
                            </Col>

                            {listTask.length === 0 ? (
                                <Col className="elementor-column d-flex illustration_empty justify-content-center">
                                    <div className="d-flex flex-column align-items-center justify-content-center text-center">
                                        <img src="./img/empty_message.png" className="img-empty-message" alt="icon" />
                                        <h2 className="text-white mt-4">Get Started</h2>
                                        <p className="text-white text-opacity-75">Start with your priorities first.</p>
                                    </div>
                                </Col>
                            ) : (
                                <Col className="elementor-column list-tasks mt-4">
                                    <ul className="list-unstyled">
                                        {listTask.map((taskItem, index) => (
                                            <li key={index} className={`task-item mb-3 ${taskItem.completed ? 'task-completed' : ''}`}>
                                                <label className="task-label">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={taskItem.completed} onChange={() => {
                                                        // Toggle task completion
                                                        const updatedTasks = [...listTask];
                                                        updatedTasks[index].completed = !updatedTasks[index].completed;
                                                        setlistTask(updatedTasks);
                                                    }} />
                                                    <form className="form-floating">
                                                        <input
                                                            type="text"
                                                            className="form-control form-list-task py-0"
                                                            id="floatingInputValue" // Use unique IDs for each task
                                                            placeholder="Task"
                                                            value={taskItem.nameTask}
                                                            onChange={(e) => {
                                                                // Update task text while typing
                                                                const updatedTasks = [...listTask];
                                                                updatedTasks[index].nameTask = e.target.value;
                                                                setlistTask(updatedTasks);
                                                            }}
                                                        />
                                                    </form>
                                                </label>
                                                <i
                                                    className="fa-regular fa-trash-can deleteBtn"
                                                    id="deleteTask"
                                                    onClick={() => deleteTask(index)} // Call deleteTask when trash icon is clicked
                                                ></i></li>
                                        ))}
                                    </ul>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    );
};



export default HeroSection;