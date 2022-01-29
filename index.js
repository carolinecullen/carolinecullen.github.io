'use strict';
// import ReactCSSTransitionGroup from 'react-transition-group'; 

const e = React.createElement;
// const sloth = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// class SlothAngel extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return sloth(
//       'button',
//       { onClick: () => this.setState({ liked: true }) }
//     );
//   }
// }

// const domContainer = document.querySelector('#like_button_container');
// const domSloth = document.querySelector('#slothAngel');
// ReactDOM.render(e(LikeButton), domContainer);
// ReactDOM.render(sloth(SlothAngel), domSloth);
