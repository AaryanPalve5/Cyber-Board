// src/Dashboard.js

import React, { useEffect, useState } from 'react';
import { Table, Select, Button, Typography, Row, Col } from 'antd';
import { PieChart, Pie, Cell } from 'recharts';

const { Option } = Select;
const { Title } = Typography;

const API_URL = '/api/v1/userActivities';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ user: '', category: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilter({ ...filter, [key]: value });
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

  return (
    <div>
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      <Row gutter={16}>
        <Col span={8}>
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
        <Col span={8}>
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
        <Col span={8}>
          <Button type="primary" onClick={() => {
            // Refresh data when clicked
            fetchData();
          }}>
            Refresh Data
          </Button>
        </Col>
      </Row>
      <Title level={2}>Dashboard</Title>
      <Row gutter={16}>
        <Col span={12}>
          <Table
            dataSource={filteredData}
            columns={[
              { title: 'User', dataIndex: 'user', key: 'user' },
              { title: 'Category', dataIndex: 'category', key: 'category' },
              // Add other columns as needed
            ]}
            rowKey="id"
          />
        </Col>
        <Col span={12}>
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={150}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
              ))}
            </Pie>
          </PieChart>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
