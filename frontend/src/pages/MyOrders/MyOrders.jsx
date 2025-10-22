import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { assets } from '../../assets/assets'
import { useTranslation } from 'react-i18next'

const MyOrders = () => {

    const { url, token } = useContext(StoreContext)
    const [data, setData] = useState([])
    const { t } = useTranslation()

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } })
        setData(response.data.data)
        console.log(response.data.data)
    }

    useEffect(() => {
        if (token) {
            fetchOrders()
        }
    }, [token])
    return (
        <div className='my-orders'>
            <h2>{t("orders.title")}</h2>
            <div className='container'>
                {data.map((order, index) => {
                    return (
                        <div key={index} className='my-orders-order'>
                            <img src={assets.parcel_icon} alt="" />
                            <p>{order.items.map((item, index) => {
                                if (index === order.items.length - 1) {
                                    return item.name + "x" + item.quantity
                                } else {
                                    return item.name + "x" + item.quantity + ","
                                }
                            })}</p>
                            <p>${order.amount}.00</p>
                            <p>{t("orders.items_count")}: {order.items.length}</p>
                            <p>
                                <span>&#x25cf;</span>
                                <b>{t(`orders.status.${order.status.toLowerCase()}`, { defaultValue: order.status })}</b>
                            </p>
                            <button onClick={fetchOrders}>{t("orders.track_button")}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyOrders
