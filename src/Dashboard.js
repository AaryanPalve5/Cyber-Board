import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Select, Button, Typography, Row, Col } from 'antd';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
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

  const resetFilters = () => {
    dispatch(setFilter({ user: null, category: null }));
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

  const groupedData = filteredData.reduce((acc, item) => {
    const year = new Date(item.timeStamp).getFullYear();
    const key = `${item.category}-${year}`;
    if (!acc[key]) {
      acc[key] = { category: item.category, year, count: 0 };
    }
    acc[key].count += 1;
    return acc;
  }, {});

  const barData = Object.values(groupedData);

  const users = [...new Set(data.map(item => item.user))];
  const categories = [...new Set(data.map(item => item.category))];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A0E0B8', '#D84A27'];

  return (
    <div style={{ padding: '20px', maxWidth: '100%', boxSizing: 'border-box' }}>
      {error && <div style={{ color: 'red', padding: '10px', textAlign: 'center' }}>Error: {error}</div>}
      
      <Title level={2} style={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif', padding: '20px' }}>
        Cyber Board
      </Title>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Select
            placeholder="Select User"
            value={filter.user || undefined}
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
            value={filter.category || undefined}
            onChange={value => handleFilterChange('category', value)}
            style={{ width: '100%' }}
          >
            {categories.map(category => (
              <Option key={category} value={category}>{category}</Option>
            ))}
          </Select>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              type="primary"
              onClick={() => dispatch(fetchDataRequest())}
              style={{ flex: 1, marginRight: '10px', padding: '10px', backgroundColor: '#1890ff', borderColor: '#1890ff' }}
            >
              Refresh Data
            </Button>
            <Button
              type="default"
              onClick={resetFilters}
              style={{ flex: 1, padding: '10px' }}
            >
              Reset Filters
            </Button>
          </div>
        </Col>
      </Row>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <Button
          type="primary"
          onClick={() => setShowTable(!showTable)}
          style={{ padding: '25px' }}
        >
          {showTable ? 'Show Dashboard' : 'Show Table'}
        </Button>
      </div>

      <div style={{ textAlign: 'center', padding: '5px' }}>
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
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} md={12}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Col>
            <Col xs={24} md={12}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count">
  {barData.map((entry, index) => {
    let color = '#0088FE'; // default color
    if (entry.category === 'Malware') color = '#0088FE'; // blue
    if (entry.category === 'Phishing') color = '#00C49F'; // green
    if (entry.category === 'Data Breach') color = '#FFBB28'; // yellow
    if (entry.category === 'Ransomware') color = '#FF8042';

    return <Cell key={`cell-${index}`} fill={color} />;
  })}
</Bar>

                </BarChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
