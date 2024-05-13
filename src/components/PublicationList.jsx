import React, {useEffect} from 'react';
import { CardPublication } from './CardPublication';


export const PublicationList = ({ publications }) => {
  if (!publications) {
    return <div className="row">No publications found</div>;
  }

  return (
    <div className="row">
      {publications.length > 0 ? (
        publications.map((publication) => (
          <div className="col-md-4 mb-3" key={publication._id}>
            <CardPublication publication={publication} />
          </div>
        ))
      ) : (
        <div className="col-md-12">No publications found</div>
      )}
    </div>
  );
};