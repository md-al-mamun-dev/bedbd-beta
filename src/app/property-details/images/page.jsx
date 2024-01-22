import styles from './page.module.css'
import PropertyImageDetails from '@/components/ImageDetails'


export async function generateMetadata({ params }) {
    return {
        title: "Images",
        description: "See Images of property"
    }
  }

const Images = () => {
    const details = {
        images:[
            {
                imageTitle:'Living room',
                imageUrl: '/images/4eabfbe482568e48247e3a0119a702ca.jpeg',
                content:'',
                tags:' ' 
            },{
                imageTitle:'Decoration',
                imageUrl: '/images/dab98b8e77b48c65d7c3e2032f00af6c.jpeg',
                content:'',
                tags:' ' 
            },{
                imageTitle:'Bedroom',
                imageUrl: '/images/edd4ba000bdfa85be11654df3de4ccf3.jpeg',
                content:'',
                tags:' ' 
            },{
                imageTitle:'Dining room',
                imageUrl: '/images/ff4537db926dfeb0067a37eecda96e8f.jpeg',
                content:'',
                tags:' ' 
            },{
                imageTitle:'front view',
                imageUrl: '/images/edd4ba000bdfa85be11654df3de4ccf3.jpeg',
                content:'',
                tags:' ' 
            },{
                imageTitle:'front view',
                imageUrl: '/images/ff4537db926dfeb0067a37eecda96e8f.jpeg',
                content:'',
                tags:' ' 
            },{
                imageTitle:'front view',
                imageUrl: '/images/edd4ba000bdfa85be11654df3de4ccf3.jpeg',
                content:'',
                tags:' ' 
            },{
                imageTitle:'front view',
                imageUrl: '/images/ff4537db926dfeb0067a37eecda96e8f.jpeg',
                content:'',
                tags:' ' 
            }
        ]
    }
  return (
    <PropertyImageDetails data={details.images} />
  )
}

export default Images