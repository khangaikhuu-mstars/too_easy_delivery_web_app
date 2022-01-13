import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const BreadCrumbComponent = (props) => {
  return (
    <div>
      <Breadcrumb mt-3>
        <Breadcrumb.Item >Хайлт</Breadcrumb.Item>
        <Breadcrumb.Item active>{props.data}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default BreadCrumbComponent;
