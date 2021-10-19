import { useState } from 'react'
import classes from './Brackets.module.css'
import { Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {tournamentsSliceActions} from '../../../store/tournamentsSlice';
import { countrySliceActions } from '../../../store/countrySlice';
import { useEffect} from 'react'


const Brackets = (props) => {
    const dispatch = useDispatch();

    const [refresh, setRefresh] = useState(0)
    console.log('Brackets.js refresh' + refresh)
    
    let mapList = useSelector(state => state.tournamentsSlice.mapList)
    let countries = useSelector(state => state.countrySlice)
    let tournamentMap = ''
    mapList.map(e => e.name === props.name ? tournamentMap = e : null )
    let ongoing = tournamentMap.finished
    let mapImage = tournamentMap.pathway

    const countryData = useSelector( state => [...state.countrySlice])
    const dataSorted = tournamentMap.setUp;
    //                                          -- Prelims --
    const [prelimStart, setPrelimStart] = useState(true)
    const [setup, setSetup] = useState(tournamentMap.setUp.length > 0)

    if(!setup){
        dispatch(tournamentsSliceActions.setupData({
            map: tournamentMap.name,
            countryData: countryData
        }))
    }


    if(!setup && !tournamentMap.isPrelimsEloUpdated) {
        if(!tournamentMap.isPrelimsEloUpdated) {
            dispatch(tournamentsSliceActions.updateRoundOf16({
                map: tournamentMap.name,
                round: [
                {
                    bracketHolder: dataSorted[0],
                    bracketKey: 9,
                    bracketVictory: false
                },
                {
                    bracketHolder: '',
                    bracketKey: 10,
                    bracketVictory: false
                },
                {
                    bracketHolder: dataSorted[7],
                    bracketKey: 11,
                    bracketVictory: false
                },
                {
                    bracketHolder: dataSorted[8],
                    bracketKey: 12,
                    bracketVictory: false
                },
                {
                    bracketHolder: dataSorted[4],
                    bracketKey: 13,
                    bracketVictory: false
                },
                {
                    bracketHolder: dataSorted[11],
                    bracketKey: 14,
                    bracketVictory: false
                },
                {
                    bracketHolder: dataSorted[3],
                    bracketKey: 15,
                    bracketVictory: false
                },
                {
                    bracketHolder: '',
                    bracketKey: 16,
                    bracketVictory: false
                },
                {
                    bracketHolder: dataSorted[5],
                    bracketKey: 17,
                    bracketVictory: false
                },
                {
                    bracketHolder: dataSorted[10],
                    bracketKey: 18,
                    bracketVictory: false
                },
                {
                    bracketHolder: dataSorted[2],
                    bracketKey: 19,
                    bracketVictory: false
                },
                {
                    bracketHolder: '',
                    bracketKey: 20,
                    bracketVictory: false
                },
                {
                    bracketHolder: dataSorted[6],
                    bracketKey: 21,
                    bracketVictory: false
                },
                {
                    bracketHolder: dataSorted[9],
                    bracketKey: 22,
                    bracketVictory: false
                },
                {
                    bracketHolder: dataSorted[1],
                    bracketKey: 23,
                    bracketVictory: false
                },
                {
                    bracketHolder: '',
                    bracketKey: 24,
                    bracketVictory: false
                }
            ]
            }))
        }
        setSetup(true)
    }


    

    useEffect(() => {
        const PrelimCountries =   [
            {
                country: dataSorted[12],
                rank: 1
            },
            {
                country: dataSorted[19],
                rank: 8
            },
            {
                country: dataSorted[13],
                rank: 2
            },
            {
                country: dataSorted[18],
                rank: 7
            },
            {
                country: dataSorted[14],
                rank: 3
            },
            {
                country: dataSorted[17],
                rank: 6
            },
            {
                country: dataSorted[15],
                rank: 4
            },
            {
                country: dataSorted[16],
                rank: 5
            }
        ] 

        const addPrelims = () => {
            tournamentMap.prelimsRound.forEach((element, index) => {
                PrelimCountries.forEach(e => {
                if(e.rank === element.bracketKey) {
                    dispatch(tournamentsSliceActions.updatePrelims({
                        map: tournamentMap.name,
                        index: index,
                        country: e.country
                    }))
                }
            })})
    
            
    
        }
        if(prelimStart) {
            addPrelims();
            setPrelimStart(false)
        }
    }, [ setPrelimStart, prelimStart, tournamentMap.prelimsRound, dispatch, tournamentMap.name, dataSorted])
    



    const prelimVictoryHandler = (index) => {
        dispatch(tournamentsSliceActions.prelimVictories({
            map: tournamentMap.name,
            index: index
        }))
    }

    let prelimsOver = true;
    tournamentMap.prelimsRound.forEach(e => e.bracketVictory ? null : prelimsOver = false )

    

    
    
    //              ------------  Round Of 16   ---------------------
    
    const [roundOf16Start, setRoundOf16Start] = useState(false)


    

    
    
   useEffect( () => {if(prelimsOver && !roundOf16Start) {
    const RoundOf16Countries = [
        {
            country: dataSorted[0],
            rank: 1
        },
        {
            country: '',
            rank: 16
        },
        {
            country: dataSorted[7],
            rank: 8
        },
        {
            country: dataSorted[8],
            rank: 9
        },
        {
            country: dataSorted[4],
            rank: 5
        },
        {
            country: dataSorted[11],
            rank: 12
        },
        {
            country: dataSorted[3],
            rank: 4
        },
        {
            country: '',
            rank: 13
        },
        {
            country: dataSorted[5],
            rank: 6
        },
        {
            country: dataSorted[10],
            rank: 11
        },
        {
            country: dataSorted[2],
            rank: 3
        },
        {
            country: '',
            rank: 14
        },
        {
            country: dataSorted[6],
            rank: 7
        },
        {
            country: dataSorted[9],
            rank: 10
        },
        {
            country: dataSorted[1],
            rank: 2
        },
        {
            country: '',
            rank: 15
        },
    ]
        tournamentMap.prelimsRound.forEach(e => {
            if(e.bracketVictory === 'V') {
                switch (e.bracketKey) {
                    case 1 :
                        RoundOf16Countries[1].country = e.bracketHolder
                        break;
                        case 2:
                        RoundOf16Countries[1].country = e.bracketHolder
                        break;
                        case 3:
                        RoundOf16Countries[7].country = e.bracketHolder
                        break;
                        case 4:
                        RoundOf16Countries[7].country = e.bracketHolder
                        break;
                        case 5:
                        RoundOf16Countries[11].country = e.bracketHolder
                        break;
                        case 6:
                        RoundOf16Countries[11].country = e.bracketHolder
                        break;
                        case 7:
                        RoundOf16Countries[15].country = e.bracketHolder
                        break;
                        case 8:
                        RoundOf16Countries[15].country = e.bracketHolder
                        break;
                    default:
                        break;
                }
            }
        })
        
        dispatch(tournamentsSliceActions.updateRoundOf16({
            map: tournamentMap.name,
            round: [
            {
                bracketHolder: RoundOf16Countries[0].country,
                bracketKey: 9,
                bracketVictory: tournamentMap.roundOf16[0].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[1].country,
                bracketKey: 10,
                bracketVictory: tournamentMap.roundOf16[1].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[2].country,
                bracketKey: 11,
                bracketVictory: tournamentMap.roundOf16[2].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[3].country,
                bracketKey: 12,
                bracketVictory: tournamentMap.roundOf16[3].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[4].country,
                bracketKey: 13,
                bracketVictory: tournamentMap.roundOf16[4].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[5].country,
                bracketKey: 14,
                bracketVictory: tournamentMap.roundOf16[5].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[6].country,
                bracketKey: 15,
                bracketVictory: tournamentMap.roundOf16[6].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[7].country,
                bracketKey: 16,
                bracketVictory: tournamentMap.roundOf16[7].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[8].country,
                bracketKey: 17,
                bracketVictory: tournamentMap.roundOf16[8].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[9].country,
                bracketKey: 18,
                bracketVictory: tournamentMap.roundOf16[9].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[10].country,
                bracketKey: 19,
                bracketVictory: tournamentMap.roundOf16[10].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[11].country,
                bracketKey: 20,
                bracketVictory: tournamentMap.roundOf16[11].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[12].country,
                bracketKey: 21,
                bracketVictory: tournamentMap.roundOf16[12].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[13].country,
                bracketKey: 22,
                bracketVictory: tournamentMap.roundOf16[13].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[14].country,
                bracketKey: 23,
                bracketVictory: tournamentMap.roundOf16[14].bracketVictory
            },
            {
                bracketHolder: RoundOf16Countries[15].country,
                bracketKey: 24,
                bracketVictory: tournamentMap.roundOf16[15].bracketVictory
            }
        ]
        }))
    setRoundOf16Start(true)
   }}, [prelimsOver, roundOf16Start, tournamentMap.prelimsRound, tournamentMap.name, dispatch, dataSorted, tournamentMap.roundOf16])

   const roundOf16VictoryHandler = (index) => {
                dispatch(tournamentsSliceActions.roundOf16Victories({
                    map: tournamentMap.name,
                    index: index
                }))
    }

    let roundOf16Over = true;
    tournamentMap.roundOf16.forEach(e => e.bracketVictory ? null : roundOf16Over = false )


    
    

    const updatedEloPrelims = tournamentMap.isPrelimsEloUpdated
    const prelimUpdateEloHandler = () => {
        let allBracketsArray = [];
   
        tournamentMap.prelimsRound.forEach(e => allBracketsArray.push(e))
        let countriesCopy = JSON.parse(JSON.stringify(countries))

        for(let i = 0; i< 7; i ++){
            
            let winner = ''; 
            let winnerIndex = '';
            let loser = '';
            let loserIndex = '';


            allBracketsArray[i].bracketVictory === 'V' ? winner = allBracketsArray[i].bracketHolder : loser = allBracketsArray[i].bracketHolder
            allBracketsArray[i+1].bracketVictory === 'V' ? winner = allBracketsArray[i+1].bracketHolder : loser = allBracketsArray[i+1].bracketHolder

            countriesCopy.forEach( (element, index) => {
                if(element.country === winner) {
                    winnerIndex = index
                }
                if(element.country === loser) { 
                    loserIndex = index
                }
            } )



            let winnerElo = countriesCopy[winnerIndex].elo;
            let loserElo = countriesCopy[loserIndex].elo;
            let eloDifference = (winnerElo - loserElo) / 400;
            let percentage = ( 1/(1 + (Math.pow(10, eloDifference))) );
            let eloChange = Math.round(32*(1 - percentage));
            let newWinnerElo = winnerElo + (32 - eloChange);
            let newLoserElo = loserElo - (32 - eloChange); 
            countriesCopy[winnerIndex].elo = newWinnerElo;
            countriesCopy[loserIndex].elo = newLoserElo;
            countriesCopy[winnerIndex].wins = countriesCopy[winnerIndex].wins + 1;
            countriesCopy[loserIndex].losses = countriesCopy[loserIndex].losses + 1;
        
            i = i+1
        }               
               dispatch(tournamentsSliceActions.updatePrelimsElo({
                map: tournamentMap.name
            }))
       if(!updatedEloPrelims){
        
            dispatch(countrySliceActions.prelimEloUpdate(countriesCopy))
       }
    }
    if(prelimsOver && !roundOf16Start && !updatedEloPrelims) {
        prelimUpdateEloHandler();
    }




    
        //              ------------  Round Of 8   ---------------------

    const [roundOf8Start, setRoundOf8Start] = useState(false)


    const updatedEloRoundOf16 = tournamentMap.isRoundOf16EloUpdated
    const roundOf16UpdateEloHandler = () => {
        let allBracketsArray = [];
   
        tournamentMap.roundOf16.forEach(e => allBracketsArray.push(e))
        let countriesCopy = JSON.parse(JSON.stringify(countries))

        for(let i = 0; i< 15; i ++){
            
            let winner = ''; 
            let winnerIndex = '';
            let loser = '';
            let loserIndex = '';


            allBracketsArray[i].bracketVictory === 'V' ? winner = allBracketsArray[i].bracketHolder : loser = allBracketsArray[i].bracketHolder
            allBracketsArray[i+1].bracketVictory === 'V' ? winner = allBracketsArray[i+1].bracketHolder : loser = allBracketsArray[i+1].bracketHolder

            countriesCopy.forEach( (element, index) => {
                if(element.country === winner) {
                    winnerIndex = index
                }
                if(element.country === loser) { 
                    loserIndex = index
                }
            } )



            let winnerElo = countriesCopy[winnerIndex].elo;
            let loserElo = countriesCopy[loserIndex].elo;
            let eloDifference = (winnerElo - loserElo) / 400;
            let percentage = ( 1/(1 + (Math.pow(10, eloDifference))) );
            let eloChange = Math.round(32*(1 - percentage));
            let newWinnerElo = winnerElo + (32 - eloChange);
            let newLoserElo = loserElo - (32 - eloChange); 
            countriesCopy[winnerIndex].elo = newWinnerElo;
            countriesCopy[loserIndex].elo = newLoserElo;
            countriesCopy[winnerIndex].wins = countriesCopy[winnerIndex].wins + 1;
            countriesCopy[loserIndex].losses = countriesCopy[loserIndex].losses + 1;
        
            i = i+1
        }
               
               dispatch(tournamentsSliceActions.updateRoundOf16Elo({
                map: tournamentMap.name
            }))
       if(!updatedEloRoundOf16){
        
            dispatch(countrySliceActions.roundOf16EloUpdate(countriesCopy))
       }
    }
    if(roundOf16Over && !roundOf8Start && !updatedEloRoundOf16) {
        roundOf16UpdateEloHandler();
    }





    useEffect( () => {if(roundOf16Over && !roundOf8Start) {
        const RoundOf8Countries = [
            {
                country: '',
                rank: 1
            },
            {
                country: '',
                rank: 2
            },{
                country: '',
                rank: 3
            },{
                country: '',
                rank: 4
            },{
                country: '',
                rank: 5
            },{
                country: '',
                rank: 6
            },{
                country: '',
                rank: 7
            },{
                country: '',
                rank: 8
            },
            
        ]
         tournamentMap.roundOf16.forEach(e => {
             if(e.bracketVictory === 'V') {
                switch (e.bracketKey) {
                    case 9 :
                    RoundOf8Countries[0].country = e.bracketHolder
                    break;
                    case 10:
                    RoundOf8Countries[0].country = e.bracketHolder
                    break;
                        case 11:
                        RoundOf8Countries[1].country = e.bracketHolder
                        break;
                        case 12:
                        RoundOf8Countries[1].country = e.bracketHolder
                        break;
                            case 13:
                            RoundOf8Countries[2].country = e.bracketHolder
                            break;
                            case 14:
                            RoundOf8Countries[2].country = e.bracketHolder
                            break;
                                case 15:
                                RoundOf8Countries[3].country = e.bracketHolder
                                break;
                                case 16:
                                RoundOf8Countries[3].country = e.bracketHolder
                                break;
                                    case 17:
                                    RoundOf8Countries[4].country = e.bracketHolder
                                    break;
                                    case 18:
                                    RoundOf8Countries[4].country = e.bracketHolder
                                    break;
                                        case 19:
                                        RoundOf8Countries[5].country = e.bracketHolder
                                        break;
                                        case 20:
                                        RoundOf8Countries[5].country = e.bracketHolder
                                        break;
                                            case 21:
                                            RoundOf8Countries[6].country = e.bracketHolder
                                            break;
                                            case 22:
                                            RoundOf8Countries[6].country = e.bracketHolder
                                            break;
                                                case 23:
                                                RoundOf8Countries[7].country = e.bracketHolder
                                                break;
                                                case 24:
                                                RoundOf8Countries[7].country = e.bracketHolder
                                                break;
                    default:
                        break;
                }
             }
         })
         
         dispatch(tournamentsSliceActions.updateRoundOf8({
             map: tournamentMap.name,
             round: [
                {
                    bracketHolder: RoundOf8Countries[0].country,
                    bracketKey: 25,
                    bracketVictory: tournamentMap.roundOf8[0].bracketVictory
                },
                {
                    bracketHolder: RoundOf8Countries[1].country,
                    bracketKey: 26,
                    bracketVictory: tournamentMap.roundOf8[1].bracketVictory
                },
                {
                    bracketHolder: RoundOf8Countries[2].country,
                    bracketKey: 27,
                    bracketVictory: tournamentMap.roundOf8[2].bracketVictory
                },
                {
                    bracketHolder: RoundOf8Countries[3].country,
                    bracketKey: 28,
                    bracketVictory: tournamentMap.roundOf8[3].bracketVictory
                },
                {
                    bracketHolder: RoundOf8Countries[4].country,
                    bracketKey: 29,
                    bracketVictory: tournamentMap.roundOf8[4].bracketVictory
                },
                {
                    bracketHolder: RoundOf8Countries[5].country,
                    bracketKey: 30,
                    bracketVictory: tournamentMap.roundOf8[5].bracketVictory
                },
                {
                    bracketHolder: RoundOf8Countries[6].country,
                    bracketKey: 31,
                    bracketVictory: tournamentMap.roundOf8[6].bracketVictory
                },
                {
                    bracketHolder: RoundOf8Countries[7].country,
                    bracketKey: 32,
                    bracketVictory: tournamentMap.roundOf8[7].bracketVictory
                }
        
            ]
         }))
     setRoundOf8Start(true)
    }}, [roundOf16Over, roundOf8Start, tournamentMap.roundOf16, tournamentMap.name, dispatch, dataSorted, tournamentMap.roundOf8])

    const roundOf8VictoryHandler = (index) => {
        dispatch(tournamentsSliceActions.roundOf8Victories({
            map: tournamentMap.name,
            index: index
        }))
    }

    let roundOf8Over = true;
    tournamentMap.roundOf8.forEach(e => e.bracketVictory ? null : roundOf8Over = false )

        //              ------------  Round Of 4   ---------------------



    const [roundOf4Start, setRoundOf4Start] = useState(false)


    





    useEffect( () => {if(roundOf8Over && !roundOf4Start) {
        const RoundOf4Countries = [
            {
                country: '',
                rank: 1
            },
            {
                country: '',
                rank: 2
            },{
                country: '',
                rank: 3
            },{
                country: '',
                rank: 4
            }
        ]


         tournamentMap.roundOf8.forEach(e => {
             if(e.bracketVictory === 'V') {
                switch (e.bracketKey) {
                    case 25 :
                    RoundOf4Countries[0].country = e.bracketHolder
                    break;
                    case 26:
                    RoundOf4Countries[0].country = e.bracketHolder
                    break;
                        case 27:
                        RoundOf4Countries[1].country = e.bracketHolder
                        break;
                        case 28:
                        RoundOf4Countries[1].country = e.bracketHolder
                        break;
                            case 29:
                            RoundOf4Countries[2].country = e.bracketHolder
                            break;
                            case 30:
                            RoundOf4Countries[2].country = e.bracketHolder
                            break;
                                case 31:
                                RoundOf4Countries[3].country = e.bracketHolder
                                break;
                                case 32:
                                RoundOf4Countries[3].country = e.bracketHolder
                                break;
                    default:
                        break;
                }
             }
         })
         
         dispatch(tournamentsSliceActions.updateRoundOf4({
             map: tournamentMap.name,
             round: [
                {
                    bracketHolder: RoundOf4Countries[0].country,
                    bracketKey: 33,
                    bracketVictory: tournamentMap.roundOf4[0].bracketVictory
                },
                {
                    bracketHolder: RoundOf4Countries[1].country,
                    bracketKey: 34,
                    bracketVictory: tournamentMap.roundOf4[1].bracketVictory
                },
                {
                    bracketHolder: RoundOf4Countries[2].country,
                    bracketKey: 35,
                    bracketVictory: tournamentMap.roundOf4[2].bracketVictory
                },
                {
                    bracketHolder: RoundOf4Countries[3].country,
                    bracketKey: 36,
                    bracketVictory: tournamentMap.roundOf4[3].bracketVictory
                }
        
            ]
         }))
     setRoundOf4Start(true)
    }}, [roundOf8Over, roundOf4Start, tournamentMap.roundOf8, tournamentMap.roundOf4, tournamentMap.name, dispatch, dataSorted])


       const roundOf4VictoryHandler = (index) => {
        dispatch(tournamentsSliceActions.roundOf4Victories({
            map: tournamentMap.name,
            index: index
        }))
    }

    let roundOf4Over = true;
    tournamentMap.roundOf4.forEach(e => e.bracketVictory ? null : roundOf4Over = false )


    const updatedEloRoundOf8 = tournamentMap.isRoundOf8EloUpdated
    const roundOf8UpdateEloHandler = () => {
        let allBracketsArray = [];
   
        tournamentMap.roundOf8.forEach(e => allBracketsArray.push(e))
        let countriesCopy = JSON.parse(JSON.stringify(countries))

        for(let i = 0; i< 7; i ++){
            
            let winner = ''; 
            let winnerIndex = '';
            let loser = '';
            let loserIndex = '';


            allBracketsArray[i].bracketVictory === 'V' ? winner = allBracketsArray[i].bracketHolder : loser = allBracketsArray[i].bracketHolder
            allBracketsArray[i+1].bracketVictory === 'V' ? winner = allBracketsArray[i+1].bracketHolder : loser = allBracketsArray[i+1].bracketHolder

            countriesCopy.forEach( (element, index) => {
                if(element.country === winner) {
                    winnerIndex = index
                }
                if(element.country === loser) { 
                    loserIndex = index
                }
            } )



            let winnerElo = countriesCopy[winnerIndex].elo;
            let loserElo = countriesCopy[loserIndex].elo;
            let eloDifference = (winnerElo - loserElo) / 400;
            let percentage = ( 1/(1 + (Math.pow(10, eloDifference))) );
            let eloChange = Math.round(32*(1 - percentage));
            let newWinnerElo = winnerElo + (32 - eloChange);
            let newLoserElo = loserElo - (32 - eloChange); 
            countriesCopy[winnerIndex].elo = newWinnerElo;
            countriesCopy[loserIndex].elo = newLoserElo;
            countriesCopy[winnerIndex].wins = countriesCopy[winnerIndex].wins + 1;
            countriesCopy[loserIndex].losses = countriesCopy[loserIndex].losses + 1;
        
            i = i+1
        }
               
               dispatch(tournamentsSliceActions.updateRoundOf8Elo({
                map: tournamentMap.name
            }))
       if(!updatedEloRoundOf8){
        
            dispatch(countrySliceActions.roundOf8EloUpdate(countriesCopy))
       }
    }
    if(roundOf8Over && !roundOf4Start && !updatedEloRoundOf8) {
        roundOf8UpdateEloHandler();
    }

    //              ------------  Round Of 2   ---------------------
    
    const [roundOf2Start, setRoundOf2Start] = useState(false)

    useEffect( () => {if(roundOf4Over && !roundOf2Start) {
        const RoundOf2Countries = [
            {
                country: '',
                rank: 1
            },
            {
                country: '',
                rank: 2
            }
        ]

        tournamentMap.roundOf4.forEach(e => {
             if(e.bracketVictory === 'V') {
                switch (e.bracketKey) {
                    case 33 :
                        RoundOf2Countries[0].country = e.bracketHolder
                    break;
                    case 34:
                        RoundOf2Countries[0].country = e.bracketHolder
                    break;
                    case 35:
                        RoundOf2Countries[1].country = e.bracketHolder
                    break;
                    case 36:
                        RoundOf2Countries[1].country = e.bracketHolder
                    break;
                    default:
                    break;
                }
             }
        })
         
        dispatch(tournamentsSliceActions.updateRoundOf2({
             map: tournamentMap.name,
             round: [
                {
                    bracketHolder: RoundOf2Countries[0].country,
                    bracketKey: 37,
                    bracketVictory: tournamentMap.roundOf2[0].bracketVictory
                },
                {
                    bracketHolder: RoundOf2Countries[1].country,
                    bracketKey: 38,
                    bracketVictory: tournamentMap.roundOf2[1].bracketVictory
                }
            ]
        }))

        setRoundOf2Start(true)
    }}, [roundOf4Over, roundOf2Start, tournamentMap.roundOf4, tournamentMap.roundOf2, tournamentMap.name, dispatch, dataSorted])
    
       const roundOf2VictoryHandler = (index) => {
        dispatch(tournamentsSliceActions.roundOf2Victories({
            map: tournamentMap.name,
            index: index
        }))
    }
    let roundOf2Over = false;
    tournamentMap.roundOf2.forEach(e => e.bracketVictory === 'V' ? roundOf2Over = true : null)


    const updatedEloRoundOf4 = tournamentMap.isRoundOf4EloUpdated
    const roundOf4UpdateEloHandler = () => {
        let allBracketsArray = [];
   
        tournamentMap.roundOf4.forEach(e => allBracketsArray.push(e))
        let countriesCopy = JSON.parse(JSON.stringify(countries))
        for(let i = 0; i< 3; i ++){
            
            let winner = ''; 
            let winnerIndex = '';
            let loser = '';
            let loserIndex = '';


            allBracketsArray[i].bracketVictory === 'V' ? winner = allBracketsArray[i].bracketHolder : loser = allBracketsArray[i].bracketHolder
            allBracketsArray[i+1].bracketVictory === 'V' ? winner = allBracketsArray[i+1].bracketHolder : loser = allBracketsArray[i+1].bracketHolder

            countriesCopy.forEach( (element, index) => {
                if(element.country === winner) {
                    winnerIndex = index
                }
                if(element.country === loser) { 
                    loserIndex = index
                }
            } )



            let winnerElo = countriesCopy[winnerIndex].elo;
            let loserElo = countriesCopy[loserIndex].elo;
            let eloDifference = (winnerElo - loserElo) / 400;
            let percentage = ( 1/(1 + (Math.pow(10, eloDifference))) );
            let eloChange = Math.round(32*(1 - percentage));
            let newWinnerElo = winnerElo + (32 - eloChange);
            let newLoserElo = loserElo - (32 - eloChange);
            countriesCopy[winnerIndex].elo = newWinnerElo;
            countriesCopy[loserIndex].elo = newLoserElo;
            countriesCopy[winnerIndex].wins = countriesCopy[winnerIndex].wins + 1;
            countriesCopy[loserIndex].losses = countriesCopy[loserIndex].losses + 1;
            countriesCopy[loserIndex].bronze = countriesCopy[loserIndex].bronze + 1;
        
            i = i+1
        }
               
               dispatch(tournamentsSliceActions.updateRoundOf4Elo({
                map: tournamentMap.name
            }))
       if(!updatedEloRoundOf4){
        
            dispatch(countrySliceActions.roundOf4EloUpdate(countriesCopy))
       }
    }
    if(roundOf4Over && !roundOf2Start && !updatedEloRoundOf4) {
        roundOf4UpdateEloHandler();
    }




        //              ------------  Champion Crowned   ---------------------


    const updatedEloRoundOf2 = tournamentMap.isRoundOf2EloUpdated
    const roundOf2UpdateEloHandler = () => {
        let allBracketsArray = [];
   
        tournamentMap.roundOf2.forEach(e => allBracketsArray.push(e))
        let countriesCopy = JSON.parse(JSON.stringify(countries))

        for(let i = 0; i< 1; i ++){
            
            let winner = ''; 
            let winnerIndex = '';
            let loser = '';
            let loserIndex = '';


            allBracketsArray[i].bracketVictory === 'V' ? winner = allBracketsArray[i].bracketHolder : loser = allBracketsArray[i].bracketHolder
            allBracketsArray[i+1].bracketVictory === 'V' ? winner = allBracketsArray[i+1].bracketHolder : loser = allBracketsArray[i+1].bracketHolder

            countriesCopy.forEach( (element, index) => {
                if(element.country === winner) {
                    winnerIndex = index
                }
                if(element.country === loser) { 
                    loserIndex = index
                }
            } )



            let winnerElo = countriesCopy[winnerIndex].elo;
            let loserElo = countriesCopy[loserIndex].elo;
            let eloDifference = (winnerElo - loserElo) / 400;
            let percentage = ( 1/(1 + (Math.pow(10, eloDifference))) );
            let eloChange = Math.round(32*(1 - percentage));
            let newWinnerElo = winnerElo + (32 - eloChange);
            let newLoserElo = loserElo - (32 - eloChange); 
            countriesCopy[winnerIndex].elo = newWinnerElo;
            countriesCopy[loserIndex].elo = newLoserElo;
            countriesCopy[winnerIndex].wins = countriesCopy[winnerIndex].wins + 1;
            countriesCopy[loserIndex].losses = countriesCopy[loserIndex].losses + 1;
            countriesCopy[winnerIndex].gold = countriesCopy[winnerIndex].gold + 1;
            countriesCopy[loserIndex].silver = countriesCopy[loserIndex].silver + 1;
        
            i = i+1
        }
               
               dispatch(tournamentsSliceActions.updateRoundOf2Elo({
                map: tournamentMap.name
            }))
       if(!updatedEloRoundOf2){
        
            dispatch(countrySliceActions.roundOf2EloUpdate(countriesCopy))
       }
    }
    if(roundOf2Over &&  !updatedEloRoundOf2) {
        roundOf2UpdateEloHandler();
    }


    const turnOffOngoingHandler = () =>  {
        if (roundOf2Over && ongoing !== 'end'){
            dispatch(tournamentsSliceActions.ongoingToFalse(tournamentMap.name));
        }
    }
    
    useEffect(() => {
        if(!tournamentMap.prelimsRound[0].bracketHolder) {
                 setRefresh(refresh + 1)
            }
    },[tournamentMap.prelimsRound, refresh] )

     

    return (
        <div className={classes.Body} style={{
            backgroundImage: 'url(' + mapImage + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '110% 120%'
        }}  >
        <div className={classes.Container}>
            <div className={classes.Prelims}>
                { tournamentMap.prelimsRound[0].bracketHolder && tournamentMap.prelimsRound.map((e, index) => <button onClick={() => {
                                                    
                                                    prelimVictoryHandler(index)}}
                                                    key={e.bracketKey} 
                                                    className={classes.Bracket}
                                                    disabled={prelimsOver}
                                                    style={{
                                                        background: e.bracketVictory === 'V' ? 'linear-gradient(to right, green, rgba(167, 187, 187, 0.738) 98%) padding-box, linear-gradient(to left, black,  green) border-box' :e.bracketVictory === 'L' ? 'linear-gradient(to right, red, rgba(167, 187, 187, 0.738) 98%) padding-box, linear-gradient(to left, black, red) border-box' : null
                                                    }}
                                                    
                                                    >{e.bracketHolder} </button>
                )}
            </div>

            <div className={classes.PrelimBuffer} >
                {
                    ['1','2','3','4'].map( (e) => {
                        return ( <div key={e} className={classes.BufferBracket}></div>)
                    })
                }

            </div>

            <div className={classes.RoundOf16}>

                { roundOf16Start &&  tournamentMap.roundOf16.map((e, index) => <button onClick={() => {roundOf16VictoryHandler(index)}}
                                                    key={e.bracketKey} 
                                                    className={classes.Bracket}
                                                    disabled={roundOf16Over}
                                                    style={{
                                                        background: e.bracketVictory === 'V' ? 'linear-gradient(to right, green, rgba(167, 187, 187, 0.738) 98%) padding-box, linear-gradient(to left, black,  green) border-box' :e.bracketVictory === 'L' ? 'linear-gradient(to right, red, rgba(167, 187, 187, 0.738) 98%) padding-box, linear-gradient(to left, black, red) border-box' : null
                                                       
                                                    }}
                                                    
                                                    >{e.bracketHolder}</button>
                )}

            </div>

            {
                roundOf16Start && <div className={classes.RoundOf16Buffer} >
                {
                    ['1','2','3','4','5','6','7','8'].map( (e) => {
                        return ( <div key={e} className={classes.BufferBracketTwo}></div>)
                    })
                }
            </div>
            }


           
            <div className={classes.RoundOf8}>

                {
                    roundOf8Start && tournamentMap.roundOf8.map((e, index) => <button onClick={() => {roundOf8VictoryHandler(index)}}
                                                    key={e.bracketKey} 
                                                    className={classes.Bracket}
                                                    disabled={roundOf8Over}
                                                    style={{
                                                        background: e.bracketVictory === 'V' ? 'linear-gradient(to right, green, rgba(167, 187, 187, 0.738) 98%) padding-box, linear-gradient(to left, black,  green) border-box' :e.bracketVictory === 'L' ? 'linear-gradient(to right, red, rgba(167, 187, 187, 0.738) 98%) padding-box, linear-gradient(to left, black, red) border-box' : null

                                                    }}
                                                    
                                                    >{e.bracketHolder} </button>
                )}
  
            </div>
            
            {
                roundOf8Start && <div className={classes.RoundOf8Buffer} >
                {
                    ['1','2','3','4',].map( (e) => {
                        return ( <div key={e} className={classes.BufferBracketThree}></div>)
                    })
                }
            </div>
            }

            
            


            <div className={classes.RoundOf4}>
            {
                roundOf4Start && tournamentMap.roundOf4.map((e, index) => <button onClick={() => {roundOf4VictoryHandler(index)}}
                                                key={e.bracketKey} 
                                                className={classes.Bracket}
                                                disabled={roundOf4Over}
                                                style={{
                                                    background: e.bracketVictory === 'V' ? 'linear-gradient(to right, green, rgba(167, 187, 187, 0.738) 98%) padding-box, linear-gradient(to left, black,  green) border-box' :e.bracketVictory === 'L' ? 'linear-gradient(to right, red, rgba(167, 187, 187, 0.738) 98%) padding-box, linear-gradient(to left, black, red) border-box' : null

                                                }}
                                                
                                                >{e.bracketHolder} </button>
            )}
            </div>

            {
                roundOf4Start && <div className={classes.RoundOf4Buffer} >
                {
                    ['1','2'].map( (i) => {
                        return ( <div key={i} className={classes.BufferBracketFour}></div>)
                    })
                }
            </div>
            }
            


            <div className={classes.RoundOf2}>
            {
                roundOf2Start && tournamentMap.roundOf2.map((e, index) => <button onClick={() => {roundOf2VictoryHandler(index)}}
                                                key={e.bracketKey} 
                                                className={classes.Bracket}
                                                disabled={roundOf2Over}
                                                style={{
                                                    background: e.bracketVictory === 'V' ? 'linear-gradient(to right, green, rgba(167, 187, 187, 0.738) 98%) padding-box, linear-gradient(to left, black,  green) border-box' :e.bracketVictory === 'L' ? 'linear-gradient(to right, red, rgba(167, 187, 187, 0.738) 98%) padding-box, linear-gradient(to left, black, red) border-box' : null

                                                }}
                                                
                                                >{e.bracketHolder} </button>
            )}
            </div>
 
            
            {
                roundOf2Over ? <div className={classes.Winner}>
                {
                    roundOf2Over && tournamentMap.roundOf2[0].bracketVictory === 'V' ? <div> {tournamentMap.roundOf2[0].bracketHolder} </div> :<div> {tournamentMap.roundOf2[1].bracketHolder} </div> 
                }
            </div> : null
            }

            {
                
                    <div    className={classes.HomeHolder} 
                            onClick={() => turnOffOngoingHandler()}
                            ><Link style={
                                {
                                    textDecoration: 'none'
                                }
                            } to='/TournamentsPage'><div className={classes.HomeButton}>Home</div></Link>
                    </div>
                
            }
            

        </div>
        </div>
    ) 
}

            {/* map as a button
                
                <div    className={classes.MapImage} 
                                        onClick={() => turnOffOngoingHandler()}
                                        ><Link to='/TournamentsPage'><img src={mapImage} alt='Map Image' style={{
                                            height: '250px',
                                            width: '250px'
                                        }} ></img></Link></div> */}

export default Brackets;