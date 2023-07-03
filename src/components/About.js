import { EditOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function About() {
  const [user, setUser] = useState({})
  const params = useParams()

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'))
    const user = users.find(user => user.id === +params.id)
    setUser(user)
  }, [params.id])

  console.log('params', params)
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div>
        <h1>User {user?.id}</h1>
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
            <SettingOutlined key="setting" />,
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
