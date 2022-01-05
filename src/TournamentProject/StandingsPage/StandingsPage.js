import classes from './StandingsPage.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { React, useState } from 'react';


const StandingsPage = () => {

    const countryData = useSelector( state => [...state.countrySlice])

    const dataSorted = countryData.sort((a,b) => {
        let keyA = a.elo;
        let keyB = b.elo;
        let result = 1

        if(keyA < keyB) result = 1;
        if(keyA > keyB) result = -1;

        return result
    });

    const [modalIsOpen, setModalIsOpen] = useState(false)

    let [modal, setModal] = useState('')

    const closeModalHandler = () => {
        setModalIsOpen(false)
    }

    const openCountryProfileHandler = (e) => {
        
        
        setModal(<div className={classes.ModalBody}>
                    <div className={classes.Backdrop} onClick={closeModalHandler}></div>
                    <div className={classes.Modal} style={{
                        backgroundImage: 'url(' + e.background + ')',

                    }} >
                        
                        <div className={classes.Flag}>
                            <img alt='flag' src={e.flag}/>
                        </div>

                        <div className={classes.Content}>
                            <p className={classes.ContentCountryName}>{e.country}</p>
                            <p> <strong>ELO:</strong> {e.elo}</p>
                            <p>Wins: {e.wins}  Losses: {e.losses}</p>
                            <div className={classes.WinBar} style={{
                                background: 'linear-gradient( to right, green, rgb(71, 187, 71)'+ ((e.wins/(e.wins+e.losses)).toFixed(2)*100) +  '%, salmon ' + ((e.wins/(e.wins+e.losses)).toFixed(2)*100) +  '%, red)'
                            }}>{(e.wins/(e.wins+e.losses)).toFixed(2)*100}%</div>
                        </div>

                        <div className={classes.Medals}>   
                            <p className={classes.MedalName}>Gold</p>                        
                            <p className={classes.MedalName}>Silver</p>                        
                            <p className={classes.MedalName}>Bronze</p>                        
                            <p className={classes.MedalContainer}> {Array(e.gold).fill(<div className={classes.GoldMedal} />)}</p>
                            <p className={classes.MedalContainer}> {Array(e.silver).fill(<div className={classes.SilverMedal} />)}</p>
                            <p className={classes.MedalContainer}> {Array(e.bronze).fill(<div className={classes.BronzeMedal} />)}</p>
                        </div>
                    </div>
                </div>)



        setModalIsOpen(true)
    }

    return (
        <div className={classes.Body}>
            <Link to='/'>
                <button className={classes.HomeButton}>Home</button>
            </Link>
            <Link to='/TeamScores'>
                <button className={classes.TeamButton}>Teams</button>
            </Link>
            
            {modalIsOpen ? modal : <div className={classes.Holder}>
                <div >
                    <ul className={classes.RankHolder}>
                        {dataSorted.map((e, index) => <li><p>{index+1}</p><button 
                        onClick={() => {openCountryProfileHandler(e)}}
                        className={classes.FlagButton} 
                        style={{
                            backgroundImage: 'url(' + e.flag + ')'
                        }}></button></li>)}
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default StandingsPage;