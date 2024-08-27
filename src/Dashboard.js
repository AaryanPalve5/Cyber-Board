import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Select, Button, Typography, Row, Col } from 'antd';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';
import { fetchDataRequest, setFilter } from './actions';

const { Option } = Select;
const { Title } = Typography;
const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, filter, error } = useSelector(state => state);
  const [showTable, setShowTable] = useState(false);

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

  const aggregatedData = filteredData.reduce((acc, item) => {
    const existing = acc.find(entry => entry.category === item.category);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ category: item.category, count: 1 });
    }
    return acc;
  }, []);

  const barData = aggregatedData;

  const users = [...new Set(data.map(item => item.user))];
  const categories = [...new Set(data.map(item => item.category))];

  const COLORS = {
    Malware: '#0088FE',
    Phishing: '#00C49F',
    'Data Breach': '#FFBB28',
    Ransomware: '#FF8042',
    // Add more colors if needed
  };

  const lineChartData = filteredData.reduce((acc, item) => {
    const year = new Date(item.timeStamp).getFullYear();
    const existingYear = acc.find(entry => entry.year === year);
    if (existingYear) {
      existingYear[item.category] = (existingYear[item.category] || 0) + 1;
    } else {
      acc.push({ year, [item.category]: 1 });
    }
    return acc;
  }, []).sort((a, b) => a.year - b.year);

  return (
    <div style={{ padding: '10px', maxWidth: '100%', boxSizing: 'border-box' }}>
      {error && <div style={{ color: 'red', padding: '10px', textAlign: 'center' }}>Error: {error}</div>}
      <Title
  level={3}
  style={{
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    
    fontSize: '34px', // Adjust this value to make the title larger
  }}
>
  Cyber Board
</Title>

      <Row gutter={[8, 8]}>
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
              style={{ flex: 1, marginRight: '5px', padding: '8px', backgroundColor: '#1890ff', borderColor: '#1890ff' }}
            >
              Refresh Data
            </Button>
            <Button
              type="default"
              onClick={resetFilters}
              style={{ flex: 1, padding: '8px' }}
            >
              Reset Filters
            </Button>
          </div>
        </Col>
      </Row>

      <div style={{ textAlign: 'center', margin: '15px 0' }}>
        <Button
          type="primary"
          onClick={() => setShowTable(!showTable)}
          style={{ padding: '20px' }}
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
            pagination={{ pageSize: 10 }} // Reducing number of rows per page to fit the screen
          />
        ) : (
          <Row gutter={[8, 8]} justify="center">
            <Col xs={24} md={12}>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={80}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[entry.name] || '#8884d8'} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                    wrapperStyle={{ fontSize: '15px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Col>
            <Col xs={24} md={12}>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData} margin={{ top: 10, right: 15, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="category"
                    angle={-30}
                    textAnchor="end"
                    height={50}
                    style={{ fontSize: '10px' }}
                  />
                  <YAxis
                    label={{ value: 'Count', angle: -90, position: 'insideLeft', offset: 0 }}
                    style={{ fontSize: '10px' }}
                  />
                  <Tooltip formatter={(value) => `${value}`} />
                  <Legend />
                  <Bar
                    dataKey="count"
                   
                  >
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[entry.category] || '#8884d8'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col xs={24}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineChartData} margin={{ top: 10, right: 15, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'Cases', angle: -90, position: 'insideLeft', offset: 0 }} />
                  <Tooltip />
                  <Legend />
                  {categories.map(category => (
                    <Line key={category} type="monotone" dataKey={category} stroke={COLORS[category] || '#8884d8'} />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
