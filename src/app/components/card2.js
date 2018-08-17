import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function Card2(props) {
  const { classes } = props;
  return (
    <div>
      <Link href="/">
        <a>
          <h3>Go to Index</h3>
        </a>
      </Link>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/cat.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Card 2
          </Typography>
          <Typography component="p">
            The domestic cat (Felis silvestris catus or Felis catus) is a small,
            typically furry, carnivorous mammal. They are often called house cats
            when kept as indoor pets or simply cats when there is no need to distinguish
            them from other felids and felines. They are often valued by humans for
            companionship and for their ability to hunt vermin.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Card2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card2);
