import React from 'react';
import './FeatureList.css'

export default class FeatureList extends React.Component {
    render() {
        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                { this.props.features }
            </section>
        );
    }
}