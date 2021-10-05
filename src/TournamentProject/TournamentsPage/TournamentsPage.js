import classes from './TournamentsPage.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NewTournamentModal from './NewTournamentModal/NewTournamentModal';
import { MapList } from '../MapList/MapList';


const TournamentsPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModalHandler = () => {
        setIsModalOpen(!isModalOpen)
    }

    const tournments = MapList.map(e => e.name)

   

    let isTournamentOngoing = false

    let output = (<div>
        <div className={ classes.ListDiv}>
            <ol className={ classes.List} >
                { tournments.map(e => <li  key={e} className={ classes.ListItem}><Link to={'/' + e}><button >{e}</button></Link></li>) }
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
