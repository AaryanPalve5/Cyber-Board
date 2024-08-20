import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Select, Button, Typography, Row, Col } from 'antd';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { fetchDataRequest, setFilter } from './actions';

const { Option } = Select;
const { Title } = Typography;

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, filter, error } = useSelector(state => state);
  const [showTable, setShowTable] = useState(true);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const handleFilterChange = (key, value) => {
    dispatch(setFilter({ ...filter, [key]: value }));
  };

  const filteredData = data.filter(item =>
    (filter.user ? item.user === filter.user : true) &&
    (filter.category ? item.category === filter.category : true)
  );

  const pieData = filteredData.reduce((acc, item) => {
    const existing = acc.find(entry => entry.name === item.category);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: item.category, value: 1 });
    }
    return acc;
  }, []);

  // Extract unique options from data
  const users = [...new Set(data.map(item => item.user))];
  const categories = [...new Set(data.map(item => item.category))];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A0E0B8', '#D84A27'];

  return (
    <div style={{ padding: '20px', maxWidth: '100%', boxSizing: 'border-box' }}>
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      {/* Filter Options */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Select
            placeholder="Select User"
            onChange={value => handleFilterChange('user', value)}
            style={{ width: '100%' }}
          >
            {users.map(user => (
              <Option key={user} value={user}>{user}</Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Select
            placeholder="Select Category"
            onChange={value => handleFilterChange('category', value)}
            style={{ width: '100%' }}
          >
            {categories.map(category => (
              <Option key={category} value={category}>{category}</Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Button
            type="primary"
            onClick={() => dispatch(fetchDataRequest())}
            style={{ width: '100%' }}
          >
            Refresh Data
          </Button>
        </Col>
      </Row>

      {/* Centered Toggle Button */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <Button
          type="primary"
          onClick={() => setShowTable(!showTable)}
        >
          {showTable ? 'Show Pie Chart' : 'Show Table'}
        </Button>
      </div>

      {/* Dashboard Title */}
      <Title level={2} style={{ textAlign: 'center' }}>Dashboard</Title>

      {/* Conditional Rendering of Table or Pie Chart */}
      <div style={{ textAlign: 'center' }}>
        {showTable ? (
          <Table
            dataSource={filteredData}
            columns={[
              
              { title: 'Id', dataIndex: 'id', key: 'id' },
              { title: 'User', dataIndex: 'user', key: 'user' },
              { title: 'Category', dataIndex: 'category', key: 'category' },
              { title: 'Details', dataIndex: 'details', key: 'details' },
              { title: 'TimeStamp', dataIndex: 'timeStamp', key: 'timeStamp' },
              { title: 'IP Address', dataIndex: 'ipAddress', key: 'ipAddress' },
            ]}
            rowKey="id"
            style={{ maxWidth: '100%', overflowX: 'auto' }}
          />
        ) : (
          <PieChart width={window.innerWidth < 768 ? 300 : 400} height={window.innerWidth < 768 ? 300 : 400}>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={window.innerWidth < 768 ? 100 : 150}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
