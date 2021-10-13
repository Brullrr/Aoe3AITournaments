import classes from './NewTournamentModal.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {tournamentsSliceActions} from '../../../store/tournamentsSlice';



const NewTournamentModal = (props) => {
    const dispatch = useDispatch();
    const tournments = useSelector(state => state.tournamentsSlice.mapList)

    const turnOngoingOn = (e) => dispatch(tournamentsSliceActions.ongoingToTrue(e))

    return (
        <div className={classes.Body}>
            <div className={classes.ListDiv}>
                <ol className={classes.List}>
            {tournments.map(e => !e.finished ? <li  
                                key={e.name} 
                                className={ classes.ListItem}>
                <button 
                    onClick={() =>{
                        props.clicked();
                        turnOngoingOn(e.name)
                        }} 
                >{e.name}</button></li> : null)}
                </ol>
            </div>
        </div>
    )
}

export default NewTournamentModal