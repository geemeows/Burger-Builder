import React, { Component } from 'react'

import Modal from '@/components/Modal/Modal'

const ErrorHandler = (ChildComponent, httpClient) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillUnmount () {
            httpClient.interceptors.request.eject(this.reqInterceptors)
            httpClient.interceptors.response.eject(this.resInterceptors)
        }
        UNSAFE_componentWillMount () {
            this.reqInterceptors = httpClient.interceptors.request.use(req => {
                this.setState({ error: null })
                return req
            })
            this.resInterceptors = httpClient.interceptors.response.use(res => res, error => {
                this.setState({ error })
            })
        }
        render () {
            return (
                <React.Fragment>
                    <Modal 
                        show={this.state.error}
                        closeSummary={() => this.setState({ error: null })} 
                        >
                        { this.state.error ? this.state.error.message : null }
                    </Modal>
                    <ChildComponent />
                </React.Fragment>
            )
        }
    }
}

export default ErrorHandler