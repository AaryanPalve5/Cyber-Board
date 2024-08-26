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

  // Aggregating data by year
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
                      <Cell key={`cell-${index}`} fill={COLORS[entry.name] || '#8884d8'} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                    wrapperStyle={{ fontSize: '14px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Col>
            <Col xs={24} md={12}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="6 6" />
                  <XAxis
                    dataKey="category"
                    angle={-30}
                    textAnchor="end"
                    height={60}
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis
                    label={{ value: 'Count', angle: -90, position: 'insideLeft', offset: 0 }}
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip formatter={(value) => `${value}`} />
                  <Legend />
                  <Bar
                    dataKey="count"
                    label={({ x, y, width, value }) => (
                      <text x={x + width / 2} y={y - 10} dy={-4} textAnchor="middle" fill="#333">
                        {value}
                      </text>
                    )}
                  >
                    {barData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[entry.category] || '#8884d8'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col xs={24}>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={lineChartData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="6 6" />
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
