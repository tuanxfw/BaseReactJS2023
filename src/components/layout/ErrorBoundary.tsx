import ErrorBoundaryStyle from "@style/modules/ErrorBoundaryStyle";
import { Card, Typography } from "antd";
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

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
    console.error({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryStyle>
          <Card
            title={<span title={`Error: ${this.state.error?.message}`}>{`Error: ${this.state.error?.message}`}</span>}
          >
            <Card.Grid style={{ width: "100%" }}>
              <Typography.Text>{this.state.error?.stack}</Typography.Text>
            </Card.Grid>
            <Card.Grid style={{ width: "100%" }}>{this.state?.errorInfo?.componentStack}</Card.Grid>
          </Card>
        </ErrorBoundaryStyle>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
