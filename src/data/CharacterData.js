import Character from '../components/Character'
import Waldo from '../images/waldo.png';
import Wenda from '../images/wenda.jpg';
import Odlaw from '../images/odlaw.jpg'
import Wizard from '../images/wizard.jpeg'

const Level01Chars = [
    Character(
        'waldo',
        'Waldo',
        Waldo,
        [1831, 1890],
        [699, 794],
    ),
    Character(
        'wenda',
        'Wenda',
        Wenda,
        [2298, 2333],
        [767, 810],
    ),
    Character(
        'odlaw',
        'Odlaw',
        Odlaw,
        [313, 330],
        [667, 755],
    ),
    Character(
        'wizard',
        'Wizard',
        Wizard,
        [792, 847],
        [653, 730],
    )
];

const Level02Chars = [
    Character(
        'waldo',
        'Waldo',
        Waldo,
        [2512, 2636],
        [1347, 1472],
    ),
    Character(
        'wenda',
        'Wenda',
        Wenda,
        [1453, 1481],
        [767, 848],
    ),
    Character(
        'odlaw',
        'Odlaw',
        Odlaw,
        [935, 966],
        [1191, 1261],
    ),
    Character(
        'wizard',
        'Wizard',
        Wizard,
        [182, 266],
        [1395, 1480],
    )
];

const Level03Chars = [
    Character(
        'waldo',
        'Waldo',
        Waldo,
        [340, 403],
        [894, 995],
    ),
    Character(
        'wenda',
        'Wenda',
        Wenda,
        [362, 386],
        [717, 759],
    ),
    Character(
        'odlaw',
        'Odlaw',
        Odlaw,
        [659, 696],
        [1157, 1204],
    ),
    Character(
        'wizard',
        'Wizard',
        Wizard,
        [809, 856],
        [925, 967],
    )
]

export { Level01Chars, Level02Chars, Level03Chars };