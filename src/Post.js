import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import "./post.css"
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


function Post(props) {
  
     
        
    return (
        <div className="card">
             <Card className="card_ui">
      <CardHeader
        
       className="bold"
        title={props.name}
        subheader={props.time}
      />
      <CardMedia
  style={{height: 0, paddingTop: '56.25%'}}
  image={props.image}
  title="lorem ipsum"
/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          
        </Typography>
      </CardContent>
      
        
        <CardContent>
      <Typography paragraph>{props.name}</Typography>
          
          <Typography paragraph>
          {props.text}
          </Typography>
          
        </CardContent>
      
    </Card>
        </div>
    )
}

export default Post
