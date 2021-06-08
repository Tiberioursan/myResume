import React from 'react';

export class EducationItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="item" key={this.props.id}>
                    <div className="bullet hidden-xs">
                    </div>
                    <div className="education-content">
                        <h3>{this.props.school}<span> / {this.props.date}</span></h3>
                        <p>
                            {this.props.descr}
                        </p>
                    </div>
                </div>
            </>
        );
    }
}