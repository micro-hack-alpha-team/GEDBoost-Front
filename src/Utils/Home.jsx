import React from 'react'
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button } from '@chakra-ui/react'


function Home() {
    const navigate = useNavigate()
return (
<div className='w-full'>
    <p className='text-2xl my-12 font-bold '>Choisissez le volet que vous souhaitez accélérer pour votre solution GED</p>
    <SimpleGrid spacing={4}>
        <div className='w-full flex justify-around'>
            <Card className=''>
                <CardHeader>
                <Heading size='md'>Parametrage</Heading>
                </CardHeader>
                <CardBody>
                <Text>Génération du DCI, Script du paramétrage et encore ...</Text>
                </CardBody>
                <CardFooter>
                <div className='mx-auto'><Button onClick={() => navigate("/survey")}>Commencer</Button></div>
                </CardFooter>
            </Card>
            <div className='h-80 w-1 bg-gray-700 m-4 rounded-3xl'></div>
            <Card>
                <CardHeader>
                <Heading size='md'>Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>Génération d’une base de connaissance a partir de la documentation,<br/> assistant virtuel et autre ...</Text>
                </CardBody>
                <CardFooter>
                <div className='mx-auto'><Button onClick={() => navigate("/survey")}>Commencer</Button></div>
                </CardFooter>
            </Card>
        </div>
        
    </SimpleGrid>
</div>
)
}

export default Home