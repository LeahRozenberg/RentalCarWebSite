import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deleteUser } from '../redux/api';
import { Delete } from '@mui/icons-material';
import swal from 'sweetalert';
import { useNavigate } from 'react-router';

export const UserCard = ({ user }) => {
  const [expanded, setExpanded] = React.useState(false);
  const nav = useNavigate();

 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const del = (id) => {
    console.log(id);
    deleteUser(id)
      .then(() => {
        swal("המשתמש נמחק בהצלחה!", "", "success");
      })
      .catch(() => {
        swal("יש השכרות התלויות במשתמש זה.", "לא ניתן למחוק", "error");
      });
  };

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2, marginBottom: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="car">
            {user.name[0]} 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user.name}
        subheader={user.phoneNumber}
        sx={{ paddingBottom: 1 }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          ת"ז: {user.tz}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton onClick={() => del(user.id)} aria-label="delete">
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};
