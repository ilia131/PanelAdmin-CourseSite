// ** React Imports
import { useContext } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Context
 import { ThemeColors } from '../../../../../../utility/context/ThemeColors'

// ** Demo Components
 import CompanyTable from './CompanyTable'
 import Earnings from '../../../../../components/ui-elements/cards/analytics/Earnings'
 import CardMedal from '../../../../../components/ui-elements/cards/advance/CardMedal'
 import CardMeetup from '../../../../../components/ui-elements/cards/advance/CardMeetup'
 import StatsCard from '../../../../../components/ui-elements/cards/statistics/StatsCard'
 import GoalOverview from '../../../../../components/ui-elements/cards/analytics/GoalOverview'
 import RevenueReport from '../../../../../components/ui-elements/cards/analytics/RevenueReport'
 import OrdersBarChart from '../../../../../components/ui-elements/cards/statistics/OrdersBarChart'
 import CardTransactions from '../../../../../components/ui-elements/cards/advance/CardTransactions'
 import ProfitLineChart from '../../../../../components/ui-elements/cards/statistics/ProfitLineChart'
 import CardBrowserStates from '../../../../../components/ui-elements/cards/advance/CardBrowserState'

// ** Styles
import '../../../../../scss/react/libs/charts/apex-charts.scss'
import '../../../../../scss/base/pages/dashboard-ecommerce.scss'

const EcommerceDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)

  // ** vars
   const trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>
       <Row className='match-height'>
        <Col xl='4' md='6' xs='12'>
           <CardMedal /> 
        </Col>
        <Col xl='8' md='6' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
        </Col>
      </Row>
      
      <Row className='match-height'>
        <Col lg='8' xs='12'>
          <CompanyTable />
        </Col>
        
        <Col lg='4' md='6' xs='12'>
          <CardBrowserStates colors={colors} trackBgColor={trackBgColor} />
        </Col>
        
      </Row> 
      
    </div>
  )
}

export default EcommerceDashboard
