import React from 'react';
import {Avatar, CardHeader, Card,CardActions,CardContent, Chip} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {indigo} from '@material-ui/core/colors';
import { Link } from 'gatsby';

import {slugify} from '../../util/UtilityFunctions';

/**
 dt, .word{color: blue;}
dd {color: darkblue;}
dt, dd {font-weight: bold}
dd {padding-left: 40px}

.heading1, .irabhighlight{color: darkred;}
.heading2{color: darkmagenta;}
.exception{color: red; display: inline;}
.bg-yellow{background-color: yellow;}
.bg-cyan{background-color: lightcyan;}
.bg-green{background-color: lightgreen;}
 */
const useStyles = makeStyles(theme => ({
  
  chiprow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
  card: {
    maxWidth: '80%',
    margin: 'auto'
  },
  postFont: {
    font: '16px/1.5 "Courier New", sans-serif',
    color: 'rgb(0, 0, 0)'
  },
  header: {
    paddingBottom: '0px'
  },
  '@media (min-width: 37.5rem)': {
    postFont: {
      fontSize : '20px'
    }
  },
  '@global': {
    '.firstword': {
      color: theme.palette.primary.dark,
      fontSize: theme.spacing(3)
    },
    '.word' : {
      color: theme.palette.primary.main
    },
    '.heading1': {
      color: 'darkred'
    },
    '.irabhighlight': {
      color: 'darkred'
    },
    '.heading2' : {
      color: 'darkmagenta'
    },
    '.exception' : {
      color: 'red',
      display: 'inline'
    },
    '.bg-yellow' : {
      backgroundColor: 'yellow'
    },
    '.bg-cyan' : {
      backgroundColor: 'lightcyan'
    },
    '.bg-green' : {
      backgroundColor: 'lightgreen'
    },
    'h2' : {
      margin: '0px',
      fontSize: theme.spacing(3),
      marginTop: theme.spacing(2),
    },
    'h3' : {
      margin: '0px',
      fontSize: theme.spacing(2.5),
      marginTop: theme.spacing(2),
    },
    'p' : {
      margin: '0px'
    },
    'ul' : {
      margin: '0px'
    },
    'blockquote' : {
      margin: '0px',
      padding: '0 1rem',
      borderLeft: '0.25rem solid #ccc',
      width: 'fit-content',
      background: indigo[50]
    }

  }
}));

const FullPost = ({data}) => {
  const classes = useStyles();

  const post = data.markdownRemark.frontmatter;

  return (
    <Card>
      
      {/* <Img fluid={post.image.childImageSharp.fluid}/> */}
      <CardHeader
        avatar={<Avatar aria-label="Recipe" className={classes.avatar}>AB</Avatar>}
        title={post.title}
        subheader={post.date}
        titleTypographyProps={{variant: 'h4' ,component: 'h1'}}
        className={classes.header}
      />
      <CardContent>    
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} className={classes.postFont}/>
      </CardContent>
      
      <CardActions className={classes.chiprow}>
        <div >
          {post.tags.map(tag => (
            <Link key={tag} to={`/tag/${slugify(tag)}`}>
              <Chip size='small' color='primary' label={tag} className={classes.chip} />
            </Link>
            ))}
        </div>
      </CardActions>
    </Card>
  );
}

export default FullPost;