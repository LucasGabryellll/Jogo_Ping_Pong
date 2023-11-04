interface PlayerProps {
  id: string;
}

interface AddPlayerProps extends PlayerProps{
  name: string
}

export { PlayerProps, AddPlayerProps }