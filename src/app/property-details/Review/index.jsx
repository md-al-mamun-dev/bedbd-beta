import styles from './index.module.css';
import Image from 'next/image';
import LucidIcon from '@/components/LucidIcon';
import { formateBlogPostTimestamp } from '@/components/Utility/formateBlogPostTimestamp';

import React from 'react'
import ShowAllBtn from './ShowAllBtn';

const Review = () => {


    const data = 
        [
            {
                'author'    :{
                                'name':'John Doberman', 
                                'avatar':''
                            },
                "timestamp" : 1703703843865,
                "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                'author'    :{
                                'name':'John Doberman', 
                                'avatar':'https://s3-alpha-sig.figma.com/img/1aa6/7521/2dba83baa62c2057ce79df83a3f0bd4c?Expires=1704672000&Signature=nnuAHcKMmTyYFQ77~KkRtl~toyrjsfyVBX1mGQBZelXUzVfzjtjVKzTsdFKZXCyQ~Q4SN5iA7RIAvEB0bq1ZMIVOwVq91fuvduzGuwap2X8aJ9pCyJIRHZY1r1u4T6pB5lcQuMr5fpxOac-tl~eMYwUoVnWwTU9BidV2cfe7mxBQhnP~lPmk5as3gHqIpJnr-66EzA1S9R9IXpsFyhN4sP4OWCRU2i-AgK0ELq6qIzTXxSyaKxAhZcwR277hgUuJKxd2Omuy~qMqEyPZAVDCX9VVEgzMUGIV78FOEY2YZE-kTaaExJpLzWoxJ9P1UHOyxQDzyX5h~~W3flWZsKE4JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            },
                "timestamp" : 1658549569645,
                "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                'author'    :{
                                'name':'John Doberman', 
                                'avatar':''
                            },
                "timestamp" : 1703703843875,
                "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                'author'    :{
                                'name':'John Doberman', 
                                'avatar':'https://s3-alpha-sig.figma.com/img/1aa6/7521/2dba83baa62c2057ce79df83a3f0bd4c?Expires=1704672000&Signature=nnuAHcKMmTyYFQ77~KkRtl~toyrjsfyVBX1mGQBZelXUzVfzjtjVKzTsdFKZXCyQ~Q4SN5iA7RIAvEB0bq1ZMIVOwVq91fuvduzGuwap2X8aJ9pCyJIRHZY1r1u4T6pB5lcQuMr5fpxOac-tl~eMYwUoVnWwTU9BidV2cfe7mxBQhnP~lPmk5as3gHqIpJnr-66EzA1S9R9IXpsFyhN4sP4OWCRU2i-AgK0ELq6qIzTXxSyaKxAhZcwR277hgUuJKxd2Omuy~qMqEyPZAVDCX9VVEgzMUGIV78FOEY2YZE-kTaaExJpLzWoxJ9P1UHOyxQDzyX5h~~W3flWZsKE4JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                            },
                "timestamp" : 1658549569645,
                "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                'author'    :{
                                'name':'John Doberman', 
                                'avatar':''
                            },
                "timestamp" : 1703703843875,
                "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },

        ]

        const reviewContainerId = 'reviews'






  return (
    <div id={reviewContainerId} className={`${styles.reviews}`}>
        {
            data.sort((a, b) => b['timestamp'] - a['timestamp'] )
                .map(
                review=>                    
                    <div className={`${styles.reviews_item}`}>
                        <div className={`${styles.author_info}`}>
                            <div className={`${styles.author_avatar}`}>
                                {
                                    review['author']['avatar'] === ''
                                        ? <Image className={`${styles.user_avater}`} src='/images/user_avater.png' height={48} width={48}/>
                                        : <Image className={`${styles.user_avater}`} src={review['author']['avatar']} height={48} width={48}/>
                                }
                            </div>
                            <div>
                                <div className={`${styles.author_name}`}>{review['author']['name']}</div>
                                <div className={`${styles.timestamp}`}>{formateBlogPostTimestamp(review['timestamp'])}</div>
                            </div>                            
                        </div>
                        <div className={`${styles.review_txt}`}>
                            {review['description']}
                        </div>
                    </div>
                
            )
        }

        <ShowAllBtn contentId={reviewContainerId} reviewCount = {data.length} />
    </div>
  )
}

export default Review