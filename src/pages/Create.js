import React from 'react';
import axios from 'axios';
import '../App.css'
import imgEmptyAvatar from '../assets/codelit_empty_avatar.svg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      loading: true,
      firstName: '',
      lastName: '',
      title: '',
      story: '',
      favoriteColor: '',
      photoUrl: '',
      errorMessage: '',
    };
  }

  async componentDidMount() {
  
  }

  onChangeProfile(type, e) {
    this.setState({[type]: e.target.value})
  }

  onChangeImage(e) {
    let fd = new FormData();
    fd.append('file', e.target.files[0])
    axios.post('/upload', fd).then(res=>{
      this.setState({
        photoUrl: 'http://localhost:3001/images/' +res.data
      })
    })
  }
  
  onNewMember() {
    if (this.validation()){
      let data = {
        firstName: this.state.firstName,
        lastName:  this.state.lastName,
        title: this.state.title,
        story: this.state.story,
        favoriteColor: this.state.favoriteColor,
        photoUrl: this.state.photoUrl,
      }
      axios.post('/team', data).then(res=>{
        console.log('this is team', res)
        window.location.href = '/';
      })
    }
  }

  validation() {
    if (this.state.firstName == ""){
      this.setState({ errorMessage: "Please input First Name!" });
      return false;
    }
    if (this.state.lastName == ""){
      this.setState({ errorMessage: "Please input Last Name!" });
      return false;
    }
    if (this.state.title == ""){
      this.setState({ errorMessage: "Please input Title!" });
      return false;
    }
    if (this.state.story == ""){
      this.setState({ errorMessage: "Please input Story!" });
      return false;
    }
    if (this.state.favoriteColor == ""){
      this.setState({ errorMessage: "Please input FavoriteColor!" });
      return false;
    }
    if (this.state.photoUrl == ""){
      this.setState({ errorMessage: "Please input Photo!" });
      return false
    }
    return true
  }
  render() {
    return (
      <div className='creat'>
        <div className='creat-card'>
          <div className='creat-image'>
            {!this.state.photoUrl?(
              <img
                className='avatar'
                src={imgEmptyAvatar}
              />
            ):(
              <img
                className='avatar'
                src={this.state.photoUrl}
              />
            )}
            
          </div>
          <div className='creat-grid'>
            <div className='creat-item'>
              <div className=''>First Name*</div>
              <input type="text" className='w-100' onChange={(e)=>this.onChangeProfile('firstName', e)}/>
            </div>
            <div className='creat-item'>
              <div>Last Name*</div>
              <input type="text" className='w-100' onChange={(e)=>this.onChangeProfile('lastName', e)}/>
            </div>
          </div>
          <div>
            <div>Title*</div>
            <input type="text" className='w-100' onChange={(e)=>this.onChangeProfile('title', e)}/>
          </div>
          <div className='mt-20'>
            <div>Story*</div>
            <textarea type="text" rows={3} className='w-100'  onChange={(e)=>this.onChangeProfile('story', e)}></textarea>
          </div>
          <div className='creat-grid mt-20'>
            <div className='creat-item'>
              <div>Favorite Color*</div>
              <div className='d-flex'>
                <input type="color" onChange={(e)=>this.onChangeProfile('favoriteColor', e)}/>
                <div style={{marginLeft: 20}}>{this.state.favoriteColor}</div>   
              </div>
            </div>
            <div className='creat-item'>
              <div>Photo Url*</div>
              <input type="file" className='w-100' accept="image/png, image/jpeg" onChange={(e)=>this.onChangeImage(e)}/>
            </div>
          </div>
          <div className='error-message'>
            {this.state.errorMessage}
          </div>
          <div className='creat-button-position'>
            <button onClick={()=>this.onNewMember()} className='creat-button'>
              Create New Member
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
