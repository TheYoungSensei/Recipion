import Image from 'next/image'

import pastryPng from '../../assets/icons/pastry.png'

const PastryIcon = ({}) => {
  return (
    <Image src={pastryPng} alt='Pastry' height={24} width={24} />
  )
}

export default PastryIcon