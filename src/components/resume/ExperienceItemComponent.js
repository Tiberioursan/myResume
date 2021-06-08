import React from 'react';

export class ExperienceItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="item-experience" key={this.props.id}>
                    <div className="item" key={this.props.id}>
                        <div className="bullet hidden-xs">
                        </div>
                        <div className="experience-content">
                            <h3>{this.props.role}<span> / {this.props.date}<br />
                                {this.props.company}</span></h3>
                            <p>
                                {this.props.descr}
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}