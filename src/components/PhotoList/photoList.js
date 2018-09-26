//react-redux
import React, { Component } from "react";
//material-ui

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//styles
import "../../styles/style.css";
//photos
import ArrayOfPhotos from "../../photos/photos";

class photoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: ArrayOfPhotos
    };
    this.addPhoto = this.addPhoto.bind(this);
    this.deletePhoto = this.deletePhoto.bind(this);
  }
  deletePhoto(ttl) {
    this.setState({
      photos: this.state.photos.filter(photo => photo.title !== ttl)
    });
  }
  addPhoto() {
    const img1 = {
      title: prompt("Введите название"),
      Photo: prompt("Введите url"),
      content: prompt("Введите краткое описание")
    };
    if (
      img1.content !== null &&
      img1.content !== "" &&
      img1.title !== "" &&
      img1.Photo !== "" &&
      img1.title !== null &&
      img1.Photo !== null
    ) {
      this.setState({ photos: this.state.photos.concat(img1) });
    } else {
    }
  }
  render() {
    const del = this.deletePhoto;
    const add = this.addPhoto;
    const check = this.state.photos;
    const fixedPhotos = check.map(function(item, index) {
      return (
        <div key={index}>
          <Card>
            <img src={item.Photo} alt="Error" />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {item.title}
              </Typography>
              <Typography component="p">{item.content}</Typography>
            </CardContent>
            <CardActions>
              <IconButton
                variant="fab"
                color="primary"
                onClick={() => del(item.title)}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      );
    });
    return (
      <div className={this.props.className}>
        <Button className="photoAddButton" onClick={add}>
          Add New Image
        </Button>
        <div className="photoList">{fixedPhotos}</div>
      </div>
    );
  }
}

export default photoList;
