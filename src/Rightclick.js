import React from 'react';
import './App.css';
import Longpress from './Longpress';
import LongPress from "./Longpress";

function Option(props) {
  return props.list.map((l) => <div className={l.class}>{l.option}</div>)
}

export default class Rightclick extends React.Component {
  state = {
      visible: false,
      longpressed: 0,
  };
  
  componentDidMount() {
      document.addEventListener('contextmenu', this._handleContextMenu);
      document.addEventListener('click', this._handleClick);
      document.addEventListener('scroll', this._handleScroll);
  };

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this._handleContextMenu);
    document.removeEventListener('click', this._handleClick);
    document.removeEventListener('scroll', this._handleScroll);
  }

  
  _handleContextMenu = (event) => {
      event.preventDefault();
      
      this.setState({ visible: true });
      
      const clickX = event.clientX;
      const clickY = event.clientY;
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      const rootW = this.root.offsetWidth;
      const rootH = this.root.offsetHeight;
      
      const right = (screenW - clickX) > rootW;
      const left = !right;
      const top = (screenH - clickY) > rootH;
      const bottom = !top;
      
      if (right) {
          this.root.style.left = `${clickX + 5}px`;
      }
      
      if (left) {
          this.root.style.left = `${clickX - rootW - 5}px`;
      }
      
      if (top) {
          this.root.style.top = `${clickY + 5}px`;
      }
      
      if (bottom) {
          this.root.style.top = `${clickY - rootH - 5}px`;
      }
  };

  _handleClick = (event) => {
      const { visible } = this.state;
      const wasOutside = !(event.target.contains === this.root);
      
      if (wasOutside && visible) this.setState({ visible: false, });
      
      if (this.state.longpressed === 1) {
        event.preventDefault();
      
        this.setState({ visible: true });
        
        const clickX = event.clientX;
        const clickY = event.clientY;
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const rootW = this.root.offsetWidth;
        const rootH = this.root.offsetHeight;
        
        const right = (screenW - clickX) > rootW;
        const left = !right;
        const top = (screenH - clickY) > rootH;
        const bottom = !top;
        
        if (right) {
            this.root.style.left = `${clickX + 5}px`;
        }
        
        if (left) {
            this.root.style.left = `${clickX - rootW - 5}px`;
        }
        
        if (top) {
            this.root.style.top = `${clickY + 5}px`;
        }
        
        if (bottom) {
            this.root.style.top = `${clickY - rootH - 5}px`;
        } 
      }
  };

  

  _handleScroll = () => {
      const { visible } = this.state;
      
      if (visible) this.setState({ visible: false, });
  };

  render() {
      const { visible } = this.state;
      
      return(visible || null) && 
          <div ref={ref => {this.root = ref}} className="contextMenu">
             <Option list={this.props.list}/>
          </div>
  };
}

