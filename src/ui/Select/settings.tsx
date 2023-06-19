export type ColourOption = {
    label: string; // название цвета
    color: string; // код цвета в формате HEX
  }
  
  // Массив цветовых вариантов
  export const colourOptions: ColourOption[] = [
    { label: 'Red', color: '#FF0000' },
    { label: 'Green', color: '#00FF00' },
    { label: 'Blue', color: '#0000FF' },
    { label: 'Yellow', color: '#FFFF00' },
    { label: 'Purple', color: '#800080' },
  ]