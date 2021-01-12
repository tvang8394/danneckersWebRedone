import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },
}));

export default function PaymentFormUser() {
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);
  const formik = useFormik({
    initialValues: {
      fullName: user.user.displayName,
      address: "",
      city: "",
      email: user.user.email,
      zipCode: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <h3>Shipping Information</h3>
      <form
        onSubmit={formik.handleSubmit}
        className={classes.root}
        autoComplete="off"
      >
        <TextField
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          label="Full Name"
        />
        <br />
        <TextField
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          label="Email"
        />
        <br />
        <TextField
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address}
          label="Shipping Address"
        />
        <br />
        <TextField
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
          label="City"
        />
        <br />
        <TextField
          id="zipCode"
          name="zipCode"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.zipCode}
          label="Zip Code"
        />
      </form>
    </>
  );
}
