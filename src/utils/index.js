export * from './tragamonedas';

export function pickRandName() {
  const randomNames = ['León moderado', 'Gato arriesgado', 'Reno curioso', 'Loro hablador', 'Lemur saltarín', 'Gorila cuidadoso', 'Oveja arriesgada','Pato loco', 'Perro dormilón']
  const randomNumber = Math.floor(Math.random() * randomNames.length)
  return randomNames[randomNumber]
}
