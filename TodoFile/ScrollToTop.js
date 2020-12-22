import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollToTop.css";

class ScrollingWrapper extends React.Component {
  state = { hasScrolled: false };

  componentDidMount() {
    this.scrollingWrapper.addEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    if (this.scrollingWrapper.scrollTop > 200 && !this.state.hasScrolled) {
      this.setState({ hasScrolled: true });
    } else if (
      this.scrollingWrapper.scrollTop < 200 &&
      this.state.hasScrolled
    ) {
      this.setState({ hasScrolled: false });
    }
  };

  scrollToTop = () => {
    this.scrollingWrapper.scrollTop = 0;
  };

  reference = (id) => (ref) => {
    this[id] = ref;
  };

  render() {
    return (
      <div>
        {this.state.hasScrolled && (
          <ScrollToTopIconContainer
            onClick={this.scrollToTop}
            className='scrollToTopIcon'
          >
            <FontAwesomeIcon icon={faArrowCircleUp} className='arrowIcon' />
          </ScrollToTopIconContainer>
        )}
        <ScrollingWrapperContainer ref={this.reference("scrollingWrapper")}>
          {this.props.children}
        </ScrollingWrapperContainer>
      </div>
    );
  }
}

export default ScrollingWrapper;

const ScrollingWrapperContainer = styled.div`
  overflow-y: scroll;
  height: 60vh;
  position: relative;
`;

const ScrollToTopIconContainer = styled.div`
  position: absolute;
  bottom: 28px;
  left: 97%;
  margin-left: -50px;
  z-index: 2;
  cursor: pointer;
  opacity: 0.7;
  text-align: center;
  &:hover {
    opacity: 1;
    animation: wiggle 1s ease;
    animation-iteration-count: 1;
  }
  @keyframes wiggle {
    20% {
      transform: translateY(6px);
    }
    40% {
      transform: translateY(-6px);
    }
    60% {
      transform: translateY(4px);
    }
    80% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
