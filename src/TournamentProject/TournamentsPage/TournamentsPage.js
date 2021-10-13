import classes from './TournamentsPage.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NewTournamentModal from './NewTournamentModal/NewTournamentModal';
import { useSelector } from 'react-redux';


const TournamentsPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModalHandler = () => {
        setIsModalOpen(!isModalOpen)
    }

    const isTournamentOngoing = useSelector(state => state.tournamentsSlice.ongoingTournament)

    const tournments = useSelector(state => state.tournamentsSlice.mapList).map(e => e)


    let output = (<div>
        <div className={ classes.ListDiv}>
            <ol className={ classes.List} >
                { tournments.map(e => e.finished ? <li  key={e.name} className={ classes.ListItem}><Link to={'/' + e.name}><button >{e.name}</button></Link></li> : null)  }
            </ol>
        </div>


    {isTournamentOngoing ? null : <button onClick={toggleModalHandler} className={classes.AddButton}>add new Tournament</button>}
    </div>)

    if(isModalOpen) {
        output = <NewTournamentModal clicked={(value) => {
            toggleModalHandler()
        }} />
    }


    return (

        <div className={classes.Body}>
            <Link to='/'><button className={classes.HomeButton}>Home</button> </Link>
            {output}</div>
    )
}

export default TournamentsPage;
