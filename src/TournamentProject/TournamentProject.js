import { Route, HashRouter } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import TournamentsPage from './TournamentsPage/TournamentsPage';
import Brackets from './TournamentsPage/Brackets/Brackets';
import StandingsPage from './StandingsPage/StandingsPage';
import TeamScoresPage from './TeamScoresPage/TeamScoresPage';
import { useSelector } from 'react-redux';


const TournamentProject = () => {

    const tournaments = useSelector(state => state.tournamentsSlice.mapList).map( e => e.name)
    

    return (
        <div>
            <HashRouter>
            <Route exact path='/'>
                <Homepage />
            </Route>

            <Route path='/TournamentsPage'>
                <TournamentsPage />
            </Route>
            
            <Route path='/Standings'>
                <StandingsPage />
            </Route>

            <Route path='/TeamScores'>
                <TeamScoresPage />
            </Route>

            {tournaments.map(e => {
                return (
                    <Route key={e} path={'/' + e}>
                        <Brackets name={e}  />
                    </Route>
                )
            })}
            </HashRouter>

        </div>
    )
};

export default TournamentProject;