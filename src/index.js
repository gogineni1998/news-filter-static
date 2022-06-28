import React from 'react'
import JSON from './db.json'

import ReactDOM from 'react-dom/client'
import Header from './components/header'
import NewsList from './components/news_list'
class App extends React.Component {
        state = {
                news: JSON,
                filtered: [],
                results: JSON.length
        }
        changeColor = (event) => {
                let filtered = this.state.news.filter((item) => {
                        return (
                                item.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
                        )
                })
                this.setState({
                        filtered,
                        results: filtered.length
                })
        }
        render() {
                return (
                        <div>
                                <Header
                                        changeColor={this.changeColor}
                                        count={this.state.results}
                                />
                                <NewsList
                                        news={this.state.filtered.length === 0 ? this.state.news : this.state.filtered}
                                />
                        </div>
                );
        }

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)