import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../Services/cryptoApi';
import { Cryptocurrencies, News} from '../Components'

const { Title } = Typography;

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data ?.data ?.stats;

  if(isFetching) return 'Loading ...';

  return (
    <div>
      <Typography.Title level={2} className='heading' >Global Crypto Stats</Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exhanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>

      <div className='home-heading-container'>
        <Title level={2} className="home-title">
          Top 10 cryptocurrencies in the world
        </Title>
        <Title level={3}  className="home-title">
           <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3}  className="home-title">
           <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </div>
  )
}

export default Homepage;