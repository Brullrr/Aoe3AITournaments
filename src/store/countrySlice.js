import { createSlice} from '@reduxjs/toolkit';

import SwedenBackground from '../Images/Homecity/Swedish.png';
import PlayerBackground from '../Images/BoatBackground.jpg';
import AmericaBackground from '../Images/Homecity/America.png';
import IncaBackground from '../Images/Homecity/Incan.png';
import JapanBackground from '../Images/Homecity/Japanese.png';
import IndiaBackground from '../Images/Homecity/Indian.png';
import ChinaBackground from '../Images/Homecity/Chinese.png';
import AztecBackground from '../Images/Homecity/Aztecs.png';
import LakotaBackground from '../Images/Homecity/Lakota.png';
import HaudenosauneeBackground from '../Images/Homecity/Haudenosaunee.png';
import HausaBackground from '../Images/Homecity/Hausa.jpeg';
import EthiopiaBackground from '../Images/Homecity/Ethiopia.jpg';
import FranceBackground from '../Images/Homecity/French.png';
import BritishBackground from '../Images/Homecity/British.png';
import SpainBackground from '../Images/Homecity/Spanish.png';
import OttomanBackground from '../Images/Homecity/Ottoman.png';
import RussiaBackground from '../Images/Homecity/Russian.png';
import DutchBackground from '../Images/Homecity/Dutch.png';
import GermanyBackground from '../Images/Homecity/German.png';
import PortugalBackground from '../Images/Homecity/Portuguese.png';
import MexicoBackground from '../Images/Homecity/Mexican.png';

import Sweden from '../Images/Flags/Swedish.png';
import Player from '../Images/SailorBackground.jpg';
import America from '../Images/Flags/American.png';
import Inca from '../Images/Flags/Incan.png';
import Japan from '../Images/Flags/Japanese.png';
import India from '../Images/Flags/Indian.png';
import China from '../Images/Flags/Chinese.png';
import Aztec from '../Images/Flags/Aztec.png';
import Lakota from '../Images/Flags/Lakota.png';
import Haudenosaunee from '../Images/Flags/Haudenosaunee.png';
import Hausa from '../Images/Flags/Hausa.png';
import Ethiopia from '../Images/Flags/Ethiopian.png';
import France from '../Images/Flags/French.png';
import UK from '../Images/Flags/British.png';
import Spain from '../Images/Flags/Spanish.png';
import Ottoman from '../Images/Flags/Ottoman.png';
import Russia from '../Images/Flags/Russian.png';
import Dutch from '../Images/Flags/Dutch.png';
import Germany from '../Images/Flags/German.png';
import Portugal from '../Images/Flags/Portuguese.png';
import Mexico from '../Images/Flags/Mexican.png';





const initialState = [
    {
        country: 'Player',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: PlayerBackground,
        flag: Player,
        rank: 1,
        team: 'none'
    },
    {
        country: 'Spanish',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: SpainBackground,
        flag: Spain,
        rank: 1,
        team: 'Latin'
    },
    {
        country: 'Aztec',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: AztecBackground,
        flag: Aztec,
        rank: 1,
        team: 'LatinAmerica'
    },
    {
        country: 'Haudenosaunee',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: HaudenosauneeBackground,
        flag: Haudenosaunee,
        rank: 1,
        team: 'NorthAmerica'
    },
    {
        country: 'Lakota',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: LakotaBackground,
        flag: Lakota,
        rank: 1,
        team: 'NorthAmerica'
    },
    {
        country: 'Japanese',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: JapanBackground,
        flag: Japan,
        rank: 1,
        team: 'Asia'
    },
    {
        country: 'Chinese',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: ChinaBackground,
        flag: China,
        rank: 1,
        team: 'Asia'
    },
    {
        country: 'French',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: FranceBackground,
        flag: France,
        rank: 1,
        team: 'Latin'
    },
    {
        country: 'Indians',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: IndiaBackground,
        flag: India,
        rank: 1,
        team: 'Asia'
    },
    {
        country: 'Americans',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: AmericaBackground,
        flag: America,
        rank: 1,
        team: 'NorthAmerica',
        
    },
    {
        country: 'Hausa',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: HausaBackground,
        flag: Hausa,
        rank: 1,
        team: 'Africa'
    },
    {
        country: 'British',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: BritishBackground,
        flag: UK,
        rank: 1,
        team: 'Germanic'
    },
    {
        country: 'Swedish',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: SwedenBackground,
        flag: Sweden,
        rank: 1,
        team: 'Germanic'
    },
    {
        country: 'Incan',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: IncaBackground,
        flag: Inca,
        rank: 1,
        team: 'LatinAmerica'
    },
    {
        country: 'Ethiopians',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: EthiopiaBackground,
        flag: Ethiopia,
        rank: 1,
        team: 'Africa'
    },
    {
        country: 'Portuguese',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: PortugalBackground,
        flag: Portugal,
        rank: 1,
        team: 'Latin'
    },
    {
        country: 'Germans',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: GermanyBackground,
        flag: Germany,
        rank: 1,
        team: 'Germanic'
    },
    {
        country: 'Russians',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: RussiaBackground,
        flag: Russia,
        rank: 1,
        team: 'Latin'
    },
    {
        country: 'Ottomans',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: OttomanBackground,
        flag: Ottoman,
        rank: 1,
        team: 'Africa'
    },
    {
        country: 'Dutch',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: DutchBackground,
        flag: Dutch,
        rank: 1,
        team: 'Germanic'
    },
    {
        country: 'Mexicans',
        wins: 0,
        losses: 0,
        gold: 0,
        silver: 0,
        bronze: 0,
        elo: 1000,
        background: MexicoBackground,
        flag: Mexico,
        rank: 1,
        team: 'LatinAmerica'
    }
];

const countrySlice = createSlice({
    name: 'countries',
    initialState: initialState,
    reducers: {
        prelimEloUpdate(state, action) {
             return state = action.payload    
        },
        roundOf16EloUpdate(state, action) {
            return state = action.payload    
        },
        roundOf8EloUpdate(state, action) {
            return state = action.payload    
        },
        roundOf4EloUpdate(state, action) {
            return state = action.payload    
        },
        roundOf2EloUpdate(state, action) {
            return state = action.payload    
        }        
    }
});

export const countrySliceActions = countrySlice.actions


export default countrySlice.reducer