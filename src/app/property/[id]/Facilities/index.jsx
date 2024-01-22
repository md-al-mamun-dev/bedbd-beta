import styles from './index.module.css';
import LucidIcon from '@/components/LucidIcon';

const Facilities = ({data}) => {

    return  <div className={`${styles.facilities_services}`}>
                {
                    data.map(
                        srv=> ( 
                                <div className={`${styles.service_item}`} >
                                    {
                                        (srv.icon.type === 'lucidicon') 
                                        &&  <LucidIcon name={srv.icon.iconName} size={32} />
                                    }
                                    <h1>{((srv.amount !== null || srv.amount !== undefined && srv.amount !== '') && srv.amount) +' '+ srv.title}</h1>
                                </div>
                            )
                        )
                }
            </div>
        
}

export default Facilities