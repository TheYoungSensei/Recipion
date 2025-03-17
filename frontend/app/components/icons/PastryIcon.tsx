import Image from 'next/image'

import pastryPng from '../../assets/icons/pastry.png'

const PastryIcon = ({}) => {
  return (
    <Image src={pastryPng} alt='Pastry' height={20} width={20} />
  )
}

export default PastryIcon