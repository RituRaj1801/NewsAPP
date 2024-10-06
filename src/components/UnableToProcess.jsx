import React, { Component } from 'react';

class InteractiveErrorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "We can't process your request now.",
            showRetry: false,
        };
    }

    handleRetry = () => {
        // Simulate a retry action (e.g., fetching data again)
        this.setState({
            errorMessage: "Retrying...",
            showRetry: false,
        });

        // Simulate a delay for the retry process
        setTimeout(() => {
            // Here you can implement your actual retry logic
            // For demonstration, we will just reset the error message
            this.setState({
                errorMessage: "We can't process your request now.",
                showRetry: true,
            });
        }, 2000); // Delay of 2 seconds
    };

    render() {
        return (
            <div style={styles.container}>
                <h2 style={styles.errorMessage}>{this.state.errorMessage}</h2>
                {this.state.showRetry && (
                    <button style={styles.retryButton} onClick={this.handleRetry}>
                        Try Again
                    </button>
                )}
            </div>
        );
    }
}

// Styles for the component
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8d7da',
        border: '1px solid #f5c6cb',
        borderRadius: '10px',
        padding: '20px',
    },
    errorMessage: {
        color: '#721c24',
        marginBottom: '20px',
        textAlign: 'center',
    },
    retryButton: {
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#28a745',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default InteractiveErrorComponent;
