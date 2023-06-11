import React from "react";

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
    console.error({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="error-boundary">
            Error: {this.state.error?.code}
            <br />
            {this.state.error?.message}
            <br />
            {this.state.error?.stack}
            <br />
            {this.state.errorInfo?.componentStack}
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
