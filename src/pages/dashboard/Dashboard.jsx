import React, { useEffect } from 'react';
import { NavbarDocument } from '../../components/navbars/Navbar';
import { PublicationList } from '../../components/PublicationList';
import { usePublications } from '../../shared/hooks';

export const Dashboard = () => {
    const { allPublications, error } = usePublications();
    const [publications, setPublications] = React.useState(allPublications || []);
  
    useEffect(() => {
      if (error) {
        console.error(error);
      } else {
        setPublications(allPublications || []);
      }
    }, [allPublications, error]);
  
    return (
      <div>
        <NavbarDocument />
        <div className="container-fluid">
          <div className="row">
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
              <PublicationList publications={publications} />
            </main>
          </div>
        </div>
      </div>
    );
  };