import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GridItem from "components/Grid/GridItem.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import { useEffect, useState } from "react";
import profilePageStyle from "assets/jss/nextjs-material-kit-pro/pages/profilePageStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles(profilePageStyle);

export default function DisplayOrders() {
  const { user } = useSelector((state) => state.user);
  const classes = useStyles();
  const [orderData, setOrderData] = useState(null);
  const [lineItems, setLineItems] = useState([]);
  const priceFormat = (price) => {
    const newPrice = price.toString();
    if (newPrice.length === 2) {
      let myPrice = "." + newPrice.slice(0, 1) + newPrice.slice(1);
      price = myPrice;
    }
    if (newPrice.length === 3) {
      let myPrice = newPrice.slice(0, 1) + "." + newPrice.slice(1);
      price = myPrice;
    }

    if (newPrice.length === 4) {
      let myPrice = newPrice.slice(0, 2) + "." + newPrice.slice(2);
      price = myPrice;
    }
    return price;
  };
  useEffect(() => {
    const getOrder = async () => {
      const getCustomerId = await fetch(`/api/getCustomer/${user.email}`, {});
      const customerResponse = await getCustomerId.json();
      const customerId = customerResponse.customerId;

      const getOrder = await fetch(`/api/getOrder/${customerId}`);
      const orderResponse = await getOrder.json();
      const newOrderData = orderResponse["elements"];
      const orderId = newOrderData.id;
      console.log(newOrderData);
      if (newOrderData.length !== 0) {
        setOrderData(newOrderData);
      } else {
        setOrderData(false);
      }
    };
    getOrder();
  }, []);

  const getLineItems = async (orderId) => {
    const lineItems = await fetch(`/api/getAllLineItems/${orderId}`);
    const response = await lineItems.json();
    setLineItems(response["elements"]);
  };
  return (
    <>
    {/* {console.log(orderData)} */}
      {orderData ? (
        orderData.map((order) => {
          const total = priceFormat(order.total);
          const orderId = order.id;
          getLineItems(orderId);
          return (
            <GridItem
              xs={6}
              sm={6}
              md={6}
              className={classes.gridItem}
              key={orderId}
            >
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Order ID: {orderId}
                  </Typography>
                  <Typography variant="h6" component="h3">
                    Total: ${total}
                  </Typography>

                  <List
                    subheader={<ListSubheader>Items</ListSubheader>}
                    className={classes.root}
                  >
                    {lineItems.map((item) => {
                      return (
                        <ListItem
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {item.name} <span>${priceFormat(item.price)}</span>
                        </ListItem>
                      );
                    })}
                  </List>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">View Order</Button>
                </CardActions> */}
              </Card>
            </GridItem>
          );
        })
      ) : (
        <h3>No Order History</h3>
      )}
    </>
  );
}
