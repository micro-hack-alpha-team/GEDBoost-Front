import React from 'react'
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button } from '@chakra-ui/react'


function Home() {
    const navigate = useNavigate()
return (
<div>
    <p className='text-2xl my-4 font-bold '>Choisissez le volet que vous souhaitez accélérer pour votre solution GED</p>
    <SimpleGrid className='flex justify-around' spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <Card>
            <CardHeader>
            <Heading size='md'>Parametrage</Heading>
            </CardHeader>
            <CardBody>
            <Text>Génération du DCI, Script du paramétrage et encore ...</Text>
            </CardBody>
            <CardFooter>
            <Button>Commencer</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader>
            <Heading size='md'>Customer dashboard</Heading>
            </CardHeader>
            <CardBody>
            <Text>Génération d’une base de connaissance a partir de la documentation, assistant virtuel et autre ...</Text>
            </CardBody>
            <CardFooter>
            <Button>Commencer</Button>
            </CardFooter>
        </Card>
    </SimpleGrid>
</div>
)
}

export default Home