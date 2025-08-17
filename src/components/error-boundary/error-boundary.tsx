import { Component } from "react";
import type { PropsWithChildren } from "react";
import { logErrorEvent } from "@/utils";
import { Link } from "react-router";

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    logErrorEvent(error);
  }

  handleClick = () => {
    this.setState({
      hasError: false,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <Link to="/" onClick={this.handleClick}>
            Back to home page
          </Link>
        </>
      );
    }

    return this.props.children;
  }
}
