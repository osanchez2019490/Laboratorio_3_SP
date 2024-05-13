import { useState } from "react";
import toast from "react-hot-toast";
import { commentDelete } from "../../service/api";

export const useDeleteComment = () => {
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteComment = async (id) => {
        setIsDeleting(true);
        const response = await commentDelete(id);
        setIsDeleting(false);

        if (response.error) {
            return toast.error(
                response.e?.response?.data ||
                'Error occurred when deleting comment'
            );
        }

        toast.success('Comment deleted successfully');
    };

    return {
        isDeleting,
        deleteComment
    };
};