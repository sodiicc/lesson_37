import { EditOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
  const [user, setUser] = useState({})
  const params = useParams()

  useEffect(() => {
    getUser(params.id)
  }, [params.id])

  const getUser = async (id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    setUser(data)
    // let avaRes = await fetch(`https://picsum.photos/id/${id}/200/300`)
    // const avaData = await avaRes.json()
    // console.log('avaData', avaData)
    // setAvatar(avaData)
  }
  console.log('params', params)
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div>
        <h1>User {user.id}</h1>
        <Card
          style={{
            width: 500,
          }}
          cover={
            <img
              alt="example"
              src={`https://picsum.photos/id/${params.id + 50}/300/200`}
            />
          }
          actions={[
            <SettingOutlined ned key="setting" />,
            <EditOutlined key="edit" />
          ]}
        >
          <Meta
            avatar={<Avatar size={100} src={`https://picsum.photos/id/${params.id}/200/300`} />}
            title={user.name}
            description={user.phone}
          />
        </Card>

      </div>
    </div>
  )
}
