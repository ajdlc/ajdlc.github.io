import React, { Component } from 'react'

export class ProjectsComponent extends Component {

  render() {
    const technologies = this.props.technologies.map((tech, index) => {
        return <li key={index}>{tech}</li>
    });

    const links = this.props.links.map((link, index) => {
        return <a key={index} href={link.url} target="_blank" rel="noreferrer" className="list-group-item list-group-item-action">
            {link.name} <i className={link.iconClasses}></i></a>
    });

    return (
        <div className="row justify-content-around">
            {this.props.iconClasses ?
                // For a non-company based project
                <div className="col-12 col-lg-6 align-self-lg-center mb-3">
                    <h1>{this.props.name} <i className={this.props.iconClasses}></i></h1>
                </div>
                :
                // For a company based project
                <div className="col-12 col-lg-6 align-self-lg-center mb-3">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="inline">{this.props.name}</h1>
                        </div>
                        <div className="col-auto col-sm-12 mt-3">
                            <img src={this.props.logo} alt="US Flag" width={150} height={150} />
                        </div>
                    </div>
                </div>
            }
            <div className="col-12 col-lg-6">
                <div className="container-fluid px-0">
                    <div className="row">
                        <div className="col-12">
                            <h2>What it does</h2>
                        </div>
                        <div className="col-12">
                            {this.props.description}
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <h2>Technologies Used</h2>
                        </div>
                        <div className="col-12">
                            <ul>
                                {technologies}
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <h2>
                                Links
                            </h2>
                        </div>
                        <div className="col-12">
                            <div className="list-group">
                                {links}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-3">
                <hr />
            </div>
        </div>
    )
  }
}

export default ProjectsComponent