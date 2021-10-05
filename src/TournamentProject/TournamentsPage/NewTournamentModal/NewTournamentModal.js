import classes from './NewTournamentModal.module.css'

const NewTournamentModal = (props) => {
    console.log('Didthis run?')

    return (
        <div className={classes.Body}>
            <p>Enter Tournament Name</p>
            <input type='text>'  />
            <button onClick={() =>{props.clicked()}}  >Submit</button>
        </div>
    )
}

export default NewTournamentModal