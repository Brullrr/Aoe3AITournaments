import { createSlice} from '@reduxjs/toolkit';

//NA
import Alaska from '../Images/Maps/Alaska.png';
import Arctic from '../Images/Maps/Arctic.png';
import BajaCalifornia from '../Images/Maps/BajaCalifornia.png';
import California from '../Images/Maps/California.png';
import Carolina from '../Images/Maps/Carolina.png';
import Carribean from '../Images/Maps/Carribean.png';
import CascadeRange from '../Images/Maps/CascadeRange.png';
import Colorado from '../Images/Maps/Colorado.png';
import Dakota from '../Images/Maps/Dakota.png';
import Everglades from '../Images/Maps/Everglades.png';
import Florida from '../Images/Maps/Florida.png';
import GreatLakes from '../Images/Maps/GreatLakes.png';
import GreatPlains from '../Images/Maps/GreatPlains.png';
import Mexico from '../Images/Maps/Mexico.png';
import NewEngland from '../Images/Maps/NewEngland.png';
import NorthwestTerritory from '../Images/Maps/NorthwestTerritory.png';
import Ozarks from '../Images/Maps/Ozarks.png';
import PaintedDesert from '../Images/Maps/PaintedDesert.png';
import Plymouth from '../Images/Maps/Plymouth.png';
import Rockies from '../Images/Maps/Rockies.png';
import Saguenay from '../Images/Maps/Saguenay.png';
import Sonora from '../Images/Maps/Sonora.png';
import Texas from '../Images/Maps/Texas.png';
import Yukon from '../Images/Maps/Yukon.png';


const initialState = {
    mapList: [
                    {
                        name: 'Alaska',
                        pathway: Alaska,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Arctic',
                        pathway: Arctic,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'BajaCalifornia',
                        pathway: BajaCalifornia,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'California',
                        pathway: California,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },    
                    {
                        name: 'Carolina',
                        pathway: Carolina,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Carribean',
                        pathway: Carribean,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'CascadeRange',
                        pathway: CascadeRange,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Colorado',
                        pathway: Colorado,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],   
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Dakota',
                        pathway: Dakota,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ]
                    ,   roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Everglades',
                        pathway: Everglades,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Florida',
                        pathway: Florida,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],   
                        roundOf16: [
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

                        ],
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'GreatLakes',
                        pathway: GreatLakes,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'GreatPlains',
                        pathway: GreatPlains,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],   
                        roundOf16: [
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
                        ],
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Mexico',
                        pathway: Mexico,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],   
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'NewEngland',
                        pathway: NewEngland,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],   
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'NorthwestTerritory',
                        pathway: NorthwestTerritory,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],   
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Ozarks',
                        pathway: Ozarks,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],   
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
    ],
                        roundOf4: [
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
        
    ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
    ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'PaintedDesert',
                        pathway: PaintedDesert,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],   
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Plymouth',
                        pathway: Plymouth,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Rockies',
                        pathway: Rockies,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ], 
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Saguenay',
                        pathway: Saguenay,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Sonora',
                        pathway: Sonora,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Texas',
                        pathway: Texas,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],   
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
                    {
                        name: 'Yukon',
                        pathway: Yukon,
                        finished: false,
                        setUp: [],
                        prelimsRound: [
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
                        ],   
                        roundOf16: [
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

                        ],  
                        roundOf8: [
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
                        ],
                        roundOf4: [
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
        
                        ],
                        roundOf2: [
        {
            bracketHolder: '',
            bracketKey: 37,
            bracketVictory: false
        },
        {
            bracketHolder: '',
            bracketKey: 38,
            bracketVictory: false
        }
                        ],
                        champion: '',
                        isPrelimsEloUpdated: false,
                        isRoundOf16EloUpdated: false,
                        isRoundOf8EloUpdated: false,
                        isRoundOf4EloUpdated: false,
                        isRoundOf2EloUpdated: false
                    },
            ],

    ongoingTournament: false
}

const tournamentsSlice = createSlice({
    name: 'tournaments',
    initialState: initialState,
    reducers: {
        ongoingToTrue(state, action) {
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload){
                     return state.mapList[index].finished = true
                    }
            });
            state.ongoingTournament = true;
        },
        ongoingToFalse(state) {
            state.ongoingTournament = false;
        },
        setupData(state, action){
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map){
                    let data = action.payload.countryData.sort((a,b) => {
                        let keyA = a.elo;
                        let keyB = b.elo;
                        let result = 1
                
                        if(keyA < keyB) result = 1;
                        if(keyA > keyB) result = -1;
                
                        return result
                    });
                    
                    let sortedData = []
                    data.forEach(e => sortedData.push(e.country))
                    return state.mapList[index].setUp = sortedData
                    }
            });
        },
        updatePrelims(state, action){
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map){
                     return state.mapList[index].prelimsRound[action.payload.index].bracketHolder = action.payload.country
                    }
            });
        },
        prelimVictories(state, action){
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map){
                        switch (action.payload.index) {
                            case 0:
                                return (
                                    state.mapList[index].prelimsRound[action.payload.index].bracketVictory = 'V',
                                    state.mapList[index].prelimsRound[1].bracketVictory = 'L'
                                )
                            case 1:
                                return (
                                    state.mapList[index].prelimsRound[action.payload.index].bracketVictory = 'V',
                                    state.mapList[index].prelimsRound[0].bracketVictory = 'L'
                                )
                            case 2:
                                return (
                                    state.mapList[index].prelimsRound[action.payload.index].bracketVictory = 'V',
                                    state.mapList[index].prelimsRound[3].bracketVictory = 'L'
                                )
                            case 3:
                                return (
                                    state.mapList[index].prelimsRound[action.payload.index].bracketVictory = 'V',
                                    state.mapList[index].prelimsRound[2].bracketVictory = 'L'
                                )
                            case 4:
                                return (
                                    state.mapList[index].prelimsRound[action.payload.index].bracketVictory = 'V',
                                    state.mapList[index].prelimsRound[5].bracketVictory = 'L'
                                )
                            case 5:
                                return (
                                    state.mapList[index].prelimsRound[action.payload.index].bracketVictory = 'V',
                                    state.mapList[index].prelimsRound[4].bracketVictory = 'L'
                                )
                            case 6:
                                return (
                                    state.mapList[index].prelimsRound[action.payload.index].bracketVictory = 'V',
                                    state.mapList[index].prelimsRound[7].bracketVictory = 'L'
                                )
                            case 7:
                                return (
                                    state.mapList[index].prelimsRound[action.payload.index].bracketVictory = 'V',
                                    state.mapList[index].prelimsRound[6].bracketVictory = 'L'
                                )    
                            default:
                            break;
                        }
                    }
            })
        },
        updateRoundOf16(state, action){
            
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map){
                    
                     return state.mapList[index].roundOf16 = action.payload.round
                    }
            });
        },
        roundOf16Victories(state, action) {
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map) {
                    switch ( action.payload.index) {
                        case 0: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[1].bracketVictory = 'L'
                            )
                            case 1: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[0].bracketVictory = 'L'
                            )
                            case 2: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[3].bracketVictory = 'L'
                            )
                            case 3: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[2].bracketVictory = 'L'
                            )
                            case 4: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[5].bracketVictory = 'L'
                            )
                            case 5: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[4].bracketVictory = 'L'
                            )
                            case 6: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[7].bracketVictory = 'L'
                            )
                            case 7: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[6].bracketVictory = 'L'
                            )
                            case 8: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[9].bracketVictory = 'L'
                            )
                            case 9: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[8].bracketVictory = 'L'
                            )
                            case 10: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[11].bracketVictory = 'L'
                            )
                            case 11: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[10].bracketVictory = 'L'
                            )
                            case 12: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[13].bracketVictory = 'L'
                            )
                            case 13: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[12].bracketVictory = 'L'
                            )
                            case 14: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[15].bracketVictory = 'L'
                            )
                            case 15: 
                            return (
                                state.mapList[index].roundOf16[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf16[14].bracketVictory = 'L'
                            )
                            default:
                            break;

                    }
                }
            })
        },
        updateRoundOf8(state, action){
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map){
                     return state.mapList[index].roundOf8 = action.payload.round
                    }
            });
        },
        roundOf8Victories(state, action) {
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map) {
                    switch ( action.payload.index) {
                        case 0: 
                            return (
                                state.mapList[index].roundOf8[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf8[1].bracketVictory = 'L'
                            )
                            case 1: 
                            return (
                                state.mapList[index].roundOf8[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf8[0].bracketVictory = 'L'
                            )
                            case 2: 
                            return (
                                state.mapList[index].roundOf8[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf8[3].bracketVictory = 'L'
                            )
                            case 3: 
                            return (
                                state.mapList[index].roundOf8[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf8[2].bracketVictory = 'L'
                            )
                            case 4: 
                            return (
                                state.mapList[index].roundOf8[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf8[5].bracketVictory = 'L'
                            )
                            case 5: 
                            return (
                                state.mapList[index].roundOf8[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf8[4].bracketVictory = 'L'
                            )
                            case 6: 
                            return (
                                state.mapList[index].roundOf8[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf8[7].bracketVictory = 'L'
                            )
                            case 7: 
                            return (
                                state.mapList[index].roundOf8[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf8[6].bracketVictory = 'L'
                            )
                            default:
                            break;
                    }
                }
            })
        },
        updateRoundOf4(state, action){
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map){
                     return state.mapList[index].roundOf4 = action.payload.round
                    }
            });
        },
        roundOf4Victories(state, action) {
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map) {
                    switch ( action.payload.index) {
                        case 0: 
                            return (
                                state.mapList[index].roundOf4[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf4[1].bracketVictory = 'L'
                            )
                            case 1: 
                            return (
                                state.mapList[index].roundOf4[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf4[0].bracketVictory = 'L'
                            )
                            case 2: 
                            return (
                                state.mapList[index].roundOf4[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf4[3].bracketVictory = 'L'
                            )
                            case 3: 
                            return (
                                state.mapList[index].roundOf4[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf4[2].bracketVictory = 'L'
                            )
                            default:
                            break;
                    }
                }
            })
        },
        updateRoundOf2(state, action){
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map){
                     return state.mapList[index].roundOf2 = action.payload.round
                    }
            });
        },
        roundOf2Victories(state, action) {
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map) {
                    switch ( action.payload.index) {
                            case 0: 
                            return (
                                state.mapList[index].roundOf2[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf2[1].bracketVictory = 'L'
                            )
                            case 1: 
                            return (
                                state.mapList[index].roundOf2[action.payload.index].bracketVictory = 'V',
                                state.mapList[index].roundOf2[0].bracketVictory = 'L'
                            )
                            default:
                            break;
                    }
                }
            })
        },
        updatePrelimsElo(state, action) {
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map){
                     return state.mapList[index].isPrelimsEloUpdated = true
                    }
            });
        },
        updateRoundOf16Elo(state, action) {
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map){
                     return state.mapList[index].isRoundOf16EloUpdated = true
                    }
            });
        },
        updateRoundOf8Elo(state, action) {
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map){
                     return state.mapList[index].isRoundOf8EloUpdated = true
                    }
            });
        },
        updateRoundOf4Elo(state, action) {
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map){
                     return state.mapList[index].isRoundOf4EloUpdated = true
                    }
            });
        },
        updateRoundOf2Elo(state, action) {
            state.mapList.forEach((element, index) => {
                if(element.name === action.payload.map){
                     return state.mapList[index].isRoundOf2EloUpdated = true
                    }
            });
        }
    }
});

export const tournamentsSliceActions = tournamentsSlice.actions


export default tournamentsSlice.reducer;