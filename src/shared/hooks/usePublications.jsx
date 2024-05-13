import { useState } from "react";
import toast from "react-hot-toast";
import { publicationGet as getPublicationsRequest } from "../../service/api";

export const usePublications = () => {
    const [publications, setPublications] = useState([]);

    const getPublications = async () => {
        const publicationData = await getPublicationsRequest();

        if (publicationData.error) {
            return toast.error(
                publicationData.e?.response?.data || 'Error ocurred when reading channels'
            )
        }
        setPublications(publicationData.data.publications);
    }

    return {
        getPublications,
        publications,
        isFetching: !Boolean(publications),
        allPublications: publications,
    }
}