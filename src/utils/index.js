export * from './tragamonedas';

export function pickRandName() {
  const randomNames = ['Crow', 'Dog', 'Raindeer', 'Budgie', 'Lemur', 'Gorilla', 'Sheep']
  const randomNumber = Math.floor(Math.random() * randomNames.length)
  return randomNames[randomNumber]
}
