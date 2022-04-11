import React, { Component } from "react";
import * as Sentry from '@sentry/react'

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        alert('에러가 발생하였습니다!')
        console.log({error, errorInfo})
        this.setState({
            error: true
        })
        if (process.env.NODE_ENV === 'production') {
            Sentry.captureException(error, { extra: errorInfo})
        }
    }

    render() {
        if(this.state.error) {
            return <h1>에러 발생</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary