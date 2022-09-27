import { useEffect } from "react";
import { useLocation } from "react-router";

// class ScrollToTop extends Component {
//   componentDidUpdate(prevProps) {
//     const { location } = this.props;
//     if (location.pathname !== prevProps.location.pathname) {
//       window.scrollTo(0, 0);
//     }
//   }

//   render() {
//     const { children } = this.props;
//     return children;
//   }
// }

const ScrollToTop = ({ children }) => {
  const loc = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc]);
  return children;
};

export default ScrollToTop;
