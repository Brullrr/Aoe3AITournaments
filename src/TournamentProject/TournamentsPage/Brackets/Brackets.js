import { useState } from 'react'
import classes from './Brackets.module.css'
import { Link } from 'react-router-dom';

import { MapList } from '../../MapList/MapList';

const Brackets = (props) => {

    console.log(props.name)
    let mapImage = ''

    MapList.forEach(e => e.name === props.name ? mapImage = e.pathway : null)

    



    const PrelimCountries = [
        {
            country: 'French',
            rank: 1
        },
        {
            country: 'Spanish',
            rank: 8
        },
        {
            country: 'Germans',
            rank: 2
        },
        {
            country: 'Portuguese',
            rank: 7
        },
        {
            country: 'Dutch',
            rank: 3
        },
        {
            country: 'Russians',
            rank: 6
        },
        {
            country: 'Ottomans',
            rank: 4
        },
        {
            country: 'British',
            rank: 5
        }
    ]
    const RoundOf16Countries = [
        {
            country: 'Richard',
            rank: 1
        },
        {
            country: '',
            rank: 16
        },
        {
            country: 'Aztec',
            rank: 8
        },
        {
            country: 'Haudenoshaunee',
            rank: 9
        },
        {
            country: 'Lakota',
            rank: 5
        },
        {
            country: 'Japanese',
            rank: 12
        },
        {
            country: 'Chinese',
            rank: 4
        },
        {
            country: '',
            rank: 13
        },
        {
            country: 'Indians',
            rank: 6
        },
        {
            country: 'Americans',
            rank: 11
        },
        {
            country: 'Hausa',
            rank: 3
        },
        {
            country: '',
            rank: 14
        },
        {
            country: 'Swedish',
            rank: 7
        },
        {
            country: 'Incan',
            rank: 10
        },
        {
            country: 'Ethiopians',
            rank: 2
        },
        {
            country: '',
            rank: 15
        },
    ]
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


    const [prelimStart, setPrelimStart] = useState(true)
    const [prelimRound, setPrelimRound] = useState([
        {
            bracketHolder: '',
            bracketKey: 1,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 2,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 3,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 4,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 5,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 6,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 7,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 8,
            bracketVictory: false
        }

    ])

    const addPrelims = () => {
        prelimRound.forEach((element, index) => {
            PrelimCountries.forEach(e => {
            if(e.rank === element.bracketKey) {
                setPrelimRound([ ...prelimRound],
                    prelimRound[index].bracketHolder = e.country
                )
            }
        })})
    }

    if(prelimStart) {
        addPrelims();
        setPrelimStart(false)
    }


    const prelimVictoryHandler = (index) => {
        setPrelimRound([ ...prelimRound],
            prelimRound[index].bracketVictory = 'V'
        )

        switch (index) {
            case 0:
                setPrelimRound([ ...prelimRound],
                    prelimRound[1].bracketVictory = 'L'
                )
                
            break;
                case 1:
                    setPrelimRound([ ...prelimRound],
                        prelimRound[0].bracketVictory = 'L'
                    )
                    
                break;
                    case 2:
                    setPrelimRound([ ...prelimRound],
                        prelimRound[3].bracketVictory = 'L'
                    )
                    
                    break;
                        case 3:
                        setPrelimRound([ ...prelimRound],
                            prelimRound[2].bracketVictory = 'L'
                        )
                        
                        break;
                            case 4:
                                setPrelimRound([ ...prelimRound],
                                    prelimRound[5].bracketVictory = 'L'
                                )
                                
                                break;
                                    case 5:
                                    setPrelimRound([ ...prelimRound],
                                        prelimRound[4].bracketVictory = 'L'
                                    )
                                    
                                    break;
                                        case 6:
                                            setPrelimRound([ ...prelimRound],
                                                prelimRound[7].bracketVictory = 'L'
                                            )
                                            
                                            break;
                                                case 7:
                                                setPrelimRound([ ...prelimRound],
                                                    prelimRound[6].bracketVictory = 'L'
                                                )
                                                
                                                break;
        
            default:
                break;
        }
    }

    let prelimsOver = true;
    prelimRound.forEach(e => e.bracketVictory ? null : prelimsOver = false )
    
    //If prelims true then round of 16 begins
    
    const [roundOf16Start, setRoundOf16Start] = useState(false)
    const [roundOf16, setRoundOf16] = useState([
        {
            bracketHolder: '',
            bracketKey: 9,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 10,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 11,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 12,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 13,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 14,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 15,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 16,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 17,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 18,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 19,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 20,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 21,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 22,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 23,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 24,
            bracketVictory: false
        }

    ]);

   if(prelimsOver && !roundOf16Start) {
    prelimRound.forEach(e => {
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
    setRoundOf16([
        {
            bracketHolder: RoundOf16Countries[0].country,
            bracketKey: 9,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[1].country,
            bracketKey: 10,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[2].country,
            bracketKey: 11,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[3].country,
            bracketKey: 12,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[4].country,
            bracketKey: 13,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[5].country,
            bracketKey: 14,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[6].country,
            bracketKey: 15,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[7].country,
            bracketKey: 16,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[8].country,
            bracketKey: 17,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[9].country,
            bracketKey: 18,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[10].country,
            bracketKey: 19,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[11].country,
            bracketKey: 20,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[12].country,
            bracketKey: 21,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[13].country,
            bracketKey: 22,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[14].country,
            bracketKey: 23,
            bracketVictory: false
        },
        {
            bracketHolder: RoundOf16Countries[15].country,
            bracketKey: 24,
            bracketVictory: false
        }

    ]);
    setRoundOf16Start(true);
   }

   const roundOf16VictoryHandler = (index) => {
    setRoundOf16([ ...roundOf16],
        roundOf16[index].bracketVictory = 'V'
    )

    switch (index) {
        case 0:
            setRoundOf16([ ...roundOf16],
                roundOf16[1].bracketVictory = 'L'
            )
            
        break;
            case 1:
                setRoundOf16([ ...roundOf16],
                    roundOf16[0].bracketVictory = 'L'
                )
                
            break;
                case 2:
                setRoundOf16([ ...roundOf16],
                    roundOf16[3].bracketVictory = 'L'
                )
                
                break;
                    case 3:
                    setRoundOf16([ ...roundOf16],
                        roundOf16[2].bracketVictory = 'L'
                    )
                    
                    break;
                        case 4:
                            setRoundOf16([ ...roundOf16],
                                roundOf16[5].bracketVictory = 'L'
                            )
                            
                            break;
                                case 5:
                                setRoundOf16([ ...roundOf16],
                                    roundOf16[4].bracketVictory = 'L'
                                )
                                
                                break;
                                    case 6:
                                        setRoundOf16([ ...roundOf16],
                                            roundOf16[7].bracketVictory = 'L'
                                        )
                                        
                                        break;
                                            case 7:
                                            setRoundOf16([ ...roundOf16],
                                                roundOf16[6].bracketVictory = 'L'
                                            )
                                            
                                            break;
                                            case 8:
                                                setRoundOf16([ ...roundOf16],
                                                    roundOf16[9].bracketVictory = 'L'
                                                )
                                                
                                                break;
                                                case 9:
                                                    setRoundOf16([ ...roundOf16],
                                                        roundOf16[8].bracketVictory = 'L'
                                                    )
                                                    
                                                    break;
                                                    case 10:
                                                        setRoundOf16([ ...roundOf16],
                                                            roundOf16[11].bracketVictory = 'L'
                                                        )
                                                        
                                                        break;
                                                        case 11:
                                                            setRoundOf16([ ...roundOf16],
                                                                roundOf16[10].bracketVictory = 'L'
                                                            )
                                                            
                                                            break;
                                                            case 12:
                                                                setRoundOf16([ ...roundOf16],
                                                                    roundOf16[13].bracketVictory = 'L'
                                                                )
                                                                
                                                                break;
                                                                case 13:
                                                                    setRoundOf16([ ...roundOf16],
                                                                        roundOf16[12].bracketVictory = 'L'
                                                                    )
                                                                    
                                                                    break;
                                                                    case 14:
                                                                        setRoundOf16([ ...roundOf16],
                                                                            roundOf16[15].bracketVictory = 'L'
                                                                        )
                                                                        
                                                                        break;
                                                                        case 15:
                                                                            setRoundOf16([ ...roundOf16],
                                                                                roundOf16[14].bracketVictory = 'L'
                                                                            )
                                                                            
                                                                            break;
    
        default:
            break;
    }
}

    let roundOf16Over = true;
    roundOf16.forEach(e => e.bracketVictory ? null : roundOf16Over = false )
    

    // Round of 8 

    const [roundOf8Start, setRoundOf8Start] = useState(false)

    const [roundOf8, setRoundOf8] = useState([
        {
            bracketHolder: '',
            bracketKey: 25,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 26,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 27,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 28,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 29,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 30,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 31,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 32,
            bracketVictory: false
        }
    ]);

    if(roundOf16Over && !roundOf8Start) {
        roundOf16.forEach(e => {
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
        setRoundOf8([
            {
                bracketHolder: RoundOf8Countries[0].country,
                bracketKey: 25,
                bracketVictory: false
            },
            {
                bracketHolder: RoundOf8Countries[1].country,
                bracketKey: 26,
                bracketVictory: false
            },
            {
                bracketHolder: RoundOf8Countries[2].country,
                bracketKey: 27,
                bracketVictory: false
            },
            {
                bracketHolder: RoundOf8Countries[3].country,
                bracketKey: 28,
                bracketVictory: false
            },
            {
                bracketHolder: RoundOf8Countries[4].country,
                bracketKey: 29,
                bracketVictory: false
            },
            {
                bracketHolder: RoundOf8Countries[5].country,
                bracketKey: 30,
                bracketVictory: false
            },
            {
                bracketHolder: RoundOf8Countries[6].country,
                bracketKey: 31,
                bracketVictory: false
            },
            {
                bracketHolder: RoundOf8Countries[7].country,
                bracketKey: 32,
                bracketVictory: false
            }
    
        ]);
        setRoundOf8Start(true);
       }

    const roundOf8VictoryHandler = (index) => {
        setRoundOf8([ ...roundOf8],
            roundOf8[index].bracketVictory = 'V'
        )
    
        switch (index) {
            case 0:
                setRoundOf8([ ...roundOf8],
                    roundOf8[1].bracketVictory = 'L'
                )
                
            break;
                case 1:
                    setRoundOf8([ ...roundOf8],
                        roundOf8[0].bracketVictory = 'L'
                    )
                    
                break;
                    case 2:
                    setRoundOf8([ ...roundOf8],
                        roundOf8[3].bracketVictory = 'L'
                    )
                    
                    break;
                        case 3:
                        setRoundOf8([ ...roundOf8],
                            roundOf8[2].bracketVictory = 'L'
                        )
                        
                        break;
                            case 4:
                                setRoundOf8([ ...roundOf8],
                                    roundOf8[5].bracketVictory = 'L'
                                )
                                
                                break;
                                    case 5:
                                    setRoundOf8([ ...roundOf8],
                                        roundOf8[4].bracketVictory = 'L'
                                    )
                                    
                                    break;
                                        case 6:
                                            setRoundOf8([ ...roundOf8],
                                                roundOf8[7].bracketVictory = 'L'
                                            )
                                            
                                            break;
                                                case 7:
                                                setRoundOf8([ ...roundOf8],
                                                    roundOf8[6].bracketVictory = 'L'
                                                )
                                                
                                                break;
                                                case 8:
                                                    setRoundOf8([ ...roundOf8],
                                                        roundOf8[9].bracketVictory = 'L'
                                                    )
                                                    
                                                    break;
                                                    
        
            default:
                break;
        }
    }


    let roundOf8Over = true;
    roundOf8.forEach(e => e.bracketVictory ? null : roundOf8Over = false )

    //round of 4

    const [roundOf4Start, setRoundOf4Start] = useState(false)

    const [roundOf4, setRoundOf4] = useState([
        {
            bracketHolder: '',
            bracketKey: 33,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 34,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 35,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 36,
            bracketVictory: false
        },
        
    ]);

    if(roundOf8Over && !roundOf4Start) {
        roundOf8.forEach(e => {
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
        setRoundOf4([
            {
                bracketHolder: RoundOf4Countries[0].country,
                bracketKey: 33,
                bracketVictory: false
            },
            {
                bracketHolder: RoundOf4Countries[1].country,
                bracketKey: 34,
                bracketVictory: false
            },
            {
                bracketHolder: RoundOf4Countries[2].country,
                bracketKey: 35,
                bracketVictory: false
            },
            {
                bracketHolder: RoundOf4Countries[3].country,
                bracketKey: 36,
                bracketVictory: false
            }
        ]);
        setRoundOf4Start(true);
       }

       const roundOf4VictoryHandler = (index) => {
        setRoundOf4([ ...roundOf4],
            roundOf4[index].bracketVictory = 'V'
        )
        switch (index) {
            case 0:
                setRoundOf4([ ...roundOf4],
                    roundOf4[1].bracketVictory = 'L'
                )
                
            break;
                case 1:
                    setRoundOf4([ ...roundOf4],
                        roundOf4[0].bracketVictory = 'L'
                    )
                    
                break;
                    case 2:
                    setRoundOf4([ ...roundOf4],
                        roundOf4[3].bracketVictory = 'L'
                    )
                    
                    break;
                        case 3:
                        setRoundOf4([ ...roundOf4],
                            roundOf4[2].bracketVictory = 'L'
                        )
                        
                        break;
            default:
                break;
        }
    }

    let roundOf4Over = true;
    roundOf4.forEach(e => e.bracketVictory ? null : roundOf4Over = false )

    //round of 2

    const [roundOf2Start, setRoundOf2Start] = useState(false)
    const [roundOf2, setRoundOf2] = useState([
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 39,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 40,
            bracketVictory: false
        },
        
    ]);

    if(roundOf4Over && !roundOf2Start) {
        roundOf4.forEach(e => {
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
        setRoundOf2([
            {
                bracketHolder: RoundOf2Countries[0].country,
                bracketKey: 33,
                bracketVictory: false
            },
            {
                bracketHolder: RoundOf2Countries[1].country,
                bracketKey: 34,
                bracketVictory: false
            }
        ]);
        setRoundOf2Start(true);
       }
    
       const roundOf2VictoryHandler = (index) => {
        setRoundOf2([ ...roundOf2],
            roundOf2[index].bracketVictory = 'V'
        )
        switch (index) {
            case 0:
                setRoundOf2([ ...roundOf2],
                    roundOf2[1].bracketVictory = 'L'
                )
                
            break;
                case 1:
                    setRoundOf2([ ...roundOf2],
                        roundOf2[0].bracketVictory = 'L'
                    )
                    
                break;
            default:
                break;
        }
    }
    let roundOf2Over = false;
    roundOf2.forEach(e => e.bracketVictory === 'V' ? roundOf2Over = true : null)

    
    return (
        <div className={classes.Body}  >
        <div className={classes.Container}>
            <div className={classes.Prelims}>
                { prelimRound.map((e, index) => <button onClick={() => {prelimVictoryHandler(index)}}
                                                    key={e.bracketKey} 
                                                    className={classes.Bracket}
                                                    disabled={prelimsOver}
                                                    style={{
                                                        background: e.bracketVictory === 'V' ? 'linear-gradient(to right, green, rgba(167, 187, 187, 0.738) 98%)' :e.bracketVictory === 'L' ? 'linear-gradient(to right, salmon, rgba(167, 187, 187, 0.738) 98%)' : null
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

                { roundOf16Start && roundOf16.map((e, index) => <button onClick={() => {roundOf16VictoryHandler(index)}}
                                                    key={e.bracketKey} 
                                                    className={classes.Bracket}
                                                    disabled={roundOf16Over}
                                                    style={{
                                                        background: e.bracketVictory === 'V' ? 'linear-gradient(to right, green, rgba(167, 187, 187, 0.738) 98%)' :e.bracketVictory === 'L' ? 'linear-gradient(to right, salmon, rgba(167, 187, 187, 0.738) 98%)' : null
                                                    
                                                    }}
                                                    
                                                    >{e.bracketHolder} </button>
                )}

            </div>

            {
                roundOf16Start && <div className={classes.RoundOf16Buffer} >
                {
                    ['1','2','3','4','5','6','7','8'].map( (e) => {
                        return ( <div key={e} className={classes.BufferBracket}></div>)
                    })
                }
            </div>
            }


           
            <div className={classes.RoundOf8}>

                {
                    roundOf8Start && roundOf8.map((e, index) => <button onClick={() => {roundOf8VictoryHandler(index)}}
                                                    key={e.bracketKey} 
                                                    className={classes.Bracket}
                                                    disabled={roundOf8Over}
                                                    style={{
                                                        background: e.bracketVictory === 'V' ? 'linear-gradient(to right, green, rgba(167, 187, 187, 0.738) 98%)' :e.bracketVictory === 'L' ? 'linear-gradient(to right, salmon, rgba(167, 187, 187, 0.738) 98%)' : null
                                                    
                                                    }}
                                                    
                                                    >{e.bracketHolder} </button>
                )}
  
            </div>
            
            {
                roundOf8Start && <div className={classes.RoundOf8Buffer} >
                {
                    ['1','2','3','4',].map( (e) => {
                        return ( <div key={e} className={classes.BufferBracket}></div>)
                    })
                }
            </div>
            }

            
            


            <div className={classes.RoundOf4}>
            {
                roundOf4Start && roundOf4.map((e, index) => <button onClick={() => {roundOf4VictoryHandler(index)}}
                                                key={e.bracketKey} 
                                                className={classes.Bracket}
                                                disabled={roundOf4Over}
                                                style={{
                                                    background: e.bracketVictory === 'V' ? 'linear-gradient(to right, green, rgba(167, 187, 187, 0.738) 98%)' :e.bracketVictory === 'L' ? 'linear-gradient(to right, salmon, rgba(167, 187, 187, 0.738) 98%)' : null
                                                }}
                                                
                                                >{e.bracketHolder} </button>
            )}
            </div>

            {
                roundOf4Start && <div className={classes.RoundOf4Buffer} >
                {
                    ['1','2'].map( (i) => {
                        return ( <div key={i} className={classes.BufferBracket}></div>)
                    })
                }
            </div>
            }
            


            <div className={classes.RoundOf2}>
            {
                roundOf2Start && roundOf2.map((e, index) => <button onClick={() => {roundOf2VictoryHandler(index)}}
                                                key={e.bracketKey} 
                                                className={classes.Bracket}
                                                disabled={roundOf2Over}
                                                style={{
                                                    background: e.bracketVictory === 'V' ? 'linear-gradient(to right, green, rgba(167, 187, 187, 0.738) 98%)' :e.bracketVictory === 'L' ? 'linear-gradient(to right, salmon, rgba(167, 187, 187, 0.738) 98%)' : null
                                                }}
                                                
                                                >{e.bracketHolder} </button>
            )}
            </div>
 
            
            {
                roundOf2Over ? <div className={classes.Winner}>
                {
                    roundOf2Over && roundOf2[0].bracketVictory === 'V' ? <div> {roundOf2[0].bracketHolder} </div> :<div> {roundOf2[1].bracketHolder} </div> 
                }
            </div> : null
            }

            {
                <Link to='/TournamentsPage'>
                    <div    className={classes.MapImage} 
                            style={{
                            backgroundImage: `url(${mapImage})`
                    }}></div>
                </Link>
            }
            

        </div>
        </div>
    ) 
}

export default Brackets;