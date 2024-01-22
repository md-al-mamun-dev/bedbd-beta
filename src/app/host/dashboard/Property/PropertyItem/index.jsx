import styles from './index.module.css'
import EditBtn from './EditBtn'
import DltBtn from './DltBtn'
import MoreBtn from './MoreBtn'
import ShareBtn from './ShareBtn'
import PreviewBtn from './PreviewBtn'
import Image from 'next/image'



const PropertyItem = ({data, siNo}) => {

  return (  <div className='w-100'>
                {/* <Image src={data['thumbnailUrl']}  height={192} width={345}/> */}
                <div>{siNo}</div>
                <div>{data['uid']}</div>
                <div>{data['name']}</div>
                {/* <div>{data['address']}</div> */}
                {/* <PreviewBtn/> */}
                <div className={`${styles.btn_grp}`}>
                  <EditBtn/> <DltBtn/><MoreBtn/>
                  {/* <ShareBtn/> */}
                </div>
            </div>
  )
}

export default PropertyItem