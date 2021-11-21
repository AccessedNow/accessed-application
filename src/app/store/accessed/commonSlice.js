import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import queryString from 'query-string';
import _ from 'lodash';

export const searchSkills = createAsyncThunk(
  'search/skills',
  async (query) => {
    const response = await axios.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/common/skills/search?query=${query}&id=`, null);
    const data = await response.data.data;
    return data;
  }
);


export const searchJobFunctions = createAsyncThunk(
  'search/skills',
  async (query) => {
    const response = await axios.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/common/jobfunction/search?query=${query}&id=`, null);
    const data = await response.data.data;
    return data;
  }
);

export const searchIndustries = createAsyncThunk(
  'search/skills',
  async (query) => {
    const response = await axios.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/common/industry/search?query=${query}&id=`, null);
    const data = await response.data.data;
    return data;
  }
);

export const searchLocations = createAsyncThunk(
  'search/locations',
  async (query) => {
    const response = await axios.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/address/search?query=${query}`, null);
    const data = await response.data.data;
    return data;
  }
);
