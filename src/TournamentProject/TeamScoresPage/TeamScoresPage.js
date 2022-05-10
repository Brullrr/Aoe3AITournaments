import classes from './TeamScoresPage.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { React, useState } from 'react';
import AfricaImage from '../../Images/Flags/Africa.PNG';
import NorthAmericaImage from '../../Images/Flags/NorthAmerica.PNG';
import LatinAmericaImage from '../../Images/Flags/LatinAmerica.PNG';
import LatinImage from '../../Images/Flags/Latin.PNG';
import GermanicImage from '../../Images/Flags/Germanic.PNG';
import AsiaImage from '../../Images/Flags/Asia.PNG';



const TeamScoresPage = () => {

    const countryData = useSelector( state => [...state.countrySlice])

    

    const teamData = [
        {
            teamName: 'Africa',
            teamWins: 0,
            teamLosses: 0,
            teamElo: 0,
            teamFlag: AfricaImage
        },
        {
            teamName: 'Asia',
            teamWins: 0,
            teamLosses: 0,
            teamElo: 0,
            teamFlag: AsiaImage
        },
        {
            teamName: 'Latin',
            teamWins: 0,
            teamLosses: 0,
            teamElo: 0,
            teamFlag: LatinImage
        },
        {
            teamName: 'Germanic',
            teamWins: 0,
            teamLosses: 0,
            teamElo: 0,
            teamFlag: GermanicImage
        },
        {
            teamName: 'NorthAmerica',
            teamWins: 0,
            teamLosses: 0,
            teamElo: 0,
            teamFlag: NorthAmericaImage
        },
        {
            teamName: 'LatinAmerica',
            teamWins: 0,
            teamLosses: 0,
            teamElo: 0,
            teamFlag: LatinAmericaImage
        },
    ]


    countryData.forEach( e => {
        console.log(e.team)
        switch (e.team) {
            case 'Africa':
                teamData[0].teamElo = teamData[0].teamElo + e.elo;
                teamData[0].teamWins = teamData[0].teamWins + e.wins;
                teamData[0].teamLosses = teamData[0].teamLosses + e.losses;
                break;
                case 'Asia':
                teamData[1].teamElo = teamData[1].teamElo + e.elo;
                teamData[1].teamWins = teamData[1].teamWins + e.wins;
                teamData[1].teamLosses = teamData[1].teamLosses + e.losses;
                break;
                case 'Latin':
                teamData[2].teamElo = teamData[2].teamElo + e.elo;
                teamData[2].teamWins = teamData[2].teamWins + e.wins;
                teamData[2].teamLosses = teamData[2].teamLosses + e.losses;
                break;
                case 'Germanic':
                teamData[3].teamElo = teamData[3].teamElo + e.elo;
                teamData[3].teamWins = teamData[3].teamWins + e.wins;
                teamData[3].teamLosses = teamData[3].teamLosses + e.losses;
                break;
                case 'NorthAmerica':
                teamData[4].teamElo = teamData[4].teamElo + e.elo;
                teamData[4].teamWins = teamData[4].teamWins + e.wins;
                teamData[4].teamLosses = teamData[4].teamLosses + e.losses;
                break;
                case 'LatinAmerica':
                teamData[5].teamElo = teamData[5].teamElo + e.elo;
                teamData[5].teamWins = teamData[5].teamWins + e.wins;
                teamData[5].teamLosses = teamData[5].teamLosses + e.losses;
                break;
        
            default:
                break;
        }
    })

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
                        backgroundImage: 'url(' + e.teamFlag + ')',

                    }} >
                        
                        

                        <div className={classes.Content}>
                        <p>{e.teamName}</p>
                        <p>Wins: {e.teamWins}</p>
                        <p>Losses: {e.teamLosses}</p>
                        <p>Win Percentage: {Math.floor((e.teamWins)/(e.teamLosses + e.teamWins)*100)} %</p>
                        
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
                <div className={classes.RegionHolder} >
                
                
                    <div style={{
                        height: (60*( ((teamData[0].teamElo/4)*3) - 2500) /1000) + 'vh',
                        marginTop:  60 - (60*( ((teamData[0].teamElo/4)*3) - 2500) /1000) +  'vh'

                    }} >Africa:<br/> { teamData[0].teamElo/4}<div className={classes.WinBar} style={{
                        background: 'linear-gradient( to right, green, rgb(71, 187, 71)'+ ((teamData[0].teamWins/(teamData[0].teamWins+teamData[0].teamLosses)).toFixed(2)*100) +  '%, salmon ' + ((teamData[0].teamWins/(teamData[0].teamWins+teamData[0].teamLosses)).toFixed(2)*100) +  '%, red)',
                        height: '50px'
                    }}>{(teamData[0].teamWins/(teamData[0].teamWins+teamData[0].teamLosses)).toFixed(2)*100}%</div></div>
                

                

                
                <div style={{
                    height: (60*( ((teamData[1].teamElo/3)*3) - 2500) /1000) + 'vh',
                    marginTop:  60 - (60*( ((teamData[1].teamElo/3)*3) - 2500) /1000) +  'vh'
                }}>Asia: <br/> {teamData[1].teamElo/3} 
                    <div className={classes.WinBar} style={{
                                background: 'linear-gradient( to right, green, rgb(71, 187, 71)'+ ((teamData[1].teamWins/(teamData[1].teamWins+teamData[1].teamLosses)).toFixed(2)*100) +  '%, salmon ' + ((teamData[1].teamWins/(teamData[1].teamWins+teamData[1].teamLosses)).toFixed(2)*100) +  '%, red)',
                                height: '50px'
                            }}>{(teamData[1].teamWins/(teamData[1].teamWins+teamData[1].teamLosses)).toFixed(2)*100}%</div>
                </div>

                <div style={{
                    height: (60*( ((teamData[2].teamElo/4)*3) - 2500) /1000) + 'vh',
                    marginTop:  60 - (60*( ((teamData[2].teamElo/4)*3) - 2500) /1000) +  'vh'
                }}>Latin:<br/> {teamData[2].teamElo/4}
                <div className={classes.WinBar} style={{
                                background: 'linear-gradient( to right, green, rgb(71, 187, 71)'+ ((teamData[2].teamWins/(teamData[2].teamWins+teamData[2].teamLosses)).toFixed(2)*100) +  '%, salmon ' + ((teamData[2].teamWins/(teamData[2].teamWins+teamData[2].teamLosses)).toFixed(2)*100) +  '%, red)',
                                height: '50px'
                            }}>{(teamData[2].teamWins/(teamData[2].teamWins+teamData[2].teamLosses)).toFixed(2)*100}%</div>
                </div>

                <div style={{
                    height: (60*( ((teamData[3].teamElo/4)*3) - 2500) /1000) + 'vh',
                    marginTop:  60 - (60*( ((teamData[3].teamElo/4)*3) - 2500) /1000) +  'vh'
                }}>Germanic:<br/> {teamData[3].teamElo/4  }
                <div className={classes.WinBar} style={{
                                background: 'linear-gradient( to right, green, rgb(71, 187, 71)'+ ((teamData[3].teamWins/(teamData[3].teamWins+teamData[3].teamLosses)).toFixed(2)*100) +  '%, salmon ' + ((teamData[3].teamWins/(teamData[3].teamWins+teamData[3].teamLosses)).toFixed(2)*100) +  '%, red)',
                                height: '50px'
                            }}>{(teamData[3].teamWins/(teamData[3].teamWins+teamData[3].teamLosses)).toFixed(2)*100}%</div>
                </div>

                <div style={{
                    height: (60*( ((teamData[4].teamElo/3)*3) - 2500) /1000) + 'vh',
                    marginTop:  60 - (60*( ((teamData[4].teamElo/3)*3) - 2500) /1000) +  'vh'
                }}>NorthAmerica:<br/> {teamData[4].teamElo/3}
                <div className={classes.WinBar} style={{
                                background: 'linear-gradient( to right, green, rgb(71, 187, 71)'+ ((teamData[4].teamWins/(teamData[4].teamWins+teamData[4].teamLosses)).toFixed(2)*100) +  '%, salmon ' + ((teamData[4].teamWins/(teamData[4].teamWins+teamData[4].teamLosses)).toFixed(2)*100) +  '%, red)',
                                height: '50px'
                            }}>{((teamData[4].teamWins/(teamData[4].teamWins+teamData[4].teamLosses))*100 ).toFixed(0)}%</div>
                </div>

                <div style={{
                    height: (60*( ((teamData[5].teamElo/3)*3) - 2500) /1000) + 'vh',
                    marginTop:  60 - (60*( ((teamData[5].teamElo/3)*3) - 2500) /1000) +  'vh'
                }}>LatinAmerica:<br/> {teamData[5].teamElo/3}
                <div className={classes.WinBar} style={{
                                background: 'linear-gradient( to right, green, rgb(71, 187, 71)'+ ((teamData[5].teamWins/(teamData[5].teamWins+teamData[5].teamLosses)).toFixed(2)*100) +  '%, salmon ' + ((teamData[5].teamWins/(teamData[5].teamWins+teamData[5].teamLosses)).toFixed(2)*100) +  '%, red)',
                                height: '50px'
                            }}>{(teamData[5].teamWins/(teamData[5].teamWins+teamData[5].teamLosses)).toFixed(2)*100}%</div>
                </div>


                    <div className={classes.FlagButton} onClick={() => {openCountryProfileHandler(teamData[0])}} style={{
                        backgroundImage: 'url(' + AfricaImage + ')'
                    }}> 

                    </div>

                    <div className={classes.FlagButton} onClick={() => {openCountryProfileHandler(teamData[1])}} style={{
                        backgroundImage: 'url(' + AsiaImage + ')'
                    }}> 

                    </div>
                    
                    <div className={classes.FlagButton} onClick={() => {openCountryProfileHandler(teamData[2])}} style={{
                        backgroundImage: 'url(' + LatinImage + ')'
                    }}> 

                    </div>
                    <div className={classes.FlagButton} onClick={() => {openCountryProfileHandler(teamData[3])}} style={{
                        backgroundImage: 'url(' + GermanicImage + ')'
                    }}> 

                    </div>
                    <div className={classes.FlagButton} onClick={() => {openCountryProfileHandler(teamData[4])}} style={{
                        backgroundImage: 'url(' + NorthAmericaImage + ')'
                    }}> 

                    </div>
                    <div className={classes.FlagButton} onClick={() => {openCountryProfileHandler(teamData[5])}} style={{
                        backgroundImage: 'url(' + LatinAmericaImage + ')'
                    }}> 

                    </div>
                    
                    


                    {/* <ul className={classes.RankHolder}>

                        {dataSorted.map((e, index) => <li><p>{index+1}</p><button 
                        onClick={() => {openCountryProfileHandler(e)}}
                        className={classes.FlagButton} 
                        style={{
                            backgroundImage: 'url(' + e.flag + ')'
                        }}></button></li>)}


                    </ul> */}
                </div>
            </div>}
        </div>
    )
}

export default TeamScoresPage;