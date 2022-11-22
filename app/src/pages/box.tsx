import Box from '@/components/canvas/Box'
import { ReactElement } from 'react'

export default function Page(props) {
  return (<></>)
}

Page.canvas = (props) => {
    
    const xAxis: ReactElement[] = []
    const yAxis: ReactElement[] = []
    const zAxis: ReactElement[] = []

    for (let x = -300; x < 303; x+=6)  {
        xAxis.push(<Box route='/' position={[x, 0, 0]} />)
    }

    for (let y = -300; y < 303; y+=6)  {
        y !== 0 && yAxis.push(<Box route='/' position={[0, y, 0]} />)
    }

    for (let z = -300; z < 303; z+=6)  {
        z !== 0 && zAxis.push(<Box route='/' position={[0, 0, z]} />)
    }

    return(  
    <>
        {xAxis}
        {yAxis}
        {zAxis}
    </>
    )
}

export async function getStaticProps() {
  return { props: { title: 'Box' } }
}
