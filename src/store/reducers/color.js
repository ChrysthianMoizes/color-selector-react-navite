const INITIAL_STATE = {
  selectedColor: {},
  colors: [
    {
      id: 1,
      color: '#DA70D6',
      name: 'Orchid'
    },
    {
      id: 2,
      color: '#A9A9A9',
      name: 'DarkGray'
    },
    {
      id: 3,
      color: '#9370DB',
      name: 'MediumPurple'
    },
    {
      id: 4,
      color: '#4B0082',
      name: 'Indigo'
    },
    {
      id: 5,
      color: '#00FF00',
      name: 'Lime'
    },
    {
      id: 6,
      color: '#FF00FF',
      name: 'Magenta'
    },
    {
      id: 7,
      color: '#6A5ACD',
      name: 'SlateBlue'
    },
    {
      id: 8,
      color: '#000080',
      name: 'Navy'
    },
    {
      id: 9,
      color: '#0000FF',
      name: 'Blue'
    },
    {
      id: 10,
      color: '#00BFFF',
      name: 'DeepSkyBlue'
    },
    {
      id: 11,
      color: '#ADD8E6',
      name: 'LightBlue'
    },
    {
      id: 12,
      color: '#006400',
      name: 'DarkGreen'
    },
    {
      id: 13,
      color: '#FF1493',
      name: 'DeepPink'
    },
    {
      id: 14,
      color: '#FFB6C1',
      name: 'LightPink'
    },
    {
      id: 15,
      color: '#00FFFF',
      name: 'Cyan'
    },
    {
      id: 16,
      color: '#008B8B',
      name: 'DarkCyan'
    },
    {
      id: 17,
      color: '#800000',
      name: 'Maroon'
    },
    {
      id: 18,
      color: '#B22222',
      name: 'FireBrick'
    },
    {
      id: 19,
      color: '#FFA500',
      name: 'Orange'
    },
    {
      id: 20,
      color: '#FFFF00',
      name: 'Yellow'
    },
    {
      id: 21,
      color: '#000',
      name: 'Black'
    }
  ]
};

export default function color(state = INITIAL_STATE, action) {

  if(action.type === 'SELECT_COLOR'){
    return { ...state, selectedColor: action.color };
  }

  return state;
}
