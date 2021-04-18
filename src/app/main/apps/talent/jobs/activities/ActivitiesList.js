import React, { useEffect } from "react"
import { getAllActivities, selectActivity, updatePagination,getRecentActivities } from "../store/activitySlice";
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableBody, TableRow, TableCell, Button, Avatar } from '@material-ui/core';
import { dateDifference } from "app/utils/helper";
import { useParams } from 'react-router-dom';
import ActivityHeader from "./ActivityHeader";

function ActivitiesList(props) {
    const dispatch = useDispatch();
    const activities = useSelector(selectActivity);
    const pagination = useSelector(({ candidatesApp }) => candidatesApp.activity.pagination);
    const routeParams = useParams();
    useEffect(() => {
        //dispatch(getAllActivities(routeParams));
    }, [routeParams])


    const prevPage = () => {
        if (pagination.page > 0) {
            let paging = {
                sortBy: pagination.sortBy,
                page: pagination.page - 1,
                size: pagination.size
            }
            dispatch(updatePagination(paging));
        }
    }
    const nextPage = () => {
        if (pagination.size <= (activities && activities.length)) {
            let paging = {
                sortBy: pagination.sortBy,
                page: pagination.page,
                size: pagination.size + 5
            }
            dispatch(updatePagination(paging));
            dispatch(getRecentActivities(routeParams));
        }
    }
    return (
        <>
            {/* <ActivityHeader /> */}
            <Table>
                <TableBody>
                    {
                        activities && activities.map((item) => (
                            <TableRow>
                                <TableCell className="flex items-center justify-between">
                                    <div className="flex items-center justify-between">
                                        <Avatar src={item.actor.avatar} alt={item.actor.firstName} />
                                        <span className="ml-5"><b>{item.actor.firstName}  {item.actor.lastName}</b> {item.verb} <b>{item.target.displayName}</b></span>
                                    </div>
                                    <div>
                                        {dateDifference(item.createdDate) + "d"}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
            <Button variant="outlined"
                onClick={(e) => { nextPage(); window.scrollTo(0, 0); }} className="mt-10">Show More</Button>
        </>
    );
}
export default ActivitiesList;