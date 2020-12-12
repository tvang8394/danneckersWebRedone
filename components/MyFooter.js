import presentationStyle from "../assets/jss/nextjs-material-kit-pro/pages/presentationStyle";
import Footer from "./Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Button from "components/CustomButtons/Button.js";
import ListItem from "@material-ui/core/ListItem";
const useStyles = makeStyles(presentationStyle);

export default function MyFooter() {
  const classes = useStyles();

  return (
    <Footer
      theme="dark"
      content={
        <div>
          <div className={classes.left}>
            <a href="/" className={classes.footerBrand}>
              Danneckers Liquor & Grocery
            </a>
          </div>
          <div className={classes.pullCenter}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a href="/" target="_blank" className={classes.block}>
                  Policy
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="/contact-us" className={classes.block}>
                  Contact Us
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.rightLinks}>
            <ul>
              <li>
                <Button
                  href="/"
                  target="_blank"
                  color="facebook"
                  justIcon
                  simple
                >
                  <i className="fab fa-facebook" />
                </Button>
              </li>
              <li>
                <Button
                  href="/"
                  target="_blank"
                  color="twitter"
                  justIcon
                  simple
                >
                  <i className="fab fa-twitter" />
                </Button>
              </li>

              <li>
                <Button
                  href="/"
                  target="_blank"
                  color="instagram"
                  justIcon
                  simple
                >
                  <i className="fab fa-instagram" />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
}
