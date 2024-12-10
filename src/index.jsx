import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';

const ModelSelector = () => {
    const [selectedModel, setSelectedModel] = useState('');
    const [promptText, setPromptText] = useState('');
    const [showPromptVars, setShowPromptVars] = useState(false);

    const models = [
        { id: 'claude', name: 'Anthropic Claude' },
        { id: 'chatgpt', name: 'OpenAI ChatGPT' },
        { id: 'gemini', name: 'Google Gemini' },
        { id: 'llama', name: 'Meta Llama' },
        { id: 'grok', name: 'xAI Grok' }
    ];

    const promptVars = [
        "{status_all_players}",
        "{status_self}",
        "{bot_position}",
        "{hole_cards}",
        "{preflop_action}",
        "{flop}",
        "{flop_action}",
        "{turn}",
        "{turn_action}",
        "{river}",
        "{river_action}",
        "{current_potsize}",
        "{my_chips_paid_this_street}",
        "{max_chips_paid_this_street}",
        "{pot_odds}",
        "{hand_strength_vs_random}",
        "{session_profits_all_players}",
        "{session_profits_self}"   
    ];

    const inputBoxStyle = {
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '14px',
        boxSizing: 'border-box'
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
                <div style={{ marginTop: '8px' }}>
                    <span style={{ fontSize: '14px' }}>Coming soon! </span>
                    <a
                        href="https://overbetai.substack.com/"
                        style={{
                            color: '#0066cc',
                            textDecoration: 'none',
                            fontSize: '14px'
                        }}
                    >
                        Sign up for the mailing list
                    </a>.
                    <br /><br />
                </div>
                <label
                    htmlFor="model-select"
                    style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontSize: '14px',
                        color: '#333'
                    }}
                >
                    Select Model:
                </label>
                <select
                    id="model-select"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    style={{
                        ...inputBoxStyle,
                        backgroundColor: 'white'
                    }}
                >
                    <option value="">Select a model...</option>
                    {models.map(model => (
                        <option key={model.id} value={model.id}>
                            {model.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label
                    htmlFor="prompt-input"
                    style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontSize: '14px',
                        color: '#333'
                    }}
                >
                    Enter Prompt:
                </label>
                <textarea
                    id="prompt-input"
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    style={{
                        ...inputBoxStyle,
                        height: '200px',
                        resize: 'both',
                        fontFamily: 'monospace'
                    }}
                    placeholder="Enter your prompt here..."
                />
            </div>

            <button
                disabled={!selectedModel || !promptText.trim()}
                style={{
                    width: '100%',
                    padding: '8px',
                    background: !selectedModel || !promptText.trim() ? '#e2e2e2' : '#425B76',
                    color: !selectedModel || !promptText.trim() ? '#666' : 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: !selectedModel || !promptText.trim() ? 'not-allowed' : 'pointer',
                    fontSize: '14px'
                }}
            >
                Send Prompt
            </button>

            <button
                onClick={() => setShowPromptVars(!showPromptVars)}
                style={{
                    marginTop: '16px',
                    padding: '8px',
                    background: '#f0f0f0',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px'
                }}
            >
                {showPromptVars ? 'Hide Prompt Variables' : 'Show Prompt Variables'}
            </button>

            {showPromptVars && (
                <div style={{
                    marginTop: '8px',
                    padding: '8px',
                    background: '#f9f9f9',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    whiteSpace: 'pre-wrap'
                }}>
                    {promptVars.join('\n')}
                </div>
            )}
        </div>
    );
};

const PromptContainer = () => {
    const [activeTab, setActiveTab] = useState('bot-prompt');

    const tabStyle = {
        flex: 1,
        padding: '8px 16px',
        cursor: 'pointer',
        background: '#f5f5f5',
        border: '1px solid #ddd',
        borderBottom: 'none',
        borderRadius: '4px 4px 0 0',
        color: '#000'
    };

    const activeTabStyle = {
        ...tabStyle,
        background: 'white',
        borderBottom: '1px solid white',
        marginBottom: '-1px'
    };

    return (
        <div className="h-full">
            <div style={{ 
                display: 'flex', 
                gap: '4px', 
                marginBottom: '-1px',
                width: '100%'
            }}>
                <button 
                    style={activeTab === 'hand' ? activeTabStyle : tabStyle}
                    onClick={() => setActiveTab('hand')}
                >
                    Hand
                </button>
                <button 
                    style={activeTab === 'stats' ? activeTabStyle : tabStyle}
                    onClick={() => setActiveTab('stats')}
                >
                    Stats
                </button>
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
                    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                        {`You are a professional poker player playing a four-handed no-limit Texas Hold'em cash game with $5-10 blinds. Your opponents are also professionals. You should analyze the game state and make strategic decisions based on your cards and position. Consider poker strategy like position, pot odds, implied odds, hand ranges, and game theory. Track the betting patterns of other players. The goal is to win as many chips as possible in the long run (this is just one hand of thousands that you will be playing each day). After each hand, your chips will reset to $1000, but your overall winnings will be tracked. 

Player Status: `}<strong>{`{status_all_players}`}</strong>{`

You are in `}<strong>{`{bot_position}`}</strong>{` position

You are dealt: `}<strong>{`{hole_cards}`}</strong>{`
    
Preflop action: `}<strong>{`{preflop_action}`}</strong>{`

Flop is: `}<strong>{`{flop}`}</strong>{`
Flop action: `}<strong>{`{flop_action}`}</strong>{`

Turn is: `}<strong>{`{turn}`}</strong>{`
Turn action: `}<strong>{`{turn_action}`}</strong>{`

River is: `}<strong>{`{river}`}</strong>{`
River action: `}<strong>{`{river_action}`}</strong>{`

Current pot size: $`}<strong>{`{current_potsize}`}</strong>{`

Please give your action as a single number, where the number is the total bet size. Use "-10" to indicate fold. Do not explain your actions at all, just give a single integer number as your response (without quotations).`}{`

Example cases:`}{`

Big blind preflop: Use "`}<strong>{`{my_chips_paid_this_street}`}</strong>"{` to check.`}{`

Calling a bet: Use "`}<strong>{`{max_chips_paid_this_street}}`}</strong>"{` to call.`}{`

Raising a bet: If a player bet 10 and you wish to raise to 30 total, use "30".`}
                    </div>

                ) : activeTab === 'your-prompt' ? (
                    <ModelSelector />
                ) : activeTab === 'stats' ? (
                    <div>
                        Stats coming soon...
                    </div>
                ) : (
                    <div id="debug-container">
                    </div>
                )}
            </div>
        </div>
    );
};

// Render both components
ReactDOM.createRoot(document.getElementById('visualization-container')).render(<App />);
ReactDOM.createRoot(document.getElementById('prompt-container')).render(<PromptContainer />);