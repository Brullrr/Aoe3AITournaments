import classes from './StandingsPage.module.css';
import { Link } from 'react-router-dom';
import backgroundHolder from '../../Images/HomepageBackground.jpg'

import Sweden from '../../Images/Flags/Sweden.png';
import Richard from '../../Images/Flags/Richard.png';
import America from '../../Images/Flags/America.png';
import Inca from '../../Images/Flags/Peru.png';
import Japan from '../../Images/Flags/Japan.png';
import India from '../../Images/Flags/India.png';
import China from '../../Images/Flags/China.png';
import Aztec from '../../Images/Flags/Brazil.png';
import Lakota from '../../Images/Flags/Canada.png';
import Haudenoshaunee from '../../Images/Flags/Ghana.png';
import Hausa from '../../Images/Flags/Egypt.png';
import Ethiopia from '../../Images/Flags/Kenya.png';
import France from '../../Images/Flags/France.png';
import UK from '../../Images/Flags/UK.png';
import Spain from '../../Images/Flags/Spain.png';
import Ottoman from '../../Images/Flags/Turkey.png';
import Russia from '../../Images/Flags/Russia.png';
import Dutch from '../../Images/Flags/Norway.png';
import Germany from '../../Images/Flags/Germany.png';
import Portugal from '../../Images/Flags/Vietnam.png';
import { React, useState } from 'react';


const dummyCountriesAndData = [
    {
        country: 'Richard',
        wins: 1,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 525,
        background: backgroundHolder,
        flag: Richard,
        rank: 1
    },
    {
        country: 'Spanish',
        wins: 0,
        losses: 1,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 475,
        background: backgroundHolder,
        flag: Spain,
        rank: 1
    },
    {
        country: 'Aztec',
        wins: 1,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 525,
        background: backgroundHolder,
        flag: Aztec,
        rank: 1
    },
    {
        country: 'Haudenoshaunee',
        wins: 0,
        losses: 1,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 475,
        background: backgroundHolder,
        flag: Haudenoshaunee,
        rank: 1
    },
    {
        country: 'Lakota',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: Lakota,
        rank: 1
    },
    {
        country: 'Japanese',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: Japan,
        rank: 1
    },
    {
        country: 'Chinese',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: China,
        rank: 1
    },
    {
        country: 'French',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: France,
        rank: 1
    },
    {
        country: 'Indians',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: India,
        rank: 1
    },
    {
        country: 'Americans',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: America,
        rank: 1,
        
    },
    {
        country: 'Hausa',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: Hausa,
        rank: 1
    },
    {
        country: 'British',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: UK,
        rank: 1
    },
    {
        country: 'Swedish',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: Sweden,
        rank: 1
    },
    {
        country: 'Incan',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: Inca,
        rank: 1
    },
    {
        country: 'Ethiopians',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: Ethiopia,
        rank: 1
    },
    {
        country: 'Portuguese',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: Portugal,
        rank: 1
    },
    {
        country: 'Germans',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: Germany,
        rank: 1
    },
    {
        country: 'Russians',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: Russia,
        rank: 1
    },
    {
        country: 'Ottomans',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: Ottoman,
        rank: 1
    },
    {
        country: 'Dutch',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 500,
        background: backgroundHolder,
        flag: Dutch,
        rank: 1
    },
];

    const dummyDataSorted = dummyCountriesAndData.sort((a,b) => {
        let keyA = a.elo;
        let keyB = b.elo;
        let result = ''

        if(keyA < keyB) result = 1;
        if(keyA > keyB) result = -1;

        return result
    });

    


const StandingsPage = () => {


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
                            <p> <strong>Rank:</strong> {e.rank}  <strong>ELO:</strong> {e.elo}</p>
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
            
            {modalIsOpen ? modal : <div className={classes.Holder}>
                <div >
                    <ul className={classes.RankHolder}>
                        {dummyDataSorted.map((e, index) => <li><p>{index+1}</p><button 
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