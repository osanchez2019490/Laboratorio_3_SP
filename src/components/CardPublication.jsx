import React from 'react';
import { FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CardPublication = ({ publication }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{publication.title}</h5>
                <p className="card-text">{publication.description}</p>
                <a href={publication.url} className="btn btn-primary">
                    Read more
                </a>
            </div>
        </div>
    );
};

