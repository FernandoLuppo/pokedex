interface ICard {
  name: string
  sprites: string
}

export const Card: React.FC<ICard> = ({ name, sprites }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={sprites} alt={name} />
    </div>
  )
}
