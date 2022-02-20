import React from 'react'
import styles from  "../styles/IpInfo.module.css"

function IpInfo({ipAddress,location,isp}) {
  return (
    <div className={styles.ip_address_info_container}>
        <div className={styles.item}>
            <div className={styles.item_header}>IP Address</div>
            <div className={styles.item_info}>{ipAddress}</div>
        </div>
        <div className={styles.item}>
            <div className={styles.item_header}>Location</div>
            <div className={styles.item_info}>{location.region}, {location.country}</div>
        </div>
        <div className={styles.item}>
            <div className={styles.item_header}>Timezone</div>
            <div className={styles.item_info}>UTC {location.timezone}</div>
        </div> 
        <div className={styles.item}>
            <div className={styles.item_header}>ISP</div>
            <div className={styles.item_info}>{isp}</div>
        </div> 
    </div>
  )
}

export default IpInfo