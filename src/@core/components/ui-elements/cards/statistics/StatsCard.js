// ** Third Party Components
import classnames from 'classnames'
import { TrendingUp, User, Box, DollarSign } from 'react-feather'
import { useState, useEffect } from 'react'
// ** Custom Components
import Avatar from '@components/avatar'
import { getUserlist , getAllCourse} from '../../../../../core/services/api/usersmanager'
// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'

const StatsCard = ({ cols }) => {
   const [totaluser , setTotaluser] = useState([])
   const [totalcourse , setTotalcourse] = useState([])
  
  const Totalusers = async () => {
     const result = await getUserlist()
     setTotaluser(result?.totalCount)
   }
  
  const TotalCourses = async () => {
    const result = await getAllCourse()
    setTotalcourse(result?.totalCount)
  }

   useEffect(()=> {
    Totalusers()
    TotalCourses()
   }, [])
  const data = [
    {
      title: '230k',
      subtitle: ' فروش ',
      color: 'light-primary',
      icon: <TrendingUp size={24} />
    },
    {
      title: totaluser,
      subtitle: 'کاربران',
      color: 'light-info',
      icon: <User size={24} />
    },
    {
      title: totalcourse,
      subtitle: 'دوره ها',
      color: 'light-danger',
      icon: <Box size={24} />
    },
    {
      title: '$9745',
      subtitle: 'درامد',
      color: 'light-success',
      icon: <DollarSign size={24} />
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const colMargin = Object.keys(cols)
      const margin = index === 2 ? 'sm' : colMargin[0]
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-0`]: index !== data.length - 1
          })}
        >
          <div className='d-flex align-items-center'>
            <Avatar color={item.color} icon={item.icon} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{item.title}</h4>
              <CardText className=' mb-0'>{item.subtitle}</CardText>
            </div>
          </div>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>آمار سایت</CardTitle>
        <CardText className='card-text font-small-2 me-25 mb-0'> آخرین تغییرات یک ماه پیش </CardText>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
