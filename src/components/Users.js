import { Button, Divider, Pagination, Steps } from 'antd'
import { DropboxOutlined, PoweroffOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Users() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const pageSize = 7
  const description = 'This is a description'

  // useEffect(() => {
  //   getUsers()
  // }, [])

  const getUsers = async () => {
    setLoading(true)
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => setLoading(false))
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
    setLoading(false)
  }
  const onPaginationChange = (page) => {
    setPage(page)
  }

  return (
    <StyledUsers>
      Users
      <div className='user'>USER</div>
      {/* <Button type='link'>Button</Button> */}
      <Steps
    current={1}
    status="process"
    items={[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Process',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]}
  />
      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        loading={loading}
        onClick={getUsers}
        size='small'
        className='square'
      >
        Get Users
      </Button>
      <Divider />
      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        loading={loading}
        onClick={getUsers}
        size='large'
        shape='round'
      >
        Get Users
      </Button>
      <Divider />
      <Button
        type="primary"
        icon={<DropboxOutlined />}
        loading={loading}
        onClick={getUsers}
      >
        Get Users
      </Button>
      <Divider />
      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        loading={loading}
        onClick={getUsers}
      >
        Get Users
      </Button>
      {/* <Button
          type="primary"
          icon={<PoweroffOutlined  />}
          // loading={loading}
          onClick={() => setLoading(!loading)}
        >
          Click me!
        </Button> */}
      {
        users.slice((page - 1) * pageSize, page * pageSize).map(user => {
          return <p key={user.id}>{user.name}</p>
        })
      }
      {
        users.length > 0 &&
        <Pagination onChange={onPaginationChange} current={page} pageSize={pageSize} total={users.length} />
      }
    </StyledUsers>
  )
}

const StyledUsers = styled.div`
  /* font-size: 50px; */
  color: gray;
  font-weight: bold;

  .user {
    font-size: 80px;
    color: green;
    font-weight: bold;
  }

  .square {
    border-radius: 0;
  }
`

// const StyledUser = styled.div`
//   font-size: 80px;
//   color: green;
//   font-weight: bold;
// `
