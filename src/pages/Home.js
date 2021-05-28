import React, { Component } from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Summary from '../components/Summary'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Main></Main>
                <About></About>
                <Summary></Summary>
                <Projects></Projects>
                <Contact></Contact>
            </div>
        )
    }
}
