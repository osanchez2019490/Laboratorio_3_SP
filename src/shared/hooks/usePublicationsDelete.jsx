import { useState } from "react";
import toast from "react-hot-toast";
import { publicationDelete } from "../../service/api";

export const usePublicationDelete = () => {
    const [isDeleting, setIsDeleting] = useState(false);

    const deletePublication = async (id) => {
        setIsDeleting(true);
        const response = await publicationDelete(id);
        setIsDeleting(false);

        if (response.error) {
            return toast.error(
                response.e?.response?.data ||
                'Error occurred when deleting publication'
            );
        }

        toast.success('Publication deleted successfully');
    };

    return {
        isDeleting,
        deletePublication
    };
};