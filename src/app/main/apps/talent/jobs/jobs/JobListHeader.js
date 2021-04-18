
import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Menu } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import { selectJobs, setSelectedItem, updatePagination, getJobs } from '../store/jobsSlice';






function JobListHeader(props) {
    const dispatch = useDispatch();

    const jobs = useSelector(selectJobs);
    const pagination = useSelector(({ jobApp }) => jobApp.jobs.pagination);
    console.log(jobs.length);

    const handlePageSizeChange = (event) => {
        let page = {
            size: event.target.value,
            page: pagination.page,
            sortBy: pagination.sortBy,
            total: pagination.total
        }
        dispatch(updatePagination(page));
        dispatch(getJobs());
    };

    const prevPage = () => {
        if (pagination.page > 0) {
            let page = {
                size: pagination.size,
                page: pagination.page - 1,
                sortBy: pagination.sortBy,
                total: pagination.total
            }
            dispatch(updatePagination(page));
            dispatch(getJobs());
        }
    }
    const nextPage = () => {
        if (pagination.page + 1 < (pagination.total / pagination.size)) {
            let page = {
                size: pagination.size,
                page: pagination.page + 1,
                sortBy: pagination.sortBy,
                total: pagination.total
            }
            dispatch(updatePagination(page));
            dispatch(getJobs());
        }
    }

    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex item-center justify-left">
                <IconButton color="primary">
                    <Icon>search</Icon>
                </IconButton>
            </div>
            <div className="flex items-center justify-end">
                {
                    pagination.total > 0 && (
                        <>
                            <IconButton
                                color="primary"
                                onClick={prevPage}>
                                <Icon>chevron_left</Icon>
                            </IconButton>
                            <span><Typography>{pagination.page + 1} / {Math.ceil(pagination.total / pagination.size)}</Typography></span>
                            <IconButton
                                color="primary"
                                onClick={nextPage}
                            >
                                <Icon>chevron_right</Icon>
                            </IconButton>
                        </>
                    )}
            </div>
            <div className="flex items-center justify-end">


                <Select
                    className="p-0 h-24 "
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={pagination.size}
                    onChange={handlePageSizeChange}                   
                    variant="outlined"
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                    <MenuItem value={100}>100</MenuItem>
                </Select>




            </div>
        </div>
    );
}

export default JobListHeader;