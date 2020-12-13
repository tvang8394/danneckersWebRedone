import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import item1 from "../assets/img/examples/item-1.svg";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Divider } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../store/actions/addItemAction";
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 100,
  },
});

export default function MyCard({ item }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDelete = (item) => {
    dispatch(deleteItem(item));
    console.log("delete");
  };

  const handleRemove = (item) => {
    item.qty = item.qty - 1;
    dispatch(updateItem(item));
  };

  const handleAdd = (item) => {
    item.qty = item.qty + 1;
    dispatch(updateItem(item));
  };

  return (
    <Card
      className={classes.root}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <CardMedia
        style={{ width: "100px" }}
        className={classes.media}
        image={item1}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
          {item.name}
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            style={{ marginTop: "6px" }}
          >
            ${item.price} * {item.qty}
          </Typography>

          <IconButton onClick={() => handleAdd(item)}>
            <AddIcon />
          </IconButton>
          <IconButton onClick={() => handleRemove(item)}>
            <RemoveIcon />
          </IconButton>
        </div>
      </CardContent>

      <CardActions>
        <div>
          <Typography variant="h6" color="textSecondary" component="p">
            ${item.price * item.qty}
          </Typography>
          <Button size="small" color="primary" onClick={() => handleDelete(id)}>
            Remove
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
