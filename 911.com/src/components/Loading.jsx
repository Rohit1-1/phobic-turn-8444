import React from 'react'
import { Box,Spinner} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
const Loading = () => {
    const {isLoading}=useSelector((store)=>store.Appreducer)
  return (
    <div>
      {isLoading&&<Box height={'70vh'} display='flex' alignItems={'center'} justifyContent={'center'}><Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='#ff6f61'size='xl'/></Box>}
    </div>
  )
}

export default Loading
