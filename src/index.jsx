import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';

const PromptContainer = () => {
    const [activeTab, setActiveTab] = useState('bot-prompt');

    const tabStyle = {
        padding: '8px 16px',
        cursor: 'pointer',
        background: '#f5f5f5',
        border: '1px solid #ddd',
        borderBottom: 'none',
        borderRadius: '4px 4px 0 0'
    };

    const activeTabStyle = {
        ...tabStyle,
        background: 'white',
        borderBottom: '1px solid white',
        marginBottom: '-1px'
    };

    return (
        <div className="h-full">
            <div style={{ display: 'flex', gap: '4px', marginBottom: '-1px' }}>
                <button 
                    style={activeTab === 'bot-prompt' ? activeTabStyle : tabStyle}
                    onClick={() => setActiveTab('bot-prompt')}
                >
                    Bot Prompt
                </button>
                <button 
                    style={activeTab === 'your-prompt' ? activeTabStyle : tabStyle}
                    onClick={() => setActiveTab('your-prompt')}
                >
                    Your Prompt
                </button>
                <button 
                    style={activeTab === 'about-prompting' ? activeTabStyle : tabStyle}
                    onClick={() => setActiveTab('about-prompting')}
                >
                    About Prompting
                </button>
            </div>
            
            <div style={{ 
                border: '1px solid #ddd',
                height: 'calc(100% - 36px)',
                background: '#f5f5f5',
                padding: '16px',
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap',
                overflowY: 'auto'
            }}>
                {activeTab === 'bot-prompt' ? (
                    <div>
                        Prompt coming soon...
                    </div>
                ) : activeTab === 'your-prompt' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ flexGrow: 1 }}>
                            Your prompt content will go here
                            <br /><br />
                            <a href="https://overbetai.substack.com/" style={{ color: '#0066cc', textDecoration: 'none' }}>
                                Sign up for the mailing list
                            </a>
                        </div>
                        <button 
                            disabled
                            style={{
                                width: '100%',
                                padding: '8px',
                                marginTop: '16px',
                                background: '#e2e2e2',
                                color: '#666',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'not-allowed'
                            }}
                        >
                            Coming Soon
                        </button>
                    </div>
                ) : (
                    <div>
                        The thing about prompting is
                    </div>
                )}
            </div>
        </div>
    );
};

// Render both components
ReactDOM.createRoot(document.getElementById('visualization-container')).render(<App />);
ReactDOM.createRoot(document.getElementById('prompt-container')).render(<PromptContainer />);