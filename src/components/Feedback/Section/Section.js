import { Component } from 'react';
import PropTypes from 'prop-types';


class Section extends Component{
  render(){
    return(
    <>
    <h2>{this.props.title}</h2>
      {this.props.children}
    </>
    )
  }
}

Section.propTypes = {
  title:PropTypes.string
}

export default Section;
