
import {
    CircularProgress,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
   
} from "@material-ui/core";

import {useEffect, useState} from "react";
import {fetchOrders} from "../service/api.Request";
import { Button } from "@material-ui/core";




const useStyles = makeStyles(() => ({
    tableContainer: {
        margin: '16px',
        width: 'auto',
        
    },
    tableId:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderTop: 5 ,
        borderColor: 'red',

    },
    TableRow:{
        
        borderTop: 5 ,
        borderColor: 'red'
    }
    
}));


export const Orders = () => {
    const [orders, setOrders] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        setTimeout(() => {
            fetchOrders().then((data) => setOrders(data));
        }, 500);
    }, [])

    useEffect(() => {
        if (orders) {
            setIsLoading(false);
        }
    }, [orders])
    console.log(orders)

    const handleOrder =()=>{
        
    }

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table>
                <TableHead>
                    <TableRow className={classes.TableRow}>
                        <TableCell className={classes.tableId}>Order ID</TableCell>
                        <TableCell>Title </TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Thumbnail</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Order</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        orders?.products.map((item) => {
                            const {id, title, description,thumbnail,price} = item;
                            return (
                                <TableRow key={id} className={classes.TableRow}>
                                    <TableCell className={classes.tableId}>{id}</TableCell>
                                    <TableCell className={classes.TableRow}>{title}</TableCell>
                                    <TableCell className={classes.TableRow}>{description}</TableCell>
                                    <TableCell className={classes.TableRow}>{thumbnail}</TableCell>
                                    <TableCell className={classes.TableRow}>{price}$</TableCell>
                                    <TableCell><Button onClick={handleOrder}>Order</Button></TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            {isLoading && <CircularProgress color="secondary" size={20}/>}
        </TableContainer>
    )
}

