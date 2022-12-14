import { Box, Image, Text } from "@chakra-ui/react"

export default function HealthCondition () {

    const TrendData = [
        {
            id : 1,
            image : 'https://onemg.gumlet.io/h_150,c_fit,w_150,a_ignore,q_auto,f_auto/lamyvim7alidczcxab9r.png'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/d764d1ab-63ac-41f5-896e-ed59c64b85fc.jpg?tr=w-600,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/d40f6cb6-41b2-4a36-97d0-5ff6ecb6e944.jpg?tr=w-600,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/f8be5a5a-16ea-4dda-ac4a-7a182b0546ff.jpg?tr=w-600,cm-pad_resize'
        }
    ]
    return (
        <>
                 <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '5%'}}>HEALTH CONDITIONS</Text>

         {/* <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '5%'}}>TRENDING NOW</Text>
        <SimpleGrid width={{base : '95%', md : '90%'}} columns={[2,2,2,2]} m='auto' rowGap={{base : '20px'}} mt={{base : '15px'}}>
            {TrendData.length > 0 && TrendData.map((elem)=>{
                return <Box key={elem.id}>
                    <Image m='auto' width={{base : '180px', md :  '270px', lg :  '650px'}} src={elem.image}/>
                </Box>
            })}
        </SimpleGrid> */}

        <Box width={{base : '90%', md : '75%', lg : '75%'}} m='auto' mt={{base : '20px', md : '30px', lg : '45px'}}>
          <Image src="https://onemg.gumlet.io/c98770fe-d34f-47b3-b59e-5c152224075d_1667975043.jpg?w=1062&h=124&format=auto"/>
        </Box>
        </>
    )
}