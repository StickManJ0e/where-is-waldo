import Level from "../components/Level";
import L1Img from '../images/waldo_L1.jpg'
import L2Img from "../images/waldo_L2.jpg"
import L3Img from "../images/waldo_L3.jpg"
import { Level01Chars, Level02Chars, Level03Chars } from './CharacterData';

const LevelData = [
    Level(
        'level01',
        'Level 1',
        L1Img,
        3000,
        1926,
        Level01Chars,
    ),
    Level(
        'level02',
        'Level 2',
        L2Img,
        3000,
        1902,
        Level02Chars,
    ),
    Level(
        'level03',
        'Level 3',
        L3Img,
        1522,
        1206,
        Level03Chars,
    )
]

export default LevelData;