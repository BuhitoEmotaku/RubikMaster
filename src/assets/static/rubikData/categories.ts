import type { Category } from '../types/types';
import useAssets from '@/assets/scripts/composable';

export const typeIndexMap: Record<string, number> = {
  "f2l": 0,
  "oll": 1,
  "pll": 2,
  "zbll": 3,
  "cls": 4,
  "coll": 5,
  "f2lA": 6,
  "rnIn": 7
};

export const algorithmParams: Record<string, string> = {
  "f2l": 'stage=f2l&fmt=svg&size=300&r=y30x-34&case=',
  "oll": 'stage=oll&fmt=svg&size=300&r=y30x-34&view=plan&case=',
  "coll": 'stage=coll&fmt=svg&size=300&r=y30x-34&view=plan&case=',
  "pll": 'stage=pll&fmt=svg&size=200&view=plan&case=',
  "zbll": 'stage=zbll&fmt=svg&size=200&view=plan&case=',
  "cls": 'stage=cls&fmt=svg&size=300&r=y30x-34&case=',
  "f2lA": 'stage=f2l&fmt=svg&size=300&r=y30x-34&case=',
  "rnIn": 'stage=f2l&fmt=svg&size=300&r=y30x-34&case='
};


export const categories: any[] = [
  {
    "type": {
      "name": "f2l",
      "img": useAssets('/src/assets/images/typesImgs/f2lA.png')
    },
    "subtypes": [
      "All",
      "Free Pair",
      "Oriented Pair",
      "Disoriented pair"
    ]
  },
  {
    "type": {
      "name": "oll",
      "img": useAssets('/src/assets/images/typesImgs/oll.png')
    },
    "subtypes": [
      "All",
      "All Corners Oriented",
      "Awkward Shapes",
      "C Shapes",
      "Dot Case",
      "Fish Shapes",
      "Knight Move Shapes",
      "L Shapes",
      "Lightning Shapes",
      "Line Shapes",
      "OCLL",
      "P Shapes"
    ]
  },
  {
    "type": {
      "name": "pll",
      "img": useAssets('/src/assets/images/typesImgs/pll.png')
    },
    "subtypes": [
      "All",
      "Adj Swap",
      "Opp Swap",
      "EPLL"
    ]
  },
  {
    "type": {
      "name": "zbll",
      "img": useAssets('/src/assets/images/typesImgs/zbll.png')
    },
    "subtypes": [
      "U1", "U2", "U3", "U4", "U5", "U6",
      "T1", "T2", "T3", "T4", "T5", "T6",
      "L1", "L2", "L3", "L4", "L5", "L6",
      "H1", "H2", "H3", "H4",
      "Pi1", "Pi2", "Pi3", "Pi4", "Pi5", "Pi6",
      "S1", "S2", "S3", "S4", "S5", "S6",
      "AS1", "AS2", "AS3", "AS4", "AS5"
    ]
  },
  {
    "type": {
      "name": "cls",
      "img": useAssets('/src/assets/images/typesImgs/cls.png')
    },
    "subtypes": [
      "All",
      "Front",
      "Right"
    ]
  },
  {
    "type": {
      "name": "coll",
      "img": useAssets('/src/assets/images/typesImgs/coll.png')
    },
    "subtypes": [
      "All",
      "Anti Sune",
      "Sune",
      "L",
      "U",
      "T",
      "Pi",
      "H"
    ]
  },
  {
    "type": {
      "name": "f2lA",
      "img": useAssets('/src/assets/images/typesImgs/f2lA.png')
    },
    "subtypes": [
      "All",
      "Front",
      "Right",
      "Left",
      "Back"
    ]
  },
  {
    "type": {
      "name": "rnIn",
      "img": useAssets('/src/assets/images/typesImgs/rnIn.png')
    },
    "subtypes": [
      "All"
    ]
  }
];