import styles from './index.module.css'
import PropertyItem from './PropertyItem'
// import sampleImg from '@/../public/images/dab98b8e77b48c65d7c3e2032f00af6c.jpeg'

const Property = () => {




const data = [
    {
        'id':0,
        'uid': 'DHK-12546213',
        'name':'Property A',
        'thumbnailUrl':'/images/dab98b8e77b48c65d7c3e2032f00af6c.jpeg',
        'address':'Sector-13, Uttora, Dhaka north'
    },
    {
        'id':1,
        'uid': 'DHK-12546214',
        'name':'Property B',
        'thumbnailUrl':'/images/dab98b8e77b48c65d7c3e2032f00af6c.jpeg',
        'address':'Sector-13, Uttora, Dhaka north'
    },
    {
        'id':2,
        'uid': 'DHK-12546215',
        'name':'Property C',
        'thumbnailUrl':'/images/dab98b8e77b48c65d7c3e2032f00af6c.jpeg',
        'address':'Sector-13, Uttora, Dhaka north'
    }, 
    {
        'id':3,
        'uid': 'DHK-12546216',
        'name':'Property D',
        'thumbnailUrl':'/images/dab98b8e77b48c65d7c3e2032f00af6c.jpeg',
        'address':'Sector-13, Uttora, Dhaka north'
    },
    {
        'id':2,
        'uid': 'DHK-12546217',
        'name':'Property E',
        'thumbnailUrl':'/images/dab98b8e77b48c65d7c3e2032f00af6c.jpeg',
        'address':'Sector-13, Uttora, Dhaka north'
    },
    {
        'id':3,
        'uid': 'DHK-12546218',
        'name':'Property F',
        'thumbnailUrl':'/images/dab98b8e77b48c65d7c3e2032f00af6c.jpeg',
        'address':'Sector-13, Uttora, Dhaka north'
    },
]


  return (
    <div className={`${styles.property_body}`}>
        <div>
            <div>SI No.</div>
            <div>Property ID</div>
            <div>Property Name</div>
            <dvi>Actions</dvi>
        </div>
            {
                data.map( (property, idx) =><PropertyItem key={property['id']} data={property} siNo={idx}/> )
            }
    </div>
  )
}

export default Property